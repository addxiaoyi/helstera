import React from 'react';
import { motion } from 'motion/react';
import { useScrollReveal, ScrollRevealOptions } from '../hooks/useScrollReveal';

interface ScrollRevealHeadingProps extends ScrollRevealOptions {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  as?: 'div' | 'header' | 'section';
  kinetic?: boolean;
  direction?: 'left' | 'right' | 'up';
}

/**
 * Reusable section heading wrapper that applies scroll-linked opacity, 
 * text kinetic motion, and subtle translation using useScroll and useTransform.
 */
export const ScrollRevealHeading: React.FC<ScrollRevealHeadingProps> = ({
  children,
  text,
  className = '',
  offset,
  yRange,
  opacityRange,
  scaleRange,
  as = 'div',
  kinetic = false,
  direction = 'left'
}) => {
  const { ref, style } = useScrollReveal({
    offset,
    yRange,
    opacityRange,
    scaleRange,
  });

  const MotionComponent = motion[as] || motion.div;

  if (kinetic && text) {
    const words = text.split(' ');
    const initialX = direction === 'left' ? -30 : direction === 'right' ? 30 : 0;
    const initialY = direction === 'up' ? 20 : 0;

    return (
      <MotionComponent ref={ref} style={style} className={className}>
        {words.map((word, idx) => (
          <motion.span
            key={`${word}-${idx}`}
            initial={{ opacity: 0, x: initialX, y: initialY }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.5,
              delay: idx * 0.04,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="inline-block whitespace-pre mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent ref={ref} style={style} className={className}>
      {children}
    </MotionComponent>
  );
};

