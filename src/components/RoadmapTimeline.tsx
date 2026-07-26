import React from 'react';
import { CheckCircle2, Clock, Sparkles, Milestone, ChevronRight, Layers, Rocket } from 'lucide-react';
import { KineticText } from './KineticText';

export const RoadmapTimeline: React.FC = () => {
  const phases = [
    {
      phase: 'Phase 1',
      quarter: 'Q1 2025',
      title: 'Foundation & Pilot Zone Setup',
      status: 'completed',
      items: [
        'Shantou Overseas Chinese Pilot Zone "Data Processing" compliance framework authorization',
        'Helstera OpenAI-compatible API Gateway engine MVP launch',
        'DeepSeek-V3 & Qwen-Max 2.5 cross-border dedicated line integration',
        'CertiK Smart Contract Audit for $HEL Token',
      ],
    },
    {
      phase: 'Phase 2',
      quarter: 'Q2 2025',
      title: 'Gateway Expansion & $HEL Token Launch',
      status: 'active',
      items: [
        'Public $HEL Token Presale & Uniswap / Raydium DEX Liquidity Launch',
        'Zero Data Retention (ZDR) RAM-Only instant memory purge implementation',
        'DeepSeek-R1 reasoning model & MiniMax abab6.5s model onboarding',
        'Institutional Data Processing Agreement (DPA) automated portal',
      ],
    },
    {
      phase: 'Phase 3',
      quarter: 'Q3 2025',
      title: 'Decentralized Staking & Node Network',
      status: 'upcoming',
      items: [
        'Helstera Compute Staking Vaults launch with up to 24.8% APY real-yield rewards',
        'Tier-1 Centralized Exchange (CEX) listings for $HEL Token',
        'AI Agent SDK for LangChain, LlamaIndex, and AutoGPT integration',
        'Multi-region failover nodes in Tokyo, Singapore, Hong Kong & Frankfurt',
      ],
    },
    {
      phase: 'Phase 4',
      quarter: 'Q4 2025',
      title: 'Global AI Agent Marketplace & Enterprise Rollout',
      status: 'upcoming',
      items: [
        'DePIN AI Compute Node dispatching protocol rollout',
        'Autonomous AI Agent Token payment rail & micro-settlement protocol',
        'Global enterprise B2B compliance coverage (EU GDPR & US HIPAA mapping)',
        '$HEL Token Governance DAO for model onboarding voting',
      ],
    },
  ];

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
          <Milestone className="w-3.5 h-3.5 text-blue-400" /> Strategic Product Execution
        </span>
        <KineticText
          text="Helstera Development Roadmap"
          type="words"
          direction="left"
          stagger={0.04}
          as="h2"
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif-title"
        />
        <KineticText
          text="From compliant pilot zone infrastructure to a global decentralized AI agent compute economy."
          type="words"
          direction="right"
          stagger={0.02}
          delay={0.15}
          as="p"
          className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans"
        />
      </div>

      {/* Grid Timeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {phases.map((p, idx) => {
          const isCompleted = p.status === 'completed';
          const isActive = p.status === 'active';

          return (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition relative flex flex-col justify-between space-y-5 ${
                isActive
                  ? 'bg-slate-900 border-2 border-blue-500 shadow-2xl shadow-blue-500/10'
                  : isCompleted
                  ? 'bg-slate-900/90 border-slate-800 opacity-95'
                  : 'bg-slate-950/80 border-slate-800/80'
              }`}
            >
              {isActive && (
                <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" /> Current Phase
                </span>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-400">{p.quarter}</span>
                  {isCompleted ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" /> Completed
                    </span>
                  ) : isActive ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/30 px-2 py-0.5 rounded-full">
                      <Rocket className="w-3 h-3 animate-pulse" /> Live Execution
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full">
                      <Clock className="w-3 h-3" /> Upcoming
                    </span>
                  )}
                </div>

                <div>
                  <div className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">{p.phase}</div>
                  <h3 className="text-base font-extrabold text-white mt-1 leading-snug">{p.title}</h3>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                  {p.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isActive ? 'bg-blue-400' : isCompleted ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                      <span className={isCompleted ? 'text-slate-300' : 'text-slate-300'}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
