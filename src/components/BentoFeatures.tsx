import React, { useState } from 'react';
import { motion } from 'motion/react';
import { KineticText } from './KineticText';
import { MODELS_DATA } from '../data/modelsData';
import { useLanguage } from '../i18n/LanguageContext';
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
  Zap,
  Lock,
  Cpu,
  Terminal,
  FileText
} from 'lucide-react';

interface BentoFeaturesProps {
  openContractModal: () => void;
  openApiKeyModal: () => void;
}

export const BentoFeatures: React.FC<BentoFeaturesProps> = ({
  openContractModal,
  openApiKeyModal
}) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const leftSlideVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const rightSlideVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const handleCopyCode = () => {
    const code = `import OpenAI from "openai";\n\nconst client = new OpenAI({\n  baseURL: "https://api.helstera.com/v1",\n  apiKey: process.env.HELSTERA_API_KEY\n});`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="min-w-0 space-y-10"
    >
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <KineticText
          text={t.bento.title}
          type="words"
          direction="left"
          stagger={0.04}
          as="h2"
          className="font-serif-title text-3xl sm:text-6xl font-semibold text-[#1C1C1C] tracking-tight break-words"
        />
        <KineticText
          text={t.bento.subtitle}
          type="words"
          direction="right"
          stagger={0.02}
          delay={0.15}
          as="p"
          className="text-sm sm:text-base text-[#1C1C1C]/75 leading-relaxed font-sans"
        />
      </div>

      {/* Editorial Staggered Layout with Hairline Dividers */}
      <div className="border-t border-b border-[#1C1C1C]/15 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Bento 1: current route catalog */}
          <motion.div
            variants={leftSlideVariants}
            className="md:col-span-7 min-w-0 space-y-6 md:pr-6 md:border-r border-[#1C1C1C]/15 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C73E28]" />
                <span className="text-xs font-mono-tag font-bold text-[#C73E28] uppercase tracking-wider">
                  01 / {t.bento.unitEconomicsTitle}
                </span>
              </div>
              <h3 className="font-serif-title text-2xl sm:text-4xl font-semibold text-[#1C1C1C] tracking-tight">
                {t.bento.unitEconomicsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#1C1C1C]/75 leading-relaxed font-sans">
                {t.bento.unitEconomicsDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {MODELS_DATA.slice(0, 3).map((model, index) => (
                <div key={model.id} className={`p-3 border-l-2 ${index === 0 ? 'border-[#C73E28]' : 'border-[#1C1C1C]/30'} space-y-1`}>
                  <span className="text-[10px] font-mono-tag text-[#1C1C1C]/60 uppercase">{model.name}</span>
                  <div className="font-serif-title text-xl font-semibold text-[#1C1C1C]">{t.content.models[model.id].category}</div>
                  <div className="text-[10px] font-mono-tag text-[#C73E28] font-bold">{t.content.models[model.id].rateLabel}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bento 2: SDK compatibility */}
          <motion.div
            variants={rightSlideVariants}
            className="md:col-span-5 min-w-0 space-y-6 md:translate-y-6 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex min-w-0 items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#C73E28]" />
                  <span className="text-xs font-mono-tag font-bold text-[#C73E28] uppercase tracking-wider">
                    02 / {t.bento.sdkCompatTitle}
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="text-[11px] font-mono-tag text-[#1C1C1C]/60 hover:text-[#1C1C1C] flex items-center gap-1.5 px-2.5 py-1 border border-[#1C1C1C]/20 hover:border-[#1C1C1C]/50 transition cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-[#C73E28]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? t.common.copied : t.common.copyCode}</span>
                </button>
              </div>
              <h3 className="font-serif-title text-2xl font-semibold text-[#1C1C1C] tracking-tight">
                {t.bento.sdkCompatTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#1C1C1C]/75 leading-relaxed font-sans">
                {t.bento.sdkCompatDesc}
              </p>
            </div>

            <div className="max-w-full p-4 bg-[#1C1C1C] text-[#F8F7F4] font-mono-tag text-[11px] space-y-1.5 overflow-x-auto border-l-2 border-[#C73E28] touch-pan-x">
              <div className="text-emerald-400">// Change 1 line of code</div>
              <div><span className="text-purple-300">import</span> OpenAI <span className="text-purple-300">from</span> <span className="text-amber-200">"openai"</span>;</div>
              <div><span className="text-purple-300">const</span> client = <span className="text-blue-300">new</span> OpenAI(&#123;</div>
              <div className="pl-4 text-emerald-300">baseURL: <span className="text-amber-200">"https://api.helstera.com/v1"</span>,</div>
              <div className="pl-4">apiKey: process.env.HELSTERA_API_KEY</div>
              <div>&#125;);</div>
            </div>
          </motion.div>
        </div>

        {/* Hairline Divider with Offset 3-Column Feature Row */}
        <div className="mt-12 pt-8 border-t border-[#1C1C1C]/15 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1C]/15">
          
          {/* Feature 03 */}
          <motion.div
            variants={leftSlideVariants}
            className="md:pr-8 py-4 space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C73E28]" />
                <span className="text-xs font-mono-tag font-bold text-[#C73E28] uppercase tracking-wider">
                  03 / {t.bento.dpaTitle}
                </span>
              </div>
              <h3 className="font-serif-title text-xl font-semibold text-[#1C1C1C]">
                {t.bento.dpaTitle}
              </h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans">
                {t.bento.dpaDesc}
              </p>
            </div>

            <button
              onClick={openContractModal}
              className="text-xs font-mono-tag font-semibold text-[#C73E28] hover:underline flex items-center gap-1.5 cursor-pointer pt-2"
            >
              <span>{t.bento.dpaCta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Feature 04: Staggered Offset Up */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 35, scale: 0.97 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="md:px-8 py-4 space-y-3 flex flex-col justify-between md:-translate-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#C73E28]" />
                <span className="text-xs font-mono-tag font-bold text-[#C73E28] uppercase tracking-wider">
                  04 / {t.bento.dataPolicyTitle}
                </span>
              </div>
              <h3 className="font-serif-title text-xl font-semibold text-[#1C1C1C]">
                {t.bento.dataPolicyTitle}
              </h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans">
                {t.bento.dataPolicyDesc}
              </p>
            </div>

            <div className="text-xs font-mono-tag text-[#1C1C1C]/80 flex items-center gap-1.5 pt-2">
              <CheckCircle2 className="w-4 h-4 text-[#C73E28]" />
              <span>{t.bento.dataPolicyBadge}</span>
            </div>
          </motion.div>

          {/* Feature 05: Staggered Offset Down */}
          <motion.div
            variants={rightSlideVariants}
            className="md:pl-8 py-4 space-y-3 flex flex-col justify-between md:translate-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#C73E28]" />
                <span className="text-xs font-mono-tag font-bold text-[#C73E28] uppercase tracking-wider">
                  05 / {t.bento.slaTitle}
                </span>
              </div>
              <h3 className="font-serif-title text-xl font-semibold text-[#1C1C1C]">
                {t.bento.slaTitle}
              </h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans">
                {t.bento.slaDesc}
              </p>
            </div>

            <button
              onClick={openApiKeyModal}
              className="text-xs font-mono-tag font-semibold text-[#C73E28] hover:underline flex items-center gap-1.5 cursor-pointer pt-2"
            >
              <span>{t.bento.slaCta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

