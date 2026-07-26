import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface ChapterItem {
  id: string;
  label: string;
  number: string;
}

const CHAPTERS: ChapterItem[] = [
  { id: 'hero-section', label: 'Gateway', number: '01' },
  { id: 'story-section', label: 'Story', number: '02' },
  { id: 'features-section', label: 'Why Us', number: '03' },
  { id: 'models-section', label: 'Models', number: '04' },
  { id: 'calculator-section', label: 'Savings', number: '05' },
  { id: 'compliance-section', label: 'DPA Legal', number: '06' },
  { id: 'faq-section', label: 'FAQ', number: '07' }
];

export const ScrollProgressTracker: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState('hero-section');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }

      // Detect active section
      for (const chap of CHAPTERS) {
        const el = document.getElementById(chap.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= 100) {
            setActiveChapter(chap.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-3 font-mono-tag text-[11px] pointer-events-auto">
      {/* Scroll Progress Line */}
      <div className="w-0.5 h-32 bg-[#1C1C1C]/10 rounded-full relative overflow-hidden mb-2">
        <motion.div
          className="w-full bg-[#C73E28] rounded-full"
          style={{ height: `${Math.min(100, Math.max(0, scrollProgress * 100))}%` }}
        />
      </div>

      {/* Chapters Navigation */}
      <div className="flex flex-col gap-2 items-end">
        {CHAPTERS.map((chap) => {
          const isActive = activeChapter === chap.id;
          return (
            <button
              key={chap.id}
              onClick={() => scrollToSection(chap.id)}
              className={`flex items-center gap-2 group transition cursor-pointer px-2 py-1 rounded-full ${
                isActive
                  ? 'bg-white border border-[#1C1C1C]/15 text-[#C73E28] font-bold shadow-2xs'
                  : 'text-[#1C1C1C]/40 hover:text-[#1C1C1C]'
              }`}
            >
              <span className={`text-[9px] ${isActive ? 'text-[#C73E28]' : 'text-[#1C1C1C]/30'}`}>
                {chap.number}
              </span>
              <span className="text-[11px] font-mono-tag">
                {chap.label}
              </span>
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  isActive ? 'bg-[#C73E28] scale-125' : 'bg-[#1C1C1C]/20 group-hover:bg-[#1C1C1C]/50'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
