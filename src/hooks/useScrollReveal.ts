import React, { useRef } from 'react';
import { useScroll, useTransform, useSpring, MotionValue } from 'motion/react';

export interface ScrollRevealOptions {
  /**
   * The scroll offset viewport triggers.
   * Default: ["start 0.95", "start 0.65"]
   */
  offset?: [string, string];
  /**
   * Translation range on Y axis (in pixels).
   * Default: [32, 0]
   */
  yRange?: [number, number];
  /**
   * Opacity transition range.
   * Default: [0, 1]
   */
  opacityRange?: [number, number];
  /**
   * Scale transition range.
   * Default: [0.98, 1]
   */
  scaleRange?: [number, number];
}

export interface ScrollRevealResult {
  ref: React.RefObject<HTMLDivElement | null>;
  style: {
    opacity: MotionValue<number>;
    y: MotionValue<number>;
    scale: MotionValue<number>;
  };
  scrollYProgress: MotionValue<number>;
}

/**
 * Custom hook that tracks scroll position relative to a target ref
 * and returns silky smooth, physics-spring transformed motion styles for scroll-reveal animations.
 */
export function useScrollReveal({
  offset = ['start 0.95', 'start 0.60'],
  yRange = [40, 0],
  opacityRange = [0, 1],
  scaleRange = [0.98, 1],
}: ScrollRevealOptions = {}): ScrollRevealResult {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001,
  });

  const opacity = useTransform(smoothProgress, [0, 1], opacityRange);
  const y = useTransform(smoothProgress, [0, 1], yRange);
  const scale = useTransform(smoothProgress, [0, 1], scaleRange);

  return {
    ref,
    style: {
      opacity,
      y,
      scale,
    },
    scrollYProgress: smoothProgress,
  };
}
