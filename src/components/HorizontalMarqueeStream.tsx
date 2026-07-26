import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Zap, Shield, Check, Cpu, Globe, Key } from 'lucide-react';
import { MODELS_DATA } from '../data/modelsData';

interface HorizontalMarqueeStreamProps {
  openApiKeyModal: () => void;
  currency: string;
}

export const HorizontalMarqueeStream: React.FC<HorizontalMarqueeStreamProps> = ({ openApiKeyModal, currency }) => {
  const currencySymbol = currency === 'CNY' ? '¥' : '$';

  // Row 1 Items: Flagship LLM Stream
  const row1Items = [
    ...MODELS_DATA,
    ...MODELS_DATA // Duplicated for seamless infinite loop
  ];

  // Row 2 Items: Key Metrics & Infrastructure Nodes Stream
  const row2Metrics = [
    { label: 'DeepSeek-V3 Rate', value: '$0.27 / 1M', highlight: '90% vs GPT-4o' },
    { label: 'Sub-180ms SLA', value: 'Dedicated Optical Marine Fiber', highlight: '99.9% Uptime' },
    { label: 'Shantou Pilot Zone DPA', value: 'Formal B2B Legal Paper Contract', highlight: 'Compliance' },
    { label: 'Zero Data Retention (ZDR)', value: 'RAM Volatile Execution', highlight: 'Zero Disk Logs' },
    { label: 'DeepSeek-R1 Reasoning', value: '$0.55 / 1M Tokens', highlight: '90% vs OpenAI o1' },
    { label: '1-Line OpenAI Drop-in', value: 'baseURL="https://api.helstera.com/v1"', highlight: '0 Code Change' },
    { label: 'Qwen-Max 2.5', value: '$1.60 / 1M Tokens', highlight: '68% vs Claude 3.5' },
    { label: 'Volatile RAM Purge', value: 'Instant RAM Memory Erasure', highlight: 'SOC2 & GDPR' },
  ];
  const row2Items = [...row2Metrics, ...row2Metrics]; // Duplicated for infinite loop

  return (
    <div className="space-y-6 overflow-hidden py-4 border-t border-b border-[#1C1C1C]/15 bg-white/40 backdrop-blur-xs relative">
      {/* Editorial Label */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-mono-tag text-[#1C1C1C]/70">
        <div className="flex items-center gap-2 font-bold">
          <span className="w-2 h-2 rounded-full bg-[#C73E28] animate-pulse" />
          <span>LIVE HORIZONTAL STREAM • FLAGSHIP OPEN-WEIGHTS & INFRASTRUCTURE</span>
        </div>
        <span className="hidden sm:inline text-[#1C1C1C]/50">Hover to pause continuous horizontal scroll</span>
      </div>

      {/* Row 1: Leftward Horizontal Floating Stream */}
      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 35,
            ease: 'linear',
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: 'paused' }}
          className="flex items-center gap-4 shrink-0 pr-4"
        >
          {row1Items.map((m, idx) => (
            <div
              key={`${m.id}-${idx}`}
              onClick={openApiKeyModal}
              className="shrink-0 bg-white border border-[#1C1C1C]/15 hover:border-[#C73E28] rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-2xs hover:shadow-md transition-all cursor-pointer group hover:-translate-y-0.5"
            >
              <div className="p-1.5 rounded-lg bg-[#C73E28]/10 text-[#C73E28]">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif-title font-semibold text-sm text-[#1C1C1C] group-hover:text-[#C73E28] transition-colors">
                    {m.name}
                  </span>
                  {m.badge && (
                    <span className="text-[9px] font-mono-tag px-1.5 py-0.2 rounded bg-[#C73E28]/10 text-[#C73E28] font-bold">
                      {m.badge}
                    </span>
                  )}
                </div>
                <div className="text-[10px] font-mono-tag text-[#1C1C1C]/60 flex items-center gap-2">
                  <span>In: {currencySymbol}{m.inputPrice}</span>
                  <span>•</span>
                  <span className="text-[#C73E28] font-bold">Save 80%</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Rightward Horizontal Floating Stream */}
      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            duration: 40,
            ease: 'linear',
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: 'paused' }}
          className="flex items-center gap-4 shrink-0 pr-4"
        >
          {row2Items.map((item, idx) => (
            <div
              key={`metric-${idx}`}
              className="shrink-0 bg-[#1C1C1C] text-[#F8F7F4] border border-[#1C1C1C] rounded-xl px-4 py-2 flex items-center gap-3 shadow-2xs hover:border-[#C73E28] transition-all cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-[#C73E28]" />
              <div className="font-mono-tag text-xs">
                <span className="text-stone-400 mr-2">{item.label}:</span>
                <span className="font-bold text-white mr-2">{item.value}</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#C73E28] text-white font-bold">
                  {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
