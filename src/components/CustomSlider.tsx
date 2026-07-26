import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';

interface CustomSliderProps {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (val: number) => void;
  unit?: string;
  className?: string;
}

export const CustomSlider: React.FC<CustomSliderProps> = ({
  value,
  min,
  max,
  step = 1,
  onChange,
  unit = '',
  className = ''
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

  const calculateValueFromPointer = useCallback(
    (clientX: number) => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const relativeX = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const rawPct = relativeX / rect.width;
      const rawValue = min + rawPct * (max - min);

      // Snap to step
      const steppedValue = Math.round((rawValue - min) / step) * step + min;
      const clamped = Math.min(max, Math.max(min, steppedValue));
      onChange(clamped);
    },
    [min, max, step, onChange]
  );

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    calculateValueFromPointer(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      calculateValueFromPointer(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // Safe fallback
      }
    }
  };

  return (
    <div className={`relative py-3 touch-none select-none ${className}`}>
      {/* Slider Track */}
      <div
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="relative h-2.5 w-full bg-[#F8F7F4] border border-[#1C1C1C]/15 rounded-full cursor-pointer overflow-visible flex items-center"
      >
        {/* Filled Active Track */}
        <div
          className="absolute left-0 top-0 bottom-0 bg-[#C73E28] rounded-full transition-all duration-75"
          style={{ width: `${percentage}%` }}
        />

        {/* Animated Custom Thumb */}
        <motion.div
          animate={{ scale: isDragging ? 1.2 : 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="absolute -translate-x-1/2 w-5 h-5 rounded-full bg-white border-2 border-[#C73E28] shadow-md cursor-grab active:cursor-grabbing flex items-center justify-center group"
          style={{ left: `${percentage}%` }}
        >
          {/* Inner accent dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#C73E28]" />

          {/* Value Floating Tooltip */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#1C1C1C] text-[#F8F7F4] text-[10px] font-mono-tag font-bold rounded shadow-md pointer-events-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            {value} {unit}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
