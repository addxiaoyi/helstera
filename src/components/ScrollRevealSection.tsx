import React from 'react';
import { motion } from 'motion/react';
import { useScrollReveal, ScrollRevealOptions } from '../hooks/useScrollReveal';

interface ScrollRevealSectionProps extends ScrollRevealOptions {
  children: React.ReactNode;
  className?: string;
  as?: 'section' | 'div' | 'article';
}

/**
 * Reusable layout section container that applies smooth scroll-driven opacity, 
 * upward translation, and visual scale using Framer Motion's useScroll and useTransform.
 */
export const ScrollRevealSection: React.FC<ScrollRevealSectionProps> = ({
  children,
  className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  offset,
  yRange,
  opacityRange,
  scaleRange,
  as = 'section'
}) => {
  const { ref, style } = useScrollReveal({
    offset: offset || ['start 0.95', 'start 0.55'],
    yRange: yRange || [48, 0],
    opacityRange: opacityRange || [0, 1],
    scaleRange: scaleRange || [0.98, 1],
  });

  const MotionComponent = motion[as] || motion.section;

  return (
    <MotionComponent ref={ref} style={style} className={className}>
      {children}
    </MotionComponent>
  );
};
