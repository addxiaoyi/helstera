import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, ArrowLeftRight, Check, AlertTriangle, Sparkles, Server, Globe, Cpu } from 'lucide-react';
import { KineticText } from './KineticText';

interface HorizontalComparisonSliderProps {
  openApiKeyModal: () => void;
}

export const HorizontalComparisonSlider: React.FC<HorizontalComparisonSliderProps> = ({ openApiKeyModal }) => {
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
    <div className="space-y-8">
      {/* Direct Kinetic Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C73E28]/10 border border-[#C73E28]/20 text-[#C73E28] text-xs font-mono-tag font-bold">
          <ArrowLeftRight className="w-3.5 h-3.5" />
          <span>Interactive Horizontal Split View</span>
        </div>
        <KineticText
          text="Slide to Compare Infrastructure"
          type="words"
          direction="left"
          stagger={0.04}
          as="h2"
          className="font-serif-title text-3xl sm:text-5xl font-semibold text-[#1C1C1C] tracking-tight"
        />
        <KineticText
          text="Drag the horizontal split handle left and right to see why global engineering teams switch from legacy public routes to Helstera Shantou Marine Line Gateway."
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
        className="relative w-full h-[420px] sm:h-[380px] rounded-2xl border border-[#1C1C1C]/20 overflow-hidden select-none cursor-ew-resize shadow-md"
      >
        {/* Layer 1: Left Side - Standard Public OpenAI Gateway (Red/Dark Theme background) */}
        <div className="absolute inset-0 bg-[#1A1A1A] text-white p-6 sm:p-8 flex flex-col justify-between">
          <div className="max-w-md space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
              <span className="text-xs font-mono-tag uppercase tracking-wider text-amber-400 font-bold">
                Legacy Public OpenAI / US Cloud Route
              </span>
            </div>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-semibold text-white">
              Public Internet Bottlenecks
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed font-sans">
              Subject to multiple public internet hops, peak-hour rate limits, standard retail pricing ($2.50+/1M), and unpredictable cross-border packet throttling.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono-tag text-xs max-w-lg">
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1">
              <span className="text-[10px] text-stone-400 uppercase">Input Rate</span>
              <div className="text-lg font-bold text-amber-400">$2.50 / 1M</div>
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1">
              <span className="text-[10px] text-stone-400 uppercase">Average Latency</span>
              <div className="text-lg font-bold text-rose-400">420 - 680 ms</div>
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1 col-span-2 sm:col-span-1">
              <span className="text-[10px] text-stone-400 uppercase">Data Logging</span>
              <div className="text-xs font-bold text-stone-300">Default 30-Day Disk</div>
            </div>
          </div>
        </div>

        {/* Layer 2: Right Side - Helstera Shantou Marine Line Gateway (Warm Cream / Terracotta Theme) */}
        <div
          className="absolute inset-y-0 right-0 bg-[#F8F7F4] text-[#1C1C1C] p-6 sm:p-8 flex flex-col justify-between overflow-hidden border-l border-[#C73E28]"
          style={{ width: `${100 - sliderPosition}%` }}
        >
          {/* Inner content pinned to right side so it stays aligned */}
          <div className="absolute top-6 sm:top-8 right-6 sm:right-8 left-6 sm:left-8 bottom-6 sm:bottom-8 flex flex-col justify-between min-w-[320px]">
            <div className="max-w-md space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C73E28]" />
                <span className="text-xs font-mono-tag uppercase tracking-wider text-[#C73E28] font-bold">
                  Helstera Shantou Marine Gateway
                </span>
              </div>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#1C1C1C]">
                Sub-180ms Direct Optical Marine Pipeline
              </h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans">
                Dedicated submarine fiber optic lines route straight to Shantou Overseas Chinese Pilot Zone's MoE compute clusters with zero data retention in RAM.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono-tag text-xs max-w-lg">
              <div className="bg-white p-3 rounded-xl border border-[#1C1C1C]/15 space-y-1 shadow-2xs">
                <span className="text-[10px] text-[#1C1C1C]/60 uppercase">Helstera Input</span>
                <div className="text-lg font-bold text-[#C73E28]">$0.27 / 1M</div>
                <div className="text-[9px] text-[#C73E28] font-bold">Save 80%</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#1C1C1C]/15 space-y-1 shadow-2xs">
                <span className="text-[10px] text-[#1C1C1C]/60 uppercase">Average Latency</span>
                <div className="text-lg font-bold text-emerald-700">138 - 180 ms</div>
                <div className="text-[9px] text-emerald-700 font-bold">3.5x Faster</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#1C1C1C]/15 space-y-1 col-span-2 sm:col-span-1 shadow-2xs">
                <span className="text-[10px] text-[#1C1C1C]/60 uppercase">Data Logging</span>
                <div className="text-xs font-bold text-[#1C1C1C]">Zero Data (RAM Purge)</div>
                <div className="text-[9px] text-[#C73E28] font-bold">Formal B2B DPA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Split Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#C73E28] z-20 cursor-ew-resize shadow-2xl"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1C1C1C] text-[#F8F7F4] border-2 border-[#C73E28] flex items-center justify-center shadow-lg group hover:scale-110 transition-transform">
            <ArrowLeftRight className="w-4 h-4 text-[#F8F7F4]" />
          </div>
        </div>

        {/* Floating Hint Overlay */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#1C1C1C]/80 text-white backdrop-blur-xs px-3 py-1 rounded-full text-[10px] font-mono-tag pointer-events-none z-30 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#C73E28]" />
          <span>Drag horizontally to explore difference ({Math.round(sliderPosition)}% / {Math.round(100 - sliderPosition)}%)</span>
        </div>
      </div>
    </div>
  );
};
