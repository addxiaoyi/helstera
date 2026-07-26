import React from 'react';
import { KineticText } from './KineticText';
import { MessageSquare } from 'lucide-react';

export const CommunityPartners: React.FC = () => {
  const partners = [
    { name: 'DeepSeek AI', category: 'MoE LLM Infrastructure', tag: 'V3 / R1 Reasoning' },
    { name: 'Alibaba Qwen', category: 'Enterprise Cloud Intelligence', tag: 'Qwen-Max 2.5' },
    { name: 'Zhipu GLM', category: 'Cognitive Intelligence', tag: 'GLM-4 Plus' },
    { name: 'MiniMax abab', category: 'Ultra-Fast Multimodal', tag: 'abab6.5s' },
    { name: 'ByteDance Doubao', category: 'High Throughput Inference', tag: 'Doubao Pro' },
    { name: 'Shantou Pilot Zone', category: 'Government Data Policy', tag: 'Data Processing Zone' },
  ];

  return (
    <div className="space-y-10">
      {/* Ecosystem Kinetic Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <span className="text-xs font-mono-tag font-semibold uppercase tracking-wider text-[#C73E28]">
          Model Partners & Pilot Zone Infrastructure
        </span>
        <KineticText
          text="Powered by Flagship AI & Legal Frameworks"
          type="words"
          direction="left"
          stagger={0.04}
          as="h2"
          className="font-serif-title text-2xl sm:text-4xl font-semibold text-[#1C1C1C]"
        />
      </div>

      {/* Partner Logo Strip with Hairline Dividers */}
      <div className="border-t border-b border-[#1C1C1C]/15 py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-[#1C1C1C]/15">
        {partners.map((p, idx) => (
          <div
            key={idx}
            className="py-4 sm:px-4 text-center space-y-1"
          >
            <div className="font-serif-title text-lg font-semibold text-[#1C1C1C] tracking-tight">{p.name}</div>
            <div className="text-[10px] text-[#1C1C1C]/60 font-sans">{p.category}</div>
            <div className="text-[10px] font-mono-tag font-semibold text-[#C73E28] pt-0.5">
              {p.tag}
            </div>
          </div>
        ))}
      </div>

      {/* Developer Community Strip */}
      <div className="py-4 border-b border-[#1C1C1C]/15 text-[#1C1C1C] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="font-serif-title text-2xl font-semibold text-[#1C1C1C]">Join 18,000+ AI Builders in Our Developer Community</h3>
          <p className="text-xs text-[#1C1C1C]/75 font-sans">
            Get early model benchmarks, prompt engineering tips, status updates, and custom enterprise SLA support.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial-primary px-4 py-2.5 text-xs flex items-center gap-1.5 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Join Community</span>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial-outline px-4 py-2.5 text-xs flex items-center gap-1.5 cursor-pointer"
          >
            <span>GitHub SDKs</span>
          </a>
        </div>
      </div>
    </div>
  );
};

