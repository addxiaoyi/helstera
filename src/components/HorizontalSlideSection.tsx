import React from 'react';
import { motion } from 'motion/react';

interface HorizontalSlideSectionProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'alternate';
  distance?: number;
  className?: string;
  delay?: number;
  once?: boolean;
}

/**
 * High-impact scroll-triggered horizontal sliding entrance wrapper.
 * Elements slide in smoothly from the far left (-x) or far right (+x) as they enter the viewport,
 * providing the exaggerated promotional standalone-site feel requested by the user.
 */
export const HorizontalSlideSection: React.FC<HorizontalSlideSectionProps> = ({
  children,
  direction = 'left',
  distance = 120,
  className = '',
  delay = 0,
  once = true
}) => {
  const getInitialX = (index = 0) => {
    if (direction === 'left') return -distance;
    if (direction === 'right') return distance;
    return index % 2 === 0 ? -distance : distance;
  };

  // If children is an array, we can stagger them with alternating directions
  if (Array.isArray(children)) {
    return (
      <div className={`${className} min-w-0 overflow-x-clip`}>
        {children.map((child, idx) => {
          const xInitial = getInitialX(idx);
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: xInitial, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: delay + idx * 0.12,
                ease: [0.16, 1, 0.3, 1] // Custom snappy spring ease
              }}
            >
              {child}
            </motion.div>
          );
        })}
      </div>
    );
  }

  const initialX = getInitialX(0);

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once, margin: '-60px' }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`${className} min-w-0 overflow-x-clip`}
    >
      {children}
    </motion.div>
  );
};
