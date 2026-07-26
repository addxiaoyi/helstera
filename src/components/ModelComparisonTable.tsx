import React, { useState } from 'react';
import { motion } from 'motion/react';
import { KineticText } from './KineticText';
import { MODELS_DATA } from '../data/modelsData';
import { ModelInfo } from '../types';
import {
  Search,
  Zap,
  Check,
  Copy,
  LayoutGrid,
  List,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Layers
} from 'lucide-react';

interface ModelComparisonTableProps {
  openApiKeyModal: () => void;
  currency: string;
}

export const ModelComparisonTable: React.FC<ModelComparisonTableProps> = ({
  openApiKeyModal,
  currency
}) => {
  const [filterCategory, setFilterCategory] = useState<'All' | 'Reasoning' | 'Coding' | 'General'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'bento' | 'table'>('bento');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.215, 0.61, 0.355, 1.0] }
    }
  };

  const filteredModels = MODELS_DATA.filter((m) => {
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          m.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          m.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (filterCategory === 'All') return matchesSearch;
    if (filterCategory === 'Reasoning') return matchesSearch && (m.id.includes('r1') || m.id.includes('reasoning') || m.recommendedFor.some(r => r.toLowerCase().includes('reasoning')));
    if (filterCategory === 'Coding') return matchesSearch && (m.id.includes('coder') || m.recommendedFor.some(r => r.toLowerCase().includes('coding') || r.toLowerCase().includes('code')));
    if (filterCategory === 'General') return matchesSearch && (!m.id.includes('r1') && !m.id.includes('coder'));
    return matchesSearch;
  });

  const currencySymbol = currency === 'EUR' ? '€' : currency === 'JPY' ? '¥' : '$';
  const rateMultiplier = currency === 'EUR' ? 0.92 : currency === 'JPY' ? 155 : 1.0;

  const fmtPrice = (val: number) => {
    const converted = val * rateMultiplier;
    return converted < 0.1 ? converted.toFixed(3) : converted.toFixed(2);
  };

  const handleCopyModelId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="space-y-8"
    >
      {/* Direct Kinetic Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <KineticText
            text="Supported Flagship LLMs & Rates"
            type="words"
            direction="left"
            stagger={0.04}
            as="h2"
            className="font-serif-title text-3xl sm:text-5xl font-semibold text-[#1C1C1C] tracking-tight"
          />
          <KineticText
            text="Access China's premier open-weights and flagship closed-weights models with transparent pay-as-you-go pricing per 1,000,000 tokens."
            type="words"
            direction="right"
            stagger={0.02}
            delay={0.15}
            as="p"
            className="text-xs sm:text-sm text-[#1C1C1C]/80 font-sans"
          />
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          {/* View Mode Switcher */}
          <div className="flex items-center bg-white p-1 rounded-full border border-[#1C1C1C]/15 text-xs font-mono-tag">
            <button
              onClick={() => setViewMode('bento')}
              className={`px-3 py-1.5 rounded-full transition cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'bento'
                  ? 'bg-[#1C1C1C] text-[#F8F7F4] font-bold'
                  : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Bento</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 rounded-full transition cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'table'
                  ? 'bg-[#1C1C1C] text-[#F8F7F4] font-bold'
                  : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>Table</span>
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#1C1C1C]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-1.5 bg-white border border-[#1C1C1C]/15 rounded-full text-xs text-[#1C1C1C] placeholder-[#1C1C1C]/40 focus:outline-none focus:border-[#C73E28] transition w-full sm:w-48 font-mono-tag"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center bg-white p-1 rounded-full border border-[#1C1C1C]/15 text-xs font-mono-tag">
            {(['All', 'Reasoning', 'Coding', 'General'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded-full transition cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-[#1C1C1C] text-[#F8F7F4] font-bold'
                    : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* View Mode 1: Editorial Staggered Layout */}
      {viewMode === 'bento' ? (
        <motion.div variants={containerVariants} className="border-t border-b border-[#1C1C1C]/15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#1C1C1C]/15 py-8 gap-y-8">
          {filteredModels.map((m, idx) => {
            const discountPct = Math.round(
              ((m.openAiInputPrice - m.inputPrice) / m.openAiInputPrice) * 100
            );

            return (
              <motion.div
                key={m.id}
                variants={cardVariants}
                className={`px-4 lg:px-6 py-2 flex flex-col justify-between space-y-5 group relative ${
                  idx % 3 === 1 ? 'lg:translate-y-4' : idx % 3 === 2 ? 'lg:translate-y-8' : ''
                }`}
              >
                {/* Top Badge & Provider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#1C1C1C]/10 pb-2">
                    <span className="text-[10px] font-mono-tag text-[#1C1C1C]/60 uppercase tracking-wider font-semibold">
                      {m.provider}
                    </span>
                    {m.badge && (
                      <span className="text-[9px] font-mono-tag px-2 py-0.5 bg-[#C73E28]/10 text-[#C73E28] font-bold">
                        {m.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Copy ID */}
                  <div className="space-y-1">
                    <h3 className="font-serif-title text-2xl font-semibold text-[#1C1C1C] group-hover:text-[#C73E28] transition-colors">
                      {m.name}
                    </h3>
                    <div className="flex items-center gap-2 font-mono-tag text-[11px] text-[#1C1C1C]/60">
                      <code className="bg-[#1C1C1C]/5 px-1.5 py-0.5">{m.id}</code>
                      <button
                        onClick={() => handleCopyModelId(m.id)}
                        className="text-[#1C1C1C]/40 hover:text-[#1C1C1C] transition cursor-pointer"
                        title="Copy model ID"
                      >
                        {copiedId === m.id ? (
                          <span className="text-xs text-[#C73E28] font-bold">Copied!</span>
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans line-clamp-2">
                    {m.description}
                  </p>
                </div>

                {/* Price & Savings Block */}
                <div className="space-y-4 pt-2 border-t border-[#1C1C1C]/10">
                  <div className="grid grid-cols-2 gap-2 border-l-2 border-[#C73E28] pl-3 py-1">
                    <div>
                      <div className="text-[10px] font-mono-tag text-[#1C1C1C]/50 uppercase">Helstera Input</div>
                      <div className="font-mono-tag font-bold text-[#C73E28] text-sm">
                        {currencySymbol}{fmtPrice(m.inputPrice)} <span className="text-[9px] font-normal text-[#1C1C1C]/50">/ 1M</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono-tag text-[#1C1C1C]/50 uppercase">Helstera Output</div>
                      <div className="font-mono-tag font-bold text-[#1C1C1C] text-sm">
                        {currencySymbol}{fmtPrice(m.outputPrice)} <span className="text-[9px] font-normal text-[#1C1C1C]/50">/ 1M</span>
                      </div>
                    </div>
                  </div>

                  {discountPct > 0 && (
                    <div className="flex items-center justify-between text-[11px] font-mono-tag bg-[#1C1C1C]/5 px-2.5 py-1.5">
                      <span className="text-[#1C1C1C]/60">US Baseline:</span>
                      <span className="line-through text-[#1C1C1C]/40 mr-auto ml-1">
                        {currencySymbol}{fmtPrice(m.openAiInputPrice)}
                      </span>
                      <span className="text-[#C73E28] font-bold">
                        -{discountPct}% SAVINGS
                      </span>
                    </div>
                  )}

                  {/* Spec Chips */}
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono-tag text-[#1C1C1C]/70 pt-1">
                    <span className="px-2 py-0.5 border border-[#1C1C1C]/15">
                      Context: {m.contextWindow}
                    </span>
                    <span className="px-2 py-0.5 border border-[#1C1C1C]/15">
                      SLA: {m.latencyMs}
                    </span>
                  </div>

                  <button
                    onClick={openApiKeyModal}
                    className="w-full btn-editorial-outline py-2 text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Test {m.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      ) : (
        /* View Mode 2: Minimal Editorial Table */
        <motion.div variants={containerVariants} className="border-t border-b border-[#1C1C1C]/15 overflow-x-auto bg-white/70 rounded-2xl p-2">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1C1C1C]/15 font-mono-tag text-[11px] text-[#1C1C1C]/60 uppercase tracking-wider">
                <th className="py-3 px-4 font-normal">Model & Identifier</th>
                <th className="py-3 px-4 font-normal">Provider / Type</th>
                <th className="py-3 px-4 font-normal">Helstera Rate (1M Tokens)</th>
                <th className="py-3 px-4 font-normal">Benchmark Savings</th>
                <th className="py-3 px-4 font-normal">Context</th>
                <th className="py-3 px-4 font-normal text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1C1C1C]/15 font-sans text-xs">
              {filteredModels.map((m) => {
                const discountPct = Math.round(
                  ((m.openAiInputPrice - m.inputPrice) / m.openAiInputPrice) * 100
                );

                return (
                  <tr key={m.id} className="hover:bg-[#F8F7F4]/80 transition-colors group">
                    {/* Model & ID */}
                    <td className="py-4 px-4 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-serif-title text-lg font-semibold text-[#1C1C1C] group-hover:text-[#C73E28] transition-colors">
                          {m.name}
                        </span>
                        {m.badge && (
                          <span className="text-[9px] font-mono-tag px-2 py-0.5 rounded-full bg-[#F8F7F4] border border-[#1C1C1C]/15 text-[#C73E28] font-bold">
                            {m.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 font-mono-tag text-[11px] text-[#1C1C1C]/60">
                        <code>{m.id}</code>
                        <button
                          onClick={() => handleCopyModelId(m.id)}
                          className="text-[#1C1C1C]/40 hover:text-[#1C1C1C] transition cursor-pointer"
                          title="Copy model ID"
                        >
                          {copiedId === m.id ? <Check className="w-3.5 h-3.5 text-[#C73E28]" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </td>

                    {/* Provider & Category */}
                    <td className="py-4 px-4">
                      <div className="font-mono-tag font-semibold text-[#1C1C1C]">{m.provider}</div>
                      <div className="text-[11px] text-[#1C1C1C]/60 font-mono-tag">{m.recommendedFor?.[0] || 'Flagship LLM'}</div>
                    </td>

                    {/* Helstera Rates */}
                    <td className="py-4 px-4 font-mono-tag">
                      <div className="font-bold text-[#C73E28] text-sm">
                        In: {currencySymbol}{fmtPrice(m.inputPrice)} <span className="text-[10px] font-normal text-[#1C1C1C]/50">/ 1M</span>
                      </div>
                      <div className="text-[11px] text-[#1C1C1C]/60">
                        Out: {currencySymbol}{fmtPrice(m.outputPrice)} / 1M
                      </div>
                    </td>

                    {/* Benchmark Savings */}
                    <td className="py-4 px-4 font-mono-tag">
                      <div className="text-[#C73E28] font-bold">Save {discountPct > 0 ? discountPct : 80}%</div>
                      <div className="text-[10px] text-[#1C1C1C]/50">vs {m.openAiEquiv}</div>
                    </td>

                    {/* Context Window */}
                    <td className="py-4 px-4 font-mono-tag text-[#1C1C1C]/70">
                      <div>{m.contextWindow}</div>
                      <div className="text-[10px] text-[#1C1C1C]/50">~{m.latencyMs}ms avg</div>
                    </td>

                    {/* Action */}
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={openApiKeyModal}
                        className="btn-editorial-primary px-3 py-1.5 text-xs inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Call API</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>
      )}
    </motion.div>
  );
};

