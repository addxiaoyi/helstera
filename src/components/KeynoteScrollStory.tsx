import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { KineticText } from './KineticText';
import { NumberTicker } from './NumberTicker';
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

  const chapters: Chapter[] = [
    {
      id: 'dilemma',
      actNumber: 'ACT I',
      title: 'The Cross-Border Wall',
      subtitle: 'Global AI developers faced a choice: high API prices or regulatory risk.',
      quote: '"Connecting international software with China’s premier LLM models required navigating data privacy, network latency, and legal compliance."',
      badge: 'The Challenge',
      highlightStat: '$15 / 1M',
      numVal: 15,
      numPrefix: '$',
      numSuffix: ' / 1M',
      statLabel: 'Legacy OpenAI GPT-4o Cost',
      icon: <Globe className="w-6 h-6 text-amber-500" />,
      detailPoints: [
        'Geographical IP blocks and unstable proxy routes',
        'Unclear enterprise data protection standards',
        'Restrictive API access for non-local software teams'
      ],
      gradient: 'from-amber-500/20 via-orange-500/10 to-transparent'
    },
    {
      id: 'breakthrough',
      actNumber: 'ACT II',
      title: 'The Shantou Pilot Bridge',
      subtitle: 'A legally compliant gateway engineered inside China’s Special Pilot Zone.',
      quote: '"We built direct optical submarine cable lines with Zero Data Retention (ZDR) — RAM-only volatile processing with enterprise DPA legal backing."',
      badge: 'The Innovation',
      highlightStat: '< 180ms',
      numVal: 180,
      numPrefix: '< ',
      numSuffix: 'ms',
      statLabel: 'IPLC Direct Optical Latency',
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      detailPoints: [
        'Direct connection via Shantou Data Pilot Zone',
        'Zero Data Retention (ZDR) RAM volatile isolation',
        'Enforceable Commercial Paper & DPA Contracts'
      ],
      gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent'
    },
    {
      id: 'engine',
      actNumber: 'ACT III',
      title: 'Native MoE Compute Power',
      subtitle: 'DeepSeek-V3, R1, Qwen-Max, and GLM-4 — all in one drop-in endpoint.',
      quote: '"Change one line of code. Use your existing OpenAI SDK. Access China’s most powerful Mixture-of-Experts (MoE) reasoning models instantly."',
      badge: 'The Engine',
      highlightStat: '184 tok/s',
      numVal: 184,
      numSuffix: ' tok/s',
      statLabel: 'DeepSeek-V3 Inference Speed',
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      detailPoints: [
        'DeepSeek-V3 671B MoE architecture',
        'DeepSeek-R1 reasoning chain-of-thought engine',
        '100% OpenAI Python & Node.js drop-in compatibility'
      ],
      gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent'
    },
    {
      id: 'trust',
      actNumber: 'ACT IV',
      title: 'Unbeatable Unit Economics',
      subtitle: '80% cost reduction with guaranteed 99.9% enterprise uptime SLA.',
      quote: '"Enterprise AI compute shouldn’t cost a fortune. Scale your production workload with total peace of mind and transparent pay-as-you-go pricing."',
      badge: 'The Result',
      highlightStat: '80% Off',
      numVal: 80,
      numSuffix: '% Off',
      statLabel: 'Compared to Western Benchmarks',
      icon: <Zap className="w-6 h-6 text-emerald-500" />,
      detailPoints: [
        'DeepSeek-V3 at just $0.27 / 1M input tokens',
        'Pre-loaded free trial credits for developer testing',
        '24/7 dedicated enterprise response SLA'
      ],
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
                          {current.numVal !== undefined ? (
                            <NumberTicker
                              value={current.numVal}
                              prefix={current.numPrefix || ''}
                              suffix={current.numSuffix || ''}
                              duration={1.2}
                            />
                          ) : (
                            current.highlightStat
                          )}
                        </div>
                        <div className="text-xs font-semibold text-[#1C1C1C]/70">
                          {current.statLabel}
                        </div>
                      </div>
                    </div>

                    {/* Key Bullet Highlights */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[11px] font-mono-tag uppercase tracking-wider text-[#1C1C1C]/50 font-semibold">
                        Key Architecture Details
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
                      <span>Zero Data Retention SLA</span>
                    </div>

                    <div className="flex items-center gap-2.5 w-full sm:w-auto">
                      <button
                        onClick={openApiKeyModal}
                        className="btn-editorial-primary flex-1 sm:flex-none py-2 px-3.5 text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Key className="w-3.5 h-3.5" />
                        <span>Request Key</span>
                      </button>

                      <button
                        onClick={openContractModal}
                        className="btn-editorial-outline flex-1 sm:flex-none py-2 px-3.5 text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>DPA Contract</span>
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

