import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, ArrowLeftRight, Check, AlertTriangle, Sparkles, Server, Globe, Cpu } from 'lucide-react';
import { KineticText } from './KineticText';
import { useLanguage } from '../i18n/LanguageContext';

interface HorizontalComparisonSliderProps {
  openApiKeyModal: () => void;
}

export const HorizontalComparisonSlider: React.FC<HorizontalComparisonSliderProps> = ({ openApiKeyModal }) => {
  const { t } = useLanguage();
  const comparison = t.ui.comparison;
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="min-w-0 space-y-8">
      {/* Direct Kinetic Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C73E28]/10 border border-[#C73E28]/20 text-[#C73E28] text-xs font-mono-tag font-bold">
          <ArrowLeftRight className="w-3.5 h-3.5" />
          <span>{comparison.eyebrow}</span>
        </div>
        <KineticText
          text={comparison.title}
          type="words"
          direction="left"
          stagger={0.04}
          as="h2"
          className="font-serif-title text-3xl sm:text-5xl font-semibold text-[#1C1C1C] tracking-tight"
        />
        <KineticText
          text={comparison.subtitle}
          type="words"
          direction="right"
          stagger={0.02}
          delay={0.15}
          as="p"
          className="text-xs sm:text-sm text-[#1C1C1C]/75 font-sans leading-relaxed"
        />
      </div>

      {/* Interactive Horizontal Comparison Box */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full h-auto sm:h-[380px] rounded-2xl border border-[#1C1C1C]/20 overflow-hidden select-none shadow-md"
      >
        <div className="sm:hidden grid gap-3 p-3">
          <article className="bg-[#1A1A1A] text-white rounded-xl p-4 space-y-4">
            <div className="flex items-start gap-2">
              <span className="w-2.5 h-2.5 mt-1 rounded-full bg-amber-500 shrink-0" />
              <span className="text-xs font-mono-tag uppercase tracking-wider text-amber-400 font-bold break-words">
                {comparison.publicRoute}
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif-title text-2xl font-semibold text-white break-words">
                {comparison.publicTitle}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed font-sans break-words">
                {comparison.publicDescription}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 font-mono-tag text-xs">
              <div className="bg-white/5 p-3 rounded-lg border border-white/10 space-y-1">
                <span className="text-[10px] text-stone-400 uppercase">{t.ui.showcase.rateSource}</span>
                <div className="text-lg font-bold text-amber-400 break-words">{t.ui.showcase.providerCard}</div>
              </div>
              <div className="bg-white/5 p-3 rounded-lg border border-white/10 space-y-1">
                <span className="text-[10px] text-stone-400 uppercase">{t.ui.showcase.routeSignal}</span>
                <div className="text-lg font-bold text-rose-400 break-words">{t.ui.showcase.liveTelemetry}</div>
              </div>
            </div>
          </article>

          <article className="bg-[#F8F7F4] text-[#1C1C1C] rounded-xl border border-[#C73E28] p-4 space-y-4">
            <div className="flex items-start gap-2">
              <span className="w-2.5 h-2.5 mt-1 rounded-full bg-[#C73E28] shrink-0" />
              <span className="text-xs font-mono-tag uppercase tracking-wider text-[#C73E28] font-bold break-words">
                {comparison.governedRoute}
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif-title text-2xl font-semibold text-[#1C1C1C] break-words">
                {comparison.governedTitle}
              </h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans break-words">
                {comparison.governedDescription}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 font-mono-tag text-xs">
              <div className="bg-white p-3 rounded-lg border border-[#1C1C1C]/15 space-y-1 shadow-2xs">
                <span className="text-[10px] text-[#1C1C1C]/60 uppercase">{comparison.helsteraRate}</span>
                <div className="text-lg font-bold text-[#C73E28] break-words">{t.ui.showcase.liveTelemetry}</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-[#1C1C1C]/15 space-y-1 shadow-2xs">
                <span className="text-[10px] text-[#1C1C1C]/60 uppercase">{comparison.routeHealth}</span>
                <div className="text-lg font-bold text-emerald-700 break-words">{t.ui.showcase.liveTelemetry}</div>
              </div>
            </div>
          </article>
        </div>

        {/* Layer 1: Left Side - Standard Public OpenAI Gateway (Red/Dark Theme background) */}
        <div className="hidden sm:flex absolute inset-0 bg-[#1A1A1A] text-white p-4 sm:p-8 flex-col justify-between">
          <div className="min-w-0 max-w-md space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
              <span className="text-xs font-mono-tag uppercase tracking-wider text-amber-400 font-bold">
                {comparison.publicRoute}
              </span>
            </div>
            <h3 className="font-serif-title text-xl sm:text-3xl font-semibold text-white break-words">
              {comparison.publicTitle}
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed font-sans break-words">
              {comparison.publicDescription}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 font-mono-tag text-xs max-w-lg min-w-0">
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1">
              <span className="text-[10px] text-stone-400 uppercase">{t.ui.showcase.rateSource}</span>
              <div className="text-lg font-bold text-amber-400">{t.ui.showcase.providerCard}</div>
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1">
              <span className="text-[10px] text-stone-400 uppercase">{t.ui.showcase.routeSignal}</span>
              <div className="text-lg font-bold text-rose-400">{t.ui.showcase.liveTelemetry}</div>
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1 col-span-2 sm:col-span-1">
              <span className="text-[10px] text-stone-400 uppercase">{comparison.dataLogging}</span>
              <div className="text-xs font-bold text-stone-300">{comparison.providerPolicy}</div>
            </div>
          </div>
        </div>

        {/* Layer 2: Right Side - Helstera governed route (Warm Cream / Terracotta Theme) */}
        <div
          className="hidden sm:flex absolute inset-y-0 right-0 bg-[#F8F7F4] text-[#1C1C1C] p-4 sm:p-8 flex-col justify-between overflow-hidden border-l border-[#C73E28]"
          style={{ width: `${100 - sliderPosition}%` }}
        >
          {/* Inner content pinned to right side so it stays aligned */}
          <div className="absolute top-4 sm:top-8 right-4 sm:right-8 left-4 sm:left-8 bottom-4 sm:bottom-8 flex flex-col justify-between min-w-0">
            <div className="min-w-0 max-w-md space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C73E28]" />
                <span className="text-xs font-mono-tag uppercase tracking-wider text-[#C73E28] font-bold">
                  {comparison.governedRoute}
                </span>
              </div>
              <h3 className="font-serif-title text-xl sm:text-3xl font-semibold text-[#1C1C1C] break-words">
                {comparison.governedTitle}
              </h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans break-words">
                {comparison.governedDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 font-mono-tag text-xs max-w-lg min-w-0">
              <div className="bg-white p-3 rounded-xl border border-[#1C1C1C]/15 space-y-1 shadow-2xs">
                <span className="text-[10px] text-[#1C1C1C]/60 uppercase">{comparison.helsteraRate}</span>
                <div className="text-lg font-bold text-[#C73E28]">{t.ui.showcase.liveTelemetry}</div>
                <div className="text-[9px] text-[#C73E28] font-bold">{comparison.accountSpecific}</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#1C1C1C]/15 space-y-1 shadow-2xs">
                <span className="text-[10px] text-[#1C1C1C]/60 uppercase">{comparison.routeHealth}</span>
                <div className="text-lg font-bold text-emerald-700">{t.ui.showcase.liveTelemetry}</div>
                <div className="text-[9px] text-emerald-700 font-bold">{comparison.validateAccount}</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#1C1C1C]/15 space-y-1 col-span-2 sm:col-span-1 shadow-2xs">
                <span className="text-[10px] text-[#1C1C1C]/60 uppercase">{comparison.dataLogging}</span>
                <div className="text-xs font-bold text-[#1C1C1C]">{comparison.contractPolicy}</div>
                <div className="text-[9px] text-[#C73E28] font-bold">{comparison.dpaAvailable}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Split Line & Handle */}
        <div
          className="hidden sm:block absolute top-0 bottom-0 w-1 bg-[#C73E28] z-20 cursor-ew-resize shadow-2xl"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1C1C1C] text-[#F8F7F4] border-2 border-[#C73E28] flex items-center justify-center shadow-lg group hover:scale-110 transition-transform">
            <ArrowLeftRight className="w-4 h-4 text-[#F8F7F4]" />
          </div>
        </div>

        {/* Floating Hint Overlay */}
        <div className="hidden sm:flex absolute bottom-3 left-1/2 -translate-x-1/2 max-w-[calc(100%-2rem)] bg-[#1C1C1C]/80 text-white backdrop-blur-xs px-3 py-1 rounded-full text-[10px] font-mono-tag pointer-events-none z-30 items-center justify-center gap-1.5 text-center">
          <Sparkles className="w-3 h-3 text-[#C73E28]" />
          <span>{comparison.dragHint} ({Math.round(sliderPosition)}% / {Math.round(100 - sliderPosition)}%)</span>
        </div>
      </div>
    </div>
  );
};
