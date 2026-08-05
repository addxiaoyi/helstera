import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { KineticText } from './KineticText';
import { useLanguage } from '../i18n/LanguageContext';
import {
  ShieldCheck,
  Zap,
  Globe,
  Lock,
  Cpu,
  Sparkles,
  ArrowRight,
  Key,
  CheckCircle2,
  Terminal,
  MousePointer
} from 'lucide-react';

interface KeynoteScrollStoryProps {
  openApiKeyModal: () => void;
  openContractModal: () => void;
}

interface Chapter {
  id: string;
  actNumber: string;
  title: string;
  subtitle: string;
  quote: string;
  badge: string;
  highlightStat: string;
  numVal?: number;
  numPrefix?: string;
  numSuffix?: string;
  statLabel: string;
  icon: React.ReactNode;
  detailPoints: string[];
  gradient: string;
}

export const KeynoteScrollStory: React.FC<KeynoteScrollStoryProps> = ({
  openApiKeyModal,
  openContractModal
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const { t } = useLanguage();
  const story = t.ui.story;

  const chapters: Chapter[] = [
    {
      id: 'dilemma',
      ...story.chapters.dilemma,
      detailPoints: Object.values(story.chapters.dilemma.detailPoints),
      icon: <Globe className="w-6 h-6 text-amber-500" />,
      gradient: 'from-amber-500/20 via-orange-500/10 to-transparent'
    },
    {
      id: 'breakthrough',
      ...story.chapters.breakthrough,
      detailPoints: Object.values(story.chapters.breakthrough.detailPoints),
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent'
    },
    {
      id: 'engine',
      ...story.chapters.engine,
      detailPoints: Object.values(story.chapters.engine.detailPoints),
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent'
    },
    {
      id: 'trust',
      ...story.chapters.trust,
      detailPoints: Object.values(story.chapters.trust.detailPoints),
      icon: <Zap className="w-6 h-6 text-emerald-500" />,
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent'
    }
  ];

  // Map mouse wheel / container scroll progress to active chapter index
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Divide 0..1 into 4 smooth segments
    if (latest < 0.25) {
      if (activeChapterIndex !== 0) setActiveChapterIndex(0);
    } else if (latest < 0.50) {
      if (activeChapterIndex !== 1) setActiveChapterIndex(1);
    } else if (latest < 0.75) {
      if (activeChapterIndex !== 2) setActiveChapterIndex(2);
    } else {
      if (activeChapterIndex !== 3) setActiveChapterIndex(3);
    }
  });

  const current = chapters[activeChapterIndex];

  return (
    <div ref={containerRef} className="relative h-[220vh] sm:h-[260vh]">
      {/* Sticky Frame that stays pinned while wheel scrolling through acts */}
      <div className="sticky top-16 sm:top-20 py-6 min-h-[80vh] flex flex-col justify-center">
        <div className="space-y-8">
          {/* Editorial Keynote Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto px-4">
            <KineticText
              text={t.story.title}
              type="words"
              direction="left"
              stagger={0.04}
              highlightWords={['Infinite', 'Compute', 'Potential.', '无限算力。', '無限の可能性。']}
              highlightClass="italic font-normal text-[#C73E28]"
              as="h2"
              className="font-serif-title text-3xl sm:text-5xl font-semibold tracking-tight text-[#1C1C1C]"
            />
            <KineticText
              text={t.story.subtitle}
              type="words"
              direction="right"
              stagger={0.02}
              delay={0.15}
              as="p"
              className="text-xs sm:text-sm text-[#1C1C1C]/70 font-sans max-w-xl mx-auto"
            />
          </div>

          {/* Interactive Chapter Rail & Visual Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto px-4 sm:px-6">
            
            {/* Left Column: Interactive Chapter Timeline Rail */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-2">
              {chapters.map((chap, idx) => {
                const isActive = idx === activeChapterIndex;

                return (
                  <button
                    key={chap.id}
                    onClick={() => setActiveChapterIndex(idx)}
                    className={`w-full text-left py-3 px-4 transition-all cursor-pointer border-b relative overflow-hidden group ${
                      isActive
                        ? 'border-[#C73E28] text-[#1C1C1C]'
                        : 'border-[#1C1C1C]/15 text-[#1C1C1C]/60 hover:border-[#1C1C1C]/40'
                    }`}
                  >
                    {/* Active Indicator Left Accent Line */}
                    {isActive && (
                      <motion.div
                        layoutId="activeChapterLine"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        className="absolute left-0 top-0 bottom-0 w-1 bg-[#C73E28]"
                      />
                    )}

                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono-tag font-bold tracking-widest uppercase ${isActive ? 'text-[#C73E28]' : 'text-[#1C1C1C]/50'}`}>
                        {chap.actNumber} • {chap.badge}
                      </span>
                    </div>

                    <div className="mt-1 space-y-0.5">
                      <h3 className={`font-serif-title text-base sm:text-lg font-semibold ${isActive ? 'text-[#1C1C1C]' : 'text-[#1C1C1C]/70 group-hover:text-[#1C1C1C]'}`}>
                        {chap.title}
                      </h3>
                      <p className="text-xs text-[#1C1C1C]/60 line-clamp-1 font-sans">
                        {chap.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Keynote Stage Driven by Wheel Progress */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full py-6 px-6 sm:px-8 border-l-2 border-[#C73E28] border-y border-r border-[#1C1C1C]/15 flex flex-col justify-between relative overflow-hidden bg-white/50"
                >
                  {/* Top Chapter Header */}
                  <div className="space-y-5 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-[#F8F7F4] text-xs font-mono-tag font-semibold text-[#C73E28] border border-[#1C1C1C]/10">
                        {current.actNumber}: {current.badge}
                      </span>
                      {/* Live Scroll Act Progress Dots */}
                      <div className="flex items-center gap-1.5">
                        {chapters.map((_, dotIdx) => (
                          <span
                            key={dotIdx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              dotIdx === activeChapterIndex ? 'w-5 bg-[#C73E28]' : 'w-1.5 bg-[#1C1C1C]/20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Main Quote Statement */}
                    <div className="space-y-2">
                      <h3 className="font-serif-title text-2xl sm:text-4xl font-semibold text-[#1C1C1C] tracking-tight leading-tight">
                        {current.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#1C1C1C]/80 italic leading-relaxed border-l-2 border-[#C73E28] pl-3 py-0.5 font-serif-title">
                        {current.quote}
                      </p>
                    </div>

                    {/* Highlight Stat Counter Block */}
                    <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#1C1C1C]/10 flex items-center justify-between gap-4">
                      <div>
                        <div className="text-2xl sm:text-4xl font-semibold text-[#1C1C1C] font-mono-tag tracking-tight">
                          {current.highlightStat}
                        </div>
                        <div className="text-xs font-semibold text-[#1C1C1C]/70">
                          {current.statLabel}
                        </div>
                      </div>
                    </div>

                    {/* Key Bullet Highlights */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[11px] font-mono-tag uppercase tracking-wider text-[#1C1C1C]/50 font-semibold">
                        {story.keyDetails}
                      </div>
                      <div className="space-y-1.5">
                        {current.detailPoints.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2 text-xs sm:text-sm text-[#1C1C1C]/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C73E28] shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Interactive CTA Action Bar */}
                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#1C1C1C]/10 relative z-10 mt-4">
                    <div className="flex items-center gap-2 text-xs text-[#1C1C1C]/60 font-mono-tag">
                      <Lock className="w-3.5 h-3.5 text-[#C73E28]" />
                        <span>{story.retentionAttached}</span>
                    </div>

                    <div className="flex items-center gap-2.5 w-full sm:w-auto">
                      <button
                        onClick={openApiKeyModal}
                        className="btn-editorial-primary flex-1 sm:flex-none py-2 px-3.5 text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Key className="w-3.5 h-3.5" />
                        <span>{story.requestKey}</span>
                      </button>

                      <button
                        onClick={openContractModal}
                        className="btn-editorial-outline flex-1 sm:flex-none py-2 px-3.5 text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>{story.dpaContract}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

