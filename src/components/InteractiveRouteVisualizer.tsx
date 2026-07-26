import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import {
  Check,
  Copy,
  Terminal,
  ShieldCheck,
  Zap,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface InteractiveRouteVisualizerProps {
  openApiKeyModal: () => void;
}

export const InteractiveRouteVisualizer: React.FC<InteractiveRouteVisualizerProps> = ({
  openApiKeyModal
}) => {
  const { t } = useLanguage();
  const [selectedModel, setSelectedModel] = useState<'v3' | 'r1' | 'qwen'>('v3');
  const [isCopied, setIsCopied] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const centerX = card.left + card.width / 2;
    const centerY = card.top + card.height / 2;
    const rotateX = ((e.clientY - centerY) / card.height) * -10;
    const rotateY = ((e.clientX - centerX) / card.width) * 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const modelData = {
    v3: {
      id: 'deepseek-v3',
      name: 'DeepSeek-V3',
      rate: '$0.27 / 1M',
      latency: '138ms'
    },
    r1: {
      id: 'deepseek-r1',
      name: 'DeepSeek-R1',
      rate: '$0.55 / 1M',
      latency: '162ms'
    },
    qwen: {
      id: 'qwen-max-2.5',
      name: 'Qwen-Max 2.5',
      rate: '$1.60 / 1M',
      latency: '155ms'
    }
  };

  const current = modelData[selectedModel];

  const codeSnippet = `from openai import OpenAI

# 100% OpenAI SDK Compatible
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
      {/* Background Layer (Offset Backing Card for Asymmetric Layering) */}
      <div className="absolute inset-0 transform translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-2xl bg-[#EFECE6] border border-[#1C1C1C]/15 pointer-events-none" />

      {/* Main Front Card (Jobsian Minimalist Pristine Code Frame with 3D Tilt) */}
      <motion.div
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative bg-white border border-[#1C1C1C]/20 rounded-2xl p-6 shadow-xl text-[#1C1C1C] space-y-5"
      >
        {/* Minimal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#1C1C1C]/10 font-mono-tag">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C73E28]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1C1C1C]">
              Helstera Gateway
            </span>
          </div>

          <div className="flex items-center gap-[1.5] text-[11px] text-[#1C1C1C]/60">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C73E28]" />
            <span>{t.routeVisualizer.zeroDataRetention}</span>
          </div>
        </div>

        {/* Model Switcher Pills */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 bg-[#F8F7F4] p-1 rounded-full border border-[#1C1C1C]/10 text-xs font-mono-tag">
            <button
              onClick={() => setSelectedModel('v3')}
              className={`px-3 py-1 rounded-full transition cursor-pointer ${
                selectedModel === 'v3'
                  ? 'bg-[#1C1C1C] text-[#F8F7F4] font-semibold'
                  : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
              }`}
            >
              DeepSeek-V3
            </button>
            <button
              onClick={() => setSelectedModel('r1')}
              className={`px-3 py-1 rounded-full transition cursor-pointer ${
                selectedModel === 'r1'
                  ? 'bg-[#1C1C1C] text-[#F8F7F4] font-semibold'
                  : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
              }`}
            >
              DeepSeek-R1
            </button>
            <button
              onClick={() => setSelectedModel('qwen')}
              className={`px-3 py-1 rounded-full transition cursor-pointer ${
                selectedModel === 'qwen'
                  ? 'bg-[#1C1C1C] text-[#F8F7F4] font-semibold'
                  : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
              }`}
            >
              Qwen-Max
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="p-2 rounded-full bg-[#F8F7F4] hover:bg-[#1C1C1C]/5 border border-[#1C1C1C]/15 text-[#1C1C1C] text-xs transition cursor-pointer"
            title={t.routeVisualizer.copySnippet}
          >
            {isCopied ? <Check className="w-3.5 h-3.5 text-[#C73E28]" /> : <Copy className="w-3.5 h-3.5 text-[#1C1C1C]/60" />}
          </button>
        </div>

        {/* Pure Code Display Frame */}
        <div className="p-4 bg-[#F8F7F4] rounded-xl border border-[#1C1C1C]/10 font-mono-tag text-[12px] leading-relaxed text-[#1C1C1C] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.pre
              key={selectedModel}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="font-mono-tag text-xs leading-relaxed whitespace-pre"
            >
              <span className="text-[#C73E28]">from</span> openai <span className="text-[#C73E28]">import</span> OpenAI{'\n\n'}
              <span className="text-[#1C1C1C]/40 italic">{t.routeVisualizer.snippetComment}</span>{'\n'}
              client = OpenAI({'\n'}
              {'    '}api_key=<span className="text-[#1C1C1C]/70">"hel_sk_live_..."</span>,{'\n'}
              {'    '}base_url=<span className="text-[#C73E28] font-semibold">"https://api.helstera.com/v1"</span>{'\n'}
              ){'\n\n'}
              res = client.chat.completions.create({'\n'}
              {'    '}model=<span className="text-[#C73E28] font-bold">"{current.id}"</span>,{'\n'}
              {'    '}messages=[&#123;<span className="text-[#1C1C1C]/70">"role"</span>: <span className="text-[#1C1C1C]/70">"user"</span>, <span className="text-[#1C1C1C]/70">"content"</span>: <span className="text-[#1C1C1C]/70">"Cross-border query"</span>&#125;]{'\n'}
              )
            </motion.pre>
          </AnimatePresence>
        </div>

        {/* Minimal Specs Footer */}
        <div className="pt-2 flex items-center justify-between text-xs font-mono-tag text-[#1C1C1C]/70">
          <div className="flex items-center gap-3">
            <span>{t.routeVisualizer.rateLabel} <strong className="text-[#C73E28]">{current.rate}</strong></span>
            <span>•</span>
            <span>{t.routeVisualizer.latencyLabel} <strong>{current.latency}</strong></span>
          </div>

          <button
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
