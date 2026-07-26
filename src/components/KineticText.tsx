import React from 'react';
import { motion } from 'motion/react';

interface KineticTextProps {
  text: string;
  type?: 'words' | 'chars' | 'slide-x';
  direction?: 'left' | 'right' | 'up' | 'down';
  distance?: number;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  highlightWords?: string[];
  highlightClass?: string;
  once?: boolean;
  depth?: boolean;
  scale?: number;
  rotate?: number;
}

/**
 * High-performance typographic kinetic text component.
 * Animates text character-by-character or word-by-word with horizontal/vertical motion
 * and multi-layered depth scale effects directly on semantic text tags (h1, h2, h3, p, span).
 */
export const KineticText: React.FC<KineticTextProps> = ({
  text,
  type = 'words',
  direction = 'left',
  distance = 35,
  className = '',
  delay = 0,
  stagger = 0.03,
  as = 'h2',
  highlightWords = [],
  highlightClass = 'text-[#C73E28] font-bold',
  once = true,
  depth = true,
  scale = 0.95,
  rotate = 0,
}) => {
  const Component = motion[as] || motion.h2;

  const initialX = direction === 'left' ? -distance : direction === 'right' ? distance : 0;
  const initialY = direction === 'up' ? distance : direction === 'down' ? -distance : 0;

  if (type === 'slide-x') {
    return (
      <Component
        initial={{
          opacity: 0,
          x: initialX,
          y: initialY,
          scale: depth ? scale : 1,
          rotate: rotate,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        viewport={{ once, margin: '-40px' }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {text}
      </Component>
    );
  }

  if (type === 'chars') {
    const chars = Array.from(text);

    return (
      <Component className={className}>
        {chars.map((char, idx) => (
          <motion.span
            key={`${char}-${idx}`}
            initial={{
              opacity: 0,
              x: initialX,
              y: initialY,
              scale: depth ? scale : 1,
              rotate: rotate || (direction === 'left' ? -6 : 6),
            }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
            viewport={{ once, margin: '-30px' }}
            transition={{
              duration: 0.45,
              delay: delay + idx * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block whitespace-pre"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </Component>
    );
  }

  const words = text.split(' ');

  return (
    <Component className={className}>
      {words.map((word, idx) => {
        const isHighlight = highlightWords.some(
          (hw) => word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <motion.span
            key={`${word}-${idx}`}
            initial={{
              opacity: 0,
              x: initialX,
              y: initialY,
              scale: depth ? (isHighlight ? 0.88 : scale) : 1,
              rotate: rotate || (isHighlight ? -2 : 0),
            }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
            viewport={{ once, margin: '-40px' }}
            transition={{
              duration: 0.52,
              delay: delay + idx * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`inline-block whitespace-pre mr-[0.25em] ${
              isHighlight ? highlightClass : ''
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </Component>
  );
};

