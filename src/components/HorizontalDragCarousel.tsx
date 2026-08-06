import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { KineticText } from './KineticText';
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  TrendingUp,
  Code2,
  Headphones,
  Stethoscope,
  ShieldCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface HorizontalDragCarouselProps {
  openApiKeyModal: () => void;
  openContractModal: () => void;
}

export const HorizontalDragCarousel: React.FC<HorizontalDragCarouselProps> = ({
  openApiKeyModal,
  openContractModal
}) => {
  const { t } = useLanguage();
  const carousel = t.ui.carousel;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const useCases = [
    {
      id: 'finance',
      title: 'High-Frequency Algorithmic Trading Agents',
      category: 'Financial Engineering',
      icon: <TrendingUp className="w-5 h-5 text-[#C73E28]" />,
      stats: 'Reasoning routes • Account policy review',
      description: 'Run automated market analysis, financial report processing, and sentiment workflows with a current route and a documented account data policy.',
      cta: 'Deploy Finance Agent'
    },
    {
      id: 'coding',
      title: 'Autonomous Code Review & Refactoring Pipelines',
      category: 'Developer Operations',
      icon: <Code2 className="w-5 h-5 text-[#C73E28]" />,
      stats: 'Current reasoning routes • OpenAI-compatible API',
      description: 'Plug the OpenAI-compatible endpoint into CI/CD pipelines to generate tests, review changes, and improve code with a route ID your team can govern.',
      cta: 'Setup CI/CD Pipeline'
    },
    {
      id: 'multimodal',
      title: 'Real-Time Voice & Multimodal Customer Agents',
      category: 'Customer Experience',
      icon: <Headphones className="w-5 h-5 text-[#C73E28]" />,
      stats: 'Multimodal routes • Live route health',
      description: 'Power voice agents and image analysis workflows with current multimodal routes, then validate streaming behavior against your own traffic.',
      cta: 'Build Voice Agent'
    },
    {
      id: 'legal',
      title: 'Enterprise Legal Contract & DPA Audit Engine',
      category: 'Compliance & Legal Tech',
      icon: <ShieldCheck className="w-5 h-5 text-[#C73E28]" />,
      stats: 'DPA and service schedule • Policy review',
      description: 'Analyze sensitive cross-border legal agreements, compliance reports, and patent filings with a documented processing scope and contract review path.',
      cta: 'Request Legal DPA'
    },
    {
      id: 'med',
      title: 'Medical Research & Biomedical Literature Summarization',
      category: 'Healthcare & Biotech',
      icon: <Stethoscope className="w-5 h-5 text-[#C73E28]" />,
      stats: 'Long-context route • Kimi K3',
      description: 'Process medical journals, clinical trials, and research papers with a current long-context route and a documented data policy.',
      cta: 'Access Medical LLMs'
    }
  ];

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.75;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-w-0 space-y-8">
      {/* Direct Kinetic Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="min-w-0 space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C73E28]/10 text-[#C73E28] text-xs font-mono-tag font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{carousel.eyebrow}</span>
          </div>
          <KineticText
            text={carousel.title}
            type="words"
            direction="left"
            stagger={0.04}
            as="h2"
            className="font-serif-title text-3xl sm:text-5xl font-semibold text-[#1C1C1C] tracking-tight"
          />
          <KineticText
            text={carousel.subtitle}
            type="words"
            direction="right"
            stagger={0.02}
            delay={0.15}
            as="p"
            className="text-xs sm:text-sm text-[#1C1C1C]/75 font-sans leading-relaxed"
          />
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="p-2.5 rounded-full border border-[#1C1C1C]/20 bg-white text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-[#F8F7F4] transition disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            aria-label={carousel.scrollLeft}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="p-2.5 rounded-full border border-[#1C1C1C]/20 bg-white text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-[#F8F7F4] transition disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            aria-label={carousel.scrollRight}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Drag / Scroll Horizontal Track */}
      <div
        ref={carouselRef}
        onScroll={checkScroll}
        className="min-w-0 flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth overscroll-x-contain"
      >
        {useCases.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -4 }}
            className="min-w-0 shrink-0 w-[calc(100vw-2rem)] max-w-[380px] sm:w-[380px] bg-white/80 backdrop-blur-xs border border-[#1C1C1C]/15 hover:border-[#C73E28] rounded-2xl p-5 sm:p-7 flex flex-col justify-between space-y-6 shadow-2xs hover:shadow-md transition-all snap-start group"
          >
            <div className="space-y-4">
              <div className="flex min-w-0 items-start justify-between gap-3">
                <div className="p-2.5 rounded-xl bg-[#C73E28]/10 text-[#C73E28]">
                  {item.icon}
                </div>
                <span className="min-w-0 text-right text-[10px] font-mono-tag font-bold text-[#1C1C1C]/50 uppercase tracking-wider break-words">
                  {carousel.useCases[item.id].category}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif-title text-xl sm:text-2xl font-semibold text-[#1C1C1C] group-hover:text-[#C73E28] transition-colors leading-snug break-words">
                  {carousel.useCases[item.id].title}
                </h3>
                <p className="text-xs font-mono-tag text-[#C73E28] font-semibold">
                  {carousel.useCases[item.id].stats}
                </p>
                <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans pt-1">
                  {carousel.useCases[item.id].description}
                </p>
              </div>
            </div>

            <button
              onClick={item.id === 'legal' ? openContractModal : openApiKeyModal}
              className="btn-editorial-outline w-full min-w-0 py-2 px-3 text-xs flex items-center justify-between gap-2 group-hover:border-[#C73E28] group-hover:bg-[#C73E28] group-hover:text-white transition cursor-pointer"
            >
              <span>{carousel.useCases[item.id].cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
