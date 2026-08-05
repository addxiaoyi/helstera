import React from 'react';
import { motion } from 'motion/react';
import {
  Zap,
  ShieldCheck,
  Flame,
  ArrowRight,
  TrendingDown,
  Lock,
  Cpu,
  Globe2,
  Sparkles,
  Server,
  Layers,
  Terminal,
  Activity,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { KineticText } from './KineticText';
import { useLanguage } from '../i18n/LanguageContext';

interface ExaggeratedShowcaseSectionProps {
  openApiKeyModal: () => void;
  openContractModal: () => void;
}

export const ExaggeratedShowcaseSection: React.FC<ExaggeratedShowcaseSectionProps> = ({
  openApiKeyModal,
  openContractModal
}) => {
  const { t } = useLanguage();
  const showcase = t.ui.showcase;
  return (
    <div className="space-y-12 overflow-hidden py-8">
      {/* 1. Giant Kinetic Header with Sliding Badges & Text Stagger */}
      <div className="space-y-4 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C73E28] text-[#F8F7F4] font-mono-tag text-xs font-bold uppercase tracking-wider shadow-md"
        >
          <Flame className="w-4 h-4 fill-current" />
          <span>{showcase.eyebrow}</span>
        </motion.div>

        <KineticText
          text={showcase.title}
          type="words"
          direction="left"
          stagger={0.05}
          highlightWords={['AI', 'ROUTE', 'OPERATIONS']}
          highlightClass="text-[#C73E28] italic font-bold"
          as="h2"
          className="font-serif-title text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1C1C1C] tracking-tight leading-[1.05]"
        />

        <KineticText
          text={showcase.subtitle}
          type="words"
          direction="right"
          stagger={0.02}
          delay={0.2}
          as="p"
          className="text-sm sm:text-lg text-[#1C1C1C]/80 font-sans leading-relaxed max-w-2xl mx-auto"
        />
      </div>

      {/* 2. Dual Horizontal Slide-In Impact Cards (Left vs Right Slide) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Sliding Card: Provider-managed route context */}
        <motion.div
          initial={{ opacity: 0, x: -160, rotate: -1 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#1C1C1C] text-[#F8F7F4] p-8 sm:p-10 rounded-3xl border-2 border-rose-900/50 flex flex-col justify-between space-y-8 relative overflow-hidden shadow-2xl group"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono-tag px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 font-bold border border-rose-500/30 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                {showcase.publicRoute}
              </span>
              <span className="text-xs font-mono-tag text-stone-400">{showcase.publicHops}</span>
            </div>

            <div className="space-y-3">
                <h3 className="font-serif-title text-3xl sm:text-4xl font-bold text-white leading-tight">
                {showcase.publicTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                {showcase.publicDescription}
              </p>
            </div>

            {/* Negative Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-800 font-mono-tag">
              <div className="bg-stone-900/80 p-4 rounded-2xl border border-stone-800">
                <span className="text-[10px] text-stone-400 uppercase">{showcase.rateSource}</span>
                <div className="text-2xl font-bold text-rose-400">{showcase.providerCard}</div>
                <span className="text-[10px] text-rose-400">{showcase.termsChange}</span>
              </div>
              <div className="bg-stone-900/80 p-4 rounded-2xl border border-stone-800">
                <span className="text-[10px] text-stone-400 uppercase">{showcase.routeSignal}</span>
                <div className="text-2xl font-bold text-amber-400">{showcase.liveTelemetry}</div>
                <span className="text-[10px] text-amber-400">{showcase.checkWorkload}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-mono-tag text-stone-400">
            <span>{showcase.reviewGap}</span>
            <span className="text-rose-400 font-bold">{showcase.providerTerms}</span>
          </div>
        </motion.div>

        {/* Right Sliding Card: Helstera governed route */}
        <motion.div
          initial={{ opacity: 0, x: 160, rotate: 1 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white p-8 sm:p-10 rounded-3xl border-2 border-[#C73E28] flex flex-col justify-between space-y-8 relative overflow-hidden shadow-2xl group"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C73E28]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono-tag px-3 py-1 rounded-full bg-[#C73E28] text-white font-bold border border-[#C73E28] flex items-center gap-1.5 shadow-sm">
                <Zap className="w-3.5 h-3.5 fill-current" />
                {showcase.governedRoute}
              </span>
              <span className="text-xs font-mono-tag text-[#C73E28] font-bold">{showcase.currentTerms}</span>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#1C1C1C] leading-tight">
                {showcase.governedTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#1C1C1C]/80 leading-relaxed font-sans">
                {showcase.governedDescription}
              </p>
            </div>

            {/* Positive Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#1C1C1C]/10 font-mono-tag">
              <div className="bg-[#F8F7F4] p-4 rounded-2xl border border-[#1C1C1C]/15 shadow-2xs">
                  <span className="text-[10px] text-[#1C1C1C]/60 uppercase">{showcase.routeCatalog}</span>
                <div className="text-2xl font-bold text-[#C73E28]">{showcase.liveTelemetry}</div>
                <span className="text-[10px] font-bold text-emerald-700">{showcase.confirmAccount}</span>
              </div>
              <div className="bg-[#F8F7F4] p-4 rounded-2xl border border-[#1C1C1C]/15 shadow-2xs">
                <span className="text-[10px] text-[#1C1C1C]/60 uppercase">{showcase.networkHealth}</span>
                <div className="text-2xl font-bold text-emerald-700">{showcase.liveTelemetry}</div>
                <span className="text-[10px] font-bold text-[#C73E28]">{showcase.validateAccount}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#1C1C1C]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="text-xs font-mono-tag text-[#1C1C1C]/70 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{showcase.retentionAttached}</span>
            </div>
            <button
              onClick={openApiKeyModal}
              className="btn-editorial-primary px-5 py-2.5 text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>{showcase.getCredentials}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* 3. Three Alternating Horizontal Slide-In Feature Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {/* Block A: Slide from LEFT (-120px) */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-[#1C1C1C]/15 hover:border-[#C73E28] transition-all shadow-2xs space-y-4 group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#C73E28]/10 text-[#C73E28] flex items-center justify-center font-bold">
            01
          </div>
          <h4 className="font-serif-title text-xl font-bold text-[#1C1C1C] group-hover:text-[#C73E28] transition-colors">
            {showcase.blocks.policy.title}
          </h4>
          <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans">
            {showcase.blocks.policy.description}
          </p>
        </motion.div>

        {/* Block B: Slide from CENTER / BOTTOM (scale & y) */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#1C1C1C] text-[#F8F7F4] p-6 rounded-2xl border border-[#1C1C1C] transition-all shadow-md space-y-4 group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#C73E28] text-white flex items-center justify-center font-bold">
            02
          </div>
          <h4 className="font-serif-title text-xl font-bold text-white group-hover:text-[#C73E28] transition-colors">
            {showcase.blocks.api.title}
          </h4>
          <p className="text-xs text-stone-300 leading-relaxed font-sans">
            {showcase.blocks.api.description}
          </p>
        </motion.div>

        {/* Block C: Slide from RIGHT (+120px) */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-[#1C1C1C]/15 hover:border-[#C73E28] transition-all shadow-2xs space-y-4 group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#C73E28]/10 text-[#C73E28] flex items-center justify-center font-bold">
            03
          </div>
          <h4 className="font-serif-title text-xl font-bold text-[#1C1C1C] group-hover:text-[#C73E28] transition-colors">
            {showcase.blocks.commercial.title}
          </h4>
          <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans">
            {showcase.blocks.commercial.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
