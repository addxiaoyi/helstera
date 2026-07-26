import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, useTransform, animate } from 'motion/react';

interface NumberTickerProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number; // duration in seconds
  className?: string;
  stiffness?: number;
  damping?: number;
  formatThousands?: boolean;
}

/**
 * Reusable NumberTicker component using Framer Motion's useInView, animate,
 * and useSpring for smooth spring-damped count-up stats animations.
 */
export const NumberTicker: React.FC<NumberTickerProps> = ({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1.6,
  className = '',
  stiffness = 80,
  damping = 20,
  formatThousands = false,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const rawMotionValue = useMotionValue(0);

  // Smooth count up with spring physics
  const springValue = useSpring(rawMotionValue, {
    stiffness,
    damping,
    restDelta: 0.001,
  });

  const rounded = useTransform(springValue, (latest) => {
    const numStr = latest.toFixed(decimals);
    if (formatThousands) {
      const parts = numStr.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');
    }
    return numStr;
  });

  const [displayText, setDisplayText] = useState(() => {
    const initVal = (0).toFixed(decimals);
    return `${prefix}${initVal}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(rawMotionValue, value, {
        duration,
        ease: [0.16, 1, 0.3, 1], // silky smooth cubic-bezier
      });
      return () => controls.stop();
    }
  }, [isInView, rawMotionValue, value, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      setDisplayText(`${prefix}${v}${suffix}`);
    });
    return () => unsubscribe();
  }, [rounded, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
};

