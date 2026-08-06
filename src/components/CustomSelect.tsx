import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Check } from 'lucide-react';

export interface CustomSelectOption {
  value: string;
  label: string;
  sublabel?: string;
  badge?: string;
}

interface CustomSelectProps {
  options: CustomSelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select option...',
  className = '',
  size = 'md'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  const pyClass = size === 'sm' ? 'py-1.5 px-3 text-xs' : size === 'lg' ? 'py-3.5 px-4 text-sm' : 'py-2.5 px-3.5 text-xs';

  return (
    <div ref={containerRef} className={`relative inline-block w-full ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-2 bg-[#F8F7F4] hover:bg-white border transition-all cursor-pointer rounded-xl font-mono-tag font-semibold text-[#1C1C1C] text-left shadow-2xs ${
          isOpen ? 'border-[#C73E28] ring-1 ring-[#C73E28]/20 bg-white' : 'border-[#1C1C1C]/20 hover:border-[#1C1C1C]/40'
        } ${pyClass}`}
      >
        <div className="truncate flex items-center gap-2 min-w-0">
          <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
          {selectedOption?.badge && (
            <span className="px-1.5 py-0.5 rounded-full text-[9px] bg-[#C73E28]/10 text-[#C73E28] font-mono-tag font-bold shrink-0">
              {selectedOption.badge}
            </span>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-[#1C1C1C]/60 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#C73E28]' : ''
          }`}
        />
      </button>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute top-full mt-1.5 left-0 right-0 min-w-full z-[200] max-h-64 overflow-y-auto bg-white border border-[#1C1C1C]/20 rounded-xl shadow-2xl py-1 divide-y divide-[#1C1C1C]/10"
          >
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`w-full min-w-0 text-left px-3.5 py-2.5 transition-colors flex items-start justify-between gap-3 cursor-pointer whitespace-normal break-words ${
                    isSelected ? 'bg-[#F8F7F4] text-[#C73E28] font-bold' : 'hover:bg-[#F8F7F4]/80 text-[#1C1C1C]'
                  }`}
                >
                  <div className="min-w-0 flex items-center gap-2 truncate">
                    <span className="min-w-0 text-xs font-mono-tag break-words">{option.label}</span>
                    {option.badge && (
                      <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-[#C73E28]/10 text-[#C73E28] font-mono-tag font-bold shrink-0">
                        {option.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {option.sublabel && (
                      <span className="hidden sm:inline text-[11px] text-[#1C1C1C]/50 font-mono-tag truncate">{option.sublabel}</span>
                    )}
                    {isSelected && <Check className="w-4 h-4 text-[#C73E28] shrink-0" />}
                  </div>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
