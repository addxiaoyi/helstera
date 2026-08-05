import React, { useState } from 'react';
import { motion } from 'motion/react';
import { KineticText } from './KineticText';
import { useLanguage } from '../i18n/LanguageContext';
import { MODELS_DATA } from '../data/modelsData';
import { ModelCategory } from '../types';
import {
  Search,
  Check,
  Copy,
  LayoutGrid,
  List,
  ArrowRight,
} from 'lucide-react';

interface ModelComparisonTableProps {
  openApiKeyModal: () => void;
}

type ModelFilter = 'All' | ModelCategory | 'Coding';

const filters: ModelFilter[] = ['All', 'Reasoning', 'Coding', 'Multimodal', 'Long Context'];

const matchesFilter = (category: ModelFilter, model: (typeof MODELS_DATA)[number]) => {
  if (category === 'All') return true;
  if (category === 'Coding') {
    return model.recommendedFor.some((item) => item.toLowerCase().includes('code'));
  }
  return model.category === category;
};

export const ModelComparisonTable: React.FC<ModelComparisonTableProps> = ({
  openApiKeyModal,
}) => {
  const [filterCategory, setFilterCategory] = useState<ModelFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'bento' | 'table'>('bento');
  const { t } = useLanguage();

  const filterLabels: Record<ModelFilter, string> = {
    All: t.models.filterAll,
    General: t.models.filterChat,
    Reasoning: t.models.filterReasoning,
    Coding: t.models.filterCoding,
    Multimodal: t.models.filterMultimodal,
    'Long Context': t.models.filterLongContext,
  };

  const filteredModels = MODELS_DATA.filter((model) => {
    const query = searchQuery.trim().toLowerCase();
    const copy = t.content.models[model.id];
    const matchesSearch = !query || [
      model.name,
      model.provider,
      copy.category,
      copy.description,
      ...Object.values(copy.recommendedFor),
    ].some((value) => value.toLowerCase().includes(query));

    return matchesSearch && matchesFilter(filterCategory, model);
  });

  const handleCopyModelId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <KineticText
            text={t.models.title}
            type="words"
            direction="left"
            stagger={0.04}
            as="h2"
            className="font-serif-title text-3xl sm:text-5xl font-semibold text-[#1C1C1C] tracking-tight"
          />
          <KineticText
            text={t.models.subtitle}
            type="words"
            direction="right"
            stagger={0.02}
            delay={0.15}
            as="p"
            className="text-xs sm:text-sm text-[#1C1C1C]/80 font-sans"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <div className="flex items-center bg-white p-1 rounded-full border border-[#1C1C1C]/15 text-xs font-mono-tag">
            <button
              type="button"
              onClick={() => setViewMode('bento')}
              className={`px-3 py-1.5 rounded-full transition cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'bento'
                  ? 'bg-[#1C1C1C] text-[#F8F7F4] font-bold'
                  : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{t.models.viewBento}</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 rounded-full transition cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'table'
                  ? 'bg-[#1C1C1C] text-[#F8F7F4] font-bold'
                  : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>{t.models.viewTable}</span>
            </button>
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-[#1C1C1C]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              placeholder={t.models.searchPlaceholder}
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="pl-9 pr-4 py-1.5 bg-white border border-[#1C1C1C]/15 rounded-full text-xs text-[#1C1C1C] placeholder-[#1C1C1C]/40 focus:outline-none focus:border-[#C73E28] transition w-full sm:w-48 font-mono-tag"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto bg-white p-1 rounded-full border border-[#1C1C1C]/15 text-xs font-mono-tag">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                onClick={() => setFilterCategory(filter)}
                className={`px-3 py-1.5 rounded-full transition cursor-pointer whitespace-nowrap ${
                  filterCategory === filter
                    ? 'bg-[#1C1C1C] text-[#F8F7F4] font-bold'
                    : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
                }`}
              >
                {filterLabels[filter]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredModels.length === 0 ? (
        <div className="border-t border-b border-[#1C1C1C]/15 py-12 text-center text-sm text-[#1C1C1C]/60">
          {t.models.noResults}
        </div>
      ) : viewMode === 'bento' ? (
        <div className="border-t border-b border-[#1C1C1C]/15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#1C1C1C]/15 py-8 gap-y-8">
          {filteredModels.map((model, index) => (
            (() => {
              const copy = t.content.models[model.id];
              return (
            <div
              key={model.id}
              className={`px-4 lg:px-6 py-2 flex flex-col justify-between space-y-5 group ${
                index % 3 === 1 ? 'lg:translate-y-4' : index % 3 === 2 ? 'lg:translate-y-8' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#1C1C1C]/10 pb-2">
                  <span className="text-[10px] font-mono-tag text-[#1C1C1C]/60 uppercase tracking-wider font-semibold">
                    {model.provider}
                  </span>
                  <span className="text-[9px] font-mono-tag px-2 py-0.5 bg-[#C73E28]/10 text-[#C73E28] font-bold">
                    {copy.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif-title text-2xl font-semibold text-[#1C1C1C] group-hover:text-[#C73E28] transition-colors">
                    {model.name}
                  </h3>
                  <div className="flex items-center gap-2 font-mono-tag text-[11px] text-[#1C1C1C]/60">
                    <code className="bg-[#1C1C1C]/5 px-1.5 py-0.5">{model.id}</code>
                    <button
                      type="button"
                      onClick={() => handleCopyModelId(model.id)}
                      className="text-[#1C1C1C]/40 hover:text-[#1C1C1C] transition cursor-pointer"
                       title={t.models.copyModelId}
                       aria-label={`${t.models.copyModelId}: ${model.name}`}
                    >
                      {copiedId === model.id ? (
                         <span className="text-xs text-[#C73E28] font-bold">{t.models.copied}</span>
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans line-clamp-3">
                  {copy.description}
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-[#1C1C1C]/10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-l-2 border-[#C73E28] pl-3 py-1">
                  <div>
                    <div className="text-[10px] font-mono-tag text-[#1C1C1C]/50 uppercase">{t.models.rate}</div>
                    <div className="font-mono-tag font-bold text-[#C73E28] text-sm">{copy.rateLabel}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono-tag text-[#1C1C1C]/50 uppercase">{t.models.context}</div>
                    <div className="font-mono-tag font-bold text-[#1C1C1C] text-sm">{copy.contextWindow}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono-tag text-[#1C1C1C]/50 uppercase">{t.models.health}</div>
                    <div className="font-mono-tag font-bold text-[#1C1C1C] text-sm">{copy.healthLabel}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono-tag text-[#1C1C1C]/70">
                  {Object.values(copy.recommendedFor).slice(0, 3).map((item) => (
                    <span key={item} className="px-2 py-0.5 border border-[#1C1C1C]/15">
                      {item}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={openApiKeyModal}
                  className="w-full btn-editorial-outline py-2 text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>{t.models.testModel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
              );
            })()
          ))}
        </div>
      ) : (
        <div className="border-t border-b border-[#1C1C1C]/15 overflow-x-auto bg-white/70 rounded-2xl p-2">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1C1C1C]/15 font-mono-tag text-[11px] text-[#1C1C1C]/60 uppercase tracking-wider">
                <th className="py-3 px-4 font-normal">{t.models.title} & ID</th>
                <th className="py-3 px-4 font-normal">{t.models.category}</th>
                <th className="py-3 px-4 font-normal">{t.models.rate}</th>
                <th className="py-3 px-4 font-normal">{t.models.context}</th>
                <th className="py-3 px-4 font-normal">{t.models.health}</th>
                <th className="py-3 px-4 font-normal text-right">{t.models.callApi}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1C1C1C]/15 font-sans text-xs">
              {filteredModels.map((model) => (
                <tr key={model.id} className="hover:bg-[#F8F7F4]/80 transition-colors group">
                  <td className="py-4 px-4 space-y-1">
                    <div className="font-serif-title text-lg font-semibold text-[#1C1C1C] group-hover:text-[#C73E28] transition-colors">
                      {model.name}
                    </div>
                    <div className="flex items-center gap-2 font-mono-tag text-[11px] text-[#1C1C1C]/60">
                      <code>{model.id}</code>
                      <button
                        type="button"
                        onClick={() => handleCopyModelId(model.id)}
                        className="text-[#1C1C1C]/40 hover:text-[#1C1C1C] transition cursor-pointer"
                         title={t.models.copyModelId}
                         aria-label={`${t.models.copyModelId}: ${model.name}`}
                      >
                        {copiedId === model.id ? <Check className="w-3.5 h-3.5 text-[#C73E28]" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-mono-tag font-semibold text-[#1C1C1C]">{model.provider}</div>
                    <div className="text-[11px] text-[#1C1C1C]/60 font-mono-tag">{t.content.models[model.id].category}</div>
                  </td>
                  <td className="py-4 px-4 font-mono-tag text-[#C73E28] font-bold">{t.content.models[model.id].rateLabel}</td>
                  <td className="py-4 px-4 font-mono-tag text-[#1C1C1C]/70">{t.content.models[model.id].contextWindow}</td>
                  <td className="py-4 px-4 font-mono-tag text-[#1C1C1C]/70">{t.content.models[model.id].healthLabel}</td>
                  <td className="py-4 px-4 text-right">
                    <button
                      type="button"
                      onClick={openApiKeyModal}
                      className="btn-editorial-primary px-3 py-1.5 text-xs inline-flex items-center gap-1.5 cursor-pointer"
                    >
                       <span>{t.models.callApi}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
};
