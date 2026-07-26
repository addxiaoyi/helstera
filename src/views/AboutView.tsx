import React from 'react';
import { PageView } from '../types';
import { KineticText } from '../components/KineticText';
import { ShieldCheck, Zap, Globe, Target, Cpu, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  setCurrentView: (view: PageView) => void;
  openContractModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setCurrentView, openContractModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-[#F8F7F4] text-[#1C1C1C]">
      {/* Editorial Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <KineticText
          text="Bridging Global AI Developers to World-Class Compute"
          type="words"
          direction="left"
          stagger={0.04}
          as="h1"
          className="font-serif-title text-4xl sm:text-6xl font-semibold text-[#1C1C1C] tracking-tight"
        />
        <KineticText
          text="Helstera was founded on a simple premise: high-performance LLM intelligence should be legally accessible, reliable, and cost-effective for developers anywhere in the world."
          type="words"
          direction="right"
          stagger={0.02}
          delay={0.15}
          as="p"
          className="text-sm sm:text-base text-[#1C1C1C]/80 leading-relaxed font-sans"
        />
      </div>

      {/* Core Mission Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-b border-[#1C1C1C]/15 py-8 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1C]/15">
        <div className="py-4 md:px-6 first:pl-0 space-y-3">
          <h3 className="font-serif-title text-xl font-semibold text-[#1C1C1C]">80% Cost Efficiency</h3>
          <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans">
            By connecting directly to premier compute hubs in China under Pilot Zone power tariffs, we pass up to 80% cost savings directly to international AI startups.
          </p>
        </div>

        <div className="py-4 md:px-6 space-y-3">
          <h3 className="font-serif-title text-xl font-semibold text-[#1C1C1C]">Regulatory Protection</h3>
          <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans">
            Leveraging the Shantou Overseas Chinese Pilot Zone "Data Processing" framework, every token is processed with formal DPA and commercial B2B contracts.
          </p>
        </div>

        <div className="py-4 md:px-6 space-y-3">
          <h3 className="font-serif-title text-xl font-semibold text-[#1C1C1C]">OpenAI SDK Compatible</h3>
          <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans">
            100% OpenAI SDK compatibility means zero code refactoring. Change 1 line of config to unlock DeepSeek-V3, Qwen-Max, and GLM-4 instantly.
          </p>
        </div>
      </div>

      {/* Why Data Processing Pilot Zone Section */}
      <div className="py-8 border-t border-b border-[#1C1C1C]/15 space-y-6">
        <h2 className="font-serif-title text-3xl font-semibold text-[#1C1C1C]">
          Why We Built on the "Data Processing Pilot Zone" (来数加工)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1C]/15 font-sans text-xs text-[#1C1C1C]/80 leading-relaxed">
          <div className="space-y-3">
            <p>
              Traditional cross-border data transfer often suffers from regulatory uncertainty, unpredictable network throttling, and complex compliance hurdles.
            </p>
            <p>
              The Shantou Overseas Chinese Economic and Cultural Cooperation Pilot Zone created China’s first official policy sandbox specifically for international compute processing ("来数加工"). Under this model, international data enters an isolated, encrypted processing pipeline purely for inference calculation, leaving zero persistent disk trail.
            </p>
          </div>

          <div className="pt-6 md:pt-0 md:pl-8 space-y-3">
            <h4 className="font-serif-title font-semibold text-[#1C1C1C] text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C73E28]" />
              Key Pilot Zone Advantages
            </h4>
            <ul className="space-y-2 text-[#1C1C1C]/80 font-sans">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C73E28]" />
                <span>Authorized cross-border data processing policy sandbox</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C73E28]" />
                <span>Dedicated encrypted fiber channels (IPLC / IEPL interconnects)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C73E28]" />
                <span>Zero Data Retention (ZDR) RAM-only execution</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C73E28]" />
                <span>Formal B2B paper DPA & master commercial agreements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="font-serif-title text-3xl font-semibold text-[#1C1C1C]">Platform Roadmap</h2>
          <p className="text-xs text-[#1C1C1C]/70 font-sans">From initial MVP gateway to global enterprise compute routing.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-b border-[#1C1C1C]/15 py-8 divide-y sm:divide-y-0 sm:divide-x divide-[#1C1C1C]/15">
          <div className="py-4 sm:px-6 first:pl-0 space-y-2">
            <span className="font-mono-tag text-[#C73E28] font-bold uppercase tracking-wider text-[10px]">Phase 1 (Current)</span>
            <h4 className="font-serif-title font-semibold text-[#1C1C1C] text-lg">Enterprise Cloud Gateway</h4>
            <p className="text-[#1C1C1C]/75 text-xs font-sans">
              Managed Pilot Zone cloud compute for DeepSeek-V3/R1, Qwen-Max, GLM-4, MiniMax, and Doubao with standard OpenAI SDK compatibility.
            </p>
          </div>

          <div className="py-4 sm:px-6 space-y-2">
            <span className="font-mono-tag text-[#1C1C1C]/50 font-bold uppercase tracking-wider text-[10px]">Phase 2 (Q4 2026)</span>
            <h4 className="font-serif-title font-semibold text-[#1C1C1C] text-lg">Local Edge & On-Prem Compute</h4>
            <p className="text-[#1C1C1C]/75 text-xs font-sans">
              Deployable local edge compute appliances and single-tenant dedicated H800/H20 compute clusters for on-premise high QPS workloads.
            </p>
          </div>

          <div className="py-4 sm:px-6 space-y-2">
            <span className="font-mono-tag text-[#1C1C1C]/50 font-bold uppercase tracking-wider text-[10px]">Phase 3 (2027)</span>
            <h4 className="font-serif-title font-semibold text-[#1C1C1C] text-lg">Global Multi-Region Nodes</h4>
            <p className="text-[#1C1C1C]/75 text-xs font-sans">
              Expanding relay nodes in Singapore, Frankfurt, and Tokyo for low-latency edge routing under unified Helstera APIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
