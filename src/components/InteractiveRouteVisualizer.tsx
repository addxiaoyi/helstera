import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { DEFAULT_MODEL_ID, findModel, MODELS_DATA } from '../data/modelsData';
import { Check, Copy, ShieldCheck, ArrowRight } from 'lucide-react';

interface InteractiveRouteVisualizerProps {
  openApiKeyModal: () => void;
}

export const InteractiveRouteVisualizer: React.FC<InteractiveRouteVisualizerProps> = ({
  openApiKeyModal,
}) => {
  const { t } = useLanguage();
  const [selectedModelId, setSelectedModelId] = useState(DEFAULT_MODEL_ID);
  const [isCopied, setIsCopied] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const routeOptions = MODELS_DATA.slice(0, 3);
  const current = findModel(selectedModelId);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget.getBoundingClientRect();
    const centerX = card.left + card.width / 2;
    const centerY = card.top + card.height / 2;
    const rotateX = ((event.clientY - centerY) / card.height) * -10;
    const rotateY = ((event.clientX - centerX) / card.width) * 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  const codeSnippet = `from openai import OpenAI

# OpenAI-compatible gateway client
client = OpenAI(
    api_key="hel_sk_live_...",
    base_url="https://api.helstera.com/v1"
)

res = client.chat.completions.create(
    model="${current.id}",
    messages=[{"role": "user", "content": "Cross-border query"}]
)`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="relative py-4 sm:py-6"
    >
      <div className="absolute inset-0 transform translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-2xl bg-[#EFECE6] border border-[#1C1C1C]/15 pointer-events-none" />

      <motion.div
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative min-w-0 bg-white border border-[#1C1C1C]/20 rounded-2xl p-4 sm:p-6 shadow-xl text-[#1C1C1C] space-y-5"
      >
        <div className="flex min-w-0 items-center justify-between gap-3 pb-3 border-b border-[#1C1C1C]/10 font-mono-tag">
          <div className="flex min-w-0 items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C73E28]" />
            <span className="min-w-0 text-xs font-semibold uppercase tracking-wider text-[#1C1C1C] break-words">{t.routeVisualizer.gatewayTitle}</span>
          </div>

          <div className="min-w-0 flex items-center gap-1.5 text-[11px] text-[#1C1C1C]/60">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C73E28]" />
            <span className="truncate">{t.routeVisualizer.dataPolicyLabel}</span>
          </div>
        </div>

        <div className="flex min-w-0 items-center justify-between gap-2">
          <div className="min-w-0 flex-1 flex items-center gap-1.5 bg-[#F8F7F4] p-1 rounded-full border border-[#1C1C1C]/10 text-xs font-mono-tag overflow-x-auto">
            {routeOptions.map((route) => (
              <button
                type="button"
                key={route.id}
                onClick={() => setSelectedModelId(route.id)}
                className={`px-3 py-1 rounded-full transition cursor-pointer whitespace-nowrap ${
                  selectedModelId === route.id
                    ? 'bg-[#1C1C1C] text-[#F8F7F4] font-semibold'
                    : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
                }`}
              >
                {route.name}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="p-2 rounded-full bg-[#F8F7F4] hover:bg-[#1C1C1C]/5 border border-[#1C1C1C]/15 text-[#1C1C1C] text-xs transition cursor-pointer shrink-0"
            title={t.routeVisualizer.copySnippet}
            aria-label={t.routeVisualizer.copySnippet}
          >
            {isCopied ? <Check className="w-3.5 h-3.5 text-[#C73E28]" /> : <Copy className="w-3.5 h-3.5 text-[#1C1C1C]/60" />}
          </button>
        </div>

        <div className="min-w-0 max-w-full p-4 bg-[#F8F7F4] rounded-xl border border-[#1C1C1C]/10 font-mono-tag text-[12px] leading-relaxed text-[#1C1C1C] relative overflow-x-auto touch-pan-x">
          <AnimatePresence mode="wait">
            <motion.pre
              key={selectedModelId}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="w-max max-w-none font-mono-tag text-xs leading-relaxed whitespace-pre"
            >
              <span className="text-[#C73E28]">from</span> openai <span className="text-[#C73E28]">import</span> OpenAI{ '\n\n' }
              <span className="text-[#1C1C1C]/40 italic">{t.routeVisualizer.snippetComment}</span>{ '\n' }
              client = OpenAI({'\n'}
              {'    '}api_key=<span className="text-[#1C1C1C]/70">"hel_sk_live_..."</span>,{'\n'}
              {'    '}base_url=<span className="text-[#C73E28] font-semibold">"https://api.helstera.com/v1"</span>{'\n'}
              ){ '\n\n' }
              res = client.chat.completions.create({'\n'}
              {'    '}model=<span className="text-[#C73E28] font-bold">"{current.id}"</span>,{'\n'}
              {'    '}messages=[&#123;<span className="text-[#1C1C1C]/70">"role"</span>: <span className="text-[#1C1C1C]/70">"user"</span>, <span className="text-[#1C1C1C]/70">"content"</span>: <span className="text-[#1C1C1C]/70">"Cross-border query"</span>&#125;]{'\n'}
              )
            </motion.pre>
          </AnimatePresence>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono-tag text-[#1C1C1C]/70">
          <div className="flex flex-wrap items-center gap-3">
            <span>{t.routeVisualizer.rateLabel} <strong className="text-[#C73E28]">{current.rateLabel}</strong></span>
            <span className="hidden sm:inline">•</span>
            <span>{t.routeVisualizer.healthLabel} <strong>{current.healthLabel}</strong></span>
          </div>

          <button
            type="button"
            onClick={openApiKeyModal}
            className="text-[#C73E28] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>{t.routeVisualizer.callApi}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
