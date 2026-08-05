import React, { useState } from 'react';
import { PageView, ModelCategory } from '../types';
import { KineticText } from '../components/KineticText';
import { PRICING_TIERS } from '../data/pricingData';
import { MODELS_DATA } from '../data/modelsData';
import { SavingsCalculator } from '../components/SavingsCalculator';
import { useLanguage } from '../i18n/LanguageContext';
import {
  CheckCircle2,
  Building2,
  ArrowRight,
  ShieldCheck,
  FileText,
  Key,
  Globe,
  Activity,
} from 'lucide-react';

interface PricingViewProps {
  setCurrentView: (view: PageView) => void;
  openContractModal: () => void;
  openApiKeyModal: () => void;
  currency: string;
}

type PricingFilter = 'all' | ModelCategory;

const pricingFilters: PricingFilter[] = ['all', 'General', 'Reasoning', 'Multimodal', 'Long Context'];

export const PricingView: React.FC<PricingViewProps> = ({
  setCurrentView,
  openContractModal,
  openApiKeyModal,
  currency,
}) => {
  const [activeTableTab, setActiveTableTab] = useState<PricingFilter>('all');
  const { t } = useLanguage();

  const pricingFilterLabels: Record<PricingFilter, string> = {
    all: t.models.filterAll,
    General: t.models.filterChat,
    Reasoning: t.models.filterReasoning,
    Multimodal: t.models.filterMultimodal,
    'Long Context': t.models.filterLongContext,
  };

  const tierLabels: Record<string, string> = {
    developer: t.pricingView.tierDeveloper,
    pro: t.pricingView.tierProduction,
    enterprise: t.pricingView.tierContract,
  };

  const filteredModels = MODELS_DATA.filter((model) => {
    return activeTableTab === 'all' || model.category === activeTableTab;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-[#F8F7F4] text-[#1C1C1C]">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <KineticText
          text={t.pricingView.title}
          type="words"
          direction="left"
          stagger={0.04}
          as="h1"
          className="font-serif-title text-4xl sm:text-6xl font-semibold text-[#1C1C1C] tracking-tight"
        />
        <KineticText
          text={t.pricingView.subtitle}
          type="words"
          direction="right"
          stagger={0.02}
          delay={0.15}
          as="p"
          className="text-sm sm:text-base text-[#1C1C1C]/80 leading-relaxed font-sans"
        />
      </div>

      <div className="border-t border-b border-[#1C1C1C]/15 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1C]/15 py-8">
        {PRICING_TIERS.map((tier) => (
          (() => {
            const copy = t.content.pricing[tier.id];
            return (
          <div
            key={tier.id}
            className="py-6 md:px-8 first:pl-0 last:pr-0 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-tag text-[10px] text-[#C73E28] font-bold uppercase tracking-wider">
                  {tierLabels[tier.id]}
                </span>
                {tier.highlight && (
                  <span className="text-[9px] bg-[#C73E28] text-white px-2 py-0.5 rounded-full font-mono-tag font-bold">
                    {t.pricingView.tierRecommended}
                  </span>
                )}
              </div>

              <div>
                <h2 className="font-serif-title text-2xl font-semibold text-[#1C1C1C] group-hover:text-[#C73E28] transition-colors">
                  {copy.name}
                </h2>
                <p className="text-xs text-[#1C1C1C]/70 mt-2 leading-relaxed min-h-[3rem] font-sans">
                  {copy.tagline}
                </p>
              </div>

              <div className="pt-2">
                <span className="font-mono-tag text-3xl font-bold text-[#1C1C1C]">{copy.price}</span>
                {copy.period && <span className="text-xs text-[#1C1C1C]/60 font-mono-tag ml-1">{copy.period}</span>}
                {copy.minDeposit && <div className="text-[10px] text-[#C73E28] font-mono-tag mt-1">{copy.minDeposit}</div>}
              </div>

              <ul className="space-y-2.5 text-xs text-[#1C1C1C]/75 font-sans">
                {Object.values(copy.features).map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={tier.id === 'enterprise' ? openContractModal : openApiKeyModal}
              className={`w-full py-2.5 text-xs flex items-center justify-center gap-2 cursor-pointer ${
                tier.highlight ? 'btn-editorial-primary' : 'btn-editorial-outline'
              }`}
            >
              <span>{copy.ctaText}</span>
              {tier.id === 'enterprise' ? <Building2 className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            </button>
          </div>
            );
          })()
        ))}
      </div>

      <SavingsCalculator
        onNavigateToPricing={() => setCurrentView('pricing')}
        currency={currency}
        openApiKeyModal={openApiKeyModal}
      />

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1C1C1C]/15 pb-4">
          <div>
            <span className="font-mono-tag text-[10px] text-[#C73E28] font-bold uppercase tracking-wider">{t.models.title}</span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mt-1">{t.models.title}</h2>
            <p className="text-xs text-[#1C1C1C]/70 mt-2 max-w-2xl">
              {t.models.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-1 overflow-x-auto bg-white p-1 rounded-full border border-[#1C1C1C]/15 font-mono-tag text-xs">
            {pricingFilters.map((filter) => (
              <button
                type="button"
                key={filter}
                onClick={() => setActiveTableTab(filter)}
                className={`px-3 py-1.5 rounded-full transition cursor-pointer whitespace-nowrap ${
                  activeTableTab === filter
                    ? 'bg-[#1C1C1C] text-[#F8F7F4] font-semibold'
                    : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
                }`}
              >
                {pricingFilterLabels[filter]}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto border-t border-b border-[#1C1C1C]/15 bg-white/60 rounded-2xl p-2">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="border-b border-[#1C1C1C]/15 font-mono-tag text-[11px] text-[#1C1C1C]/60 uppercase tracking-wider">
                <th className="py-3 px-4 font-normal">{t.models.title}</th>
                <th className="py-3 px-4 font-normal">{t.models.category}</th>
                <th className="py-3 px-4 font-normal">{t.models.rate}</th>
                <th className="py-3 px-4 font-normal">{t.models.context}</th>
                <th className="py-3 px-4 font-normal">{t.models.health}</th>
                <th className="py-3 px-4 font-normal text-right">{t.models.callApi}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1C1C1C]/15 font-sans text-xs">
              {filteredModels.map((model) => (
                <tr key={model.id} className="hover:bg-[#F8F7F4] transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-serif-title text-lg font-semibold text-[#1C1C1C]">{model.name}</div>
                    <code className="text-[10px] text-[#1C1C1C]/55 font-mono-tag">{model.id}</code>
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
                      <Key className="w-3.5 h-3.5" />
                      <span>{t.models.testModel}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-b border-[#1C1C1C]/15 py-8">
        <div className="space-y-2">
          <ShieldCheck className="w-5 h-5 text-[#C73E28]" />
          <h3 className="font-serif-title text-lg font-semibold">{t.bento.dataPolicyTitle}</h3>
          <p className="text-xs text-[#1C1C1C]/70 leading-relaxed">{t.bento.dataPolicyDesc}</p>
        </div>
        <div className="space-y-2">
          <Activity className="w-5 h-5 text-[#C73E28]" />
          <h3 className="font-serif-title text-lg font-semibold">{t.bento.slaTitle}</h3>
          <p className="text-xs text-[#1C1C1C]/70 leading-relaxed">{t.bento.slaDesc}</p>
        </div>
        <div className="space-y-2">
          <Globe className="w-5 h-5 text-[#C73E28]" />
          <h3 className="font-serif-title text-lg font-semibold">{t.bento.dpaTitle}</h3>
          <p className="text-xs text-[#1C1C1C]/70 leading-relaxed">{t.bento.dpaDesc}</p>
        </div>
      </div>

      <div className="text-center space-y-4 py-8 border-t border-[#1C1C1C]/15">
        <FileText className="w-7 h-7 text-[#C73E28] mx-auto" />
        <h2 className="font-serif-title text-2xl sm:text-3xl font-semibold">{t.pricingView.customEnterprise}</h2>
        <p className="text-sm text-[#1C1C1C]/70 max-w-xl mx-auto">{t.pricingView.subtitle}</p>
        <button
          type="button"
          onClick={openContractModal}
          className="btn-editorial-primary px-5 py-2.5 text-xs inline-flex items-center gap-2 cursor-pointer"
        >
          <span>{t.compliance.requestDocCta}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
