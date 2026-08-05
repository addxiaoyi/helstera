import React, { useState } from 'react';
import { DEFAULT_MODEL_ID, findModel, MODELS_DATA } from '../data/modelsData';
import { CustomSelect } from './CustomSelect';
import { CustomSlider } from './CustomSlider';
import { KineticText } from './KineticText';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowRight, Calculator, ShieldCheck, Zap } from 'lucide-react';

interface SavingsCalculatorProps {
  onNavigateToPricing: () => void;
  currency: string;
  openApiKeyModal?: () => void;
}

const formatTokens = (value: number) => {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }).format(value);
};

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({
  onNavigateToPricing,
  currency,
  openApiKeyModal,
}) => {
  const [selectedModelId, setSelectedModelId] = useState(DEFAULT_MODEL_ID);
  const [monthlyTokensMillions, setMonthlyTokensMillions] = useState(50);
  const selectedModel = findModel(selectedModelId);
  const { t } = useLanguage();
  const selectedModelCopy = t.content.models[selectedModel.id];
  const inputTokens = monthlyTokensMillions * 0.8;
  const outputTokens = monthlyTokensMillions * 0.2;

  return (
    <div className="border-t border-b border-[#1C1C1C]/15 py-8 text-[#1C1C1C]">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1C1C1C]/10 pb-5">
          <div className="space-y-1">
            <KineticText
              text={t.calculator.title}
              type="words"
              direction="left"
              stagger={0.04}
              as="h3"
              className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#1C1C1C]"
            />
            <p className="text-xs text-[#1C1C1C]/65 font-sans">
              {t.calculator.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-tag font-semibold text-[#C73E28]">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>{t.calculator.liveTerms}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-mono-tag font-semibold text-[#1C1C1C]/80">
              {t.calculator.selectRouteLabel}
            </label>
            <CustomSelect
              value={selectedModelId}
              onChange={setSelectedModelId}
              options={MODELS_DATA.map((model) => ({
                value: model.id,
                label: `${model.name} (${model.provider})`,
                sublabel: `${t.content.models[model.id].category} | ${t.content.models[model.id].rateLabel}`,
                badge: t.content.models[model.id].badge,
              }))}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono-tag font-semibold">
              <span className="text-[#1C1C1C]/80">{t.calculator.volumeLabel}</span>
              <span className="text-[#C73E28] font-bold text-sm font-mono-tag">{monthlyTokensMillions}{t.calculator.tokensUnit}</span>
            </div>
            <CustomSlider
              min={5}
              max={500}
              step={5}
              value={monthlyTokensMillions}
              onChange={setMonthlyTokensMillions}
              unit={t.calculator.tokensUnit}
            />
            <div className="flex justify-between text-[10px] text-[#1C1C1C]/50 font-mono-tag pt-1">
              <span>5{t.calculator.tokensUnit}</span>
              <span>100{t.calculator.tokensUnit}</span>
              <span>500+{t.calculator.tokensUnit}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1C]/15 border-t border-b border-[#1C1C1C]/15 py-6">
          <div className="py-4 md:px-4 text-center space-y-1">
            <div className="text-[#1C1C1C]/60 text-xs font-mono-tag">{t.calculator.helsteraCost}</div>
            <div className="text-2xl font-semibold text-[#1C1C1C] font-serif-title">{selectedModel.name}</div>
            <div className="text-[10px] text-[#1C1C1C]/50 font-mono-tag">{selectedModel.id}</div>
          </div>

          <div className="py-4 md:px-4 text-center space-y-1 border-l-2 border-[#C73E28] md:translate-y-2">
            <div className="text-[#C73E28] text-xs font-mono-tag font-bold flex items-center justify-center gap-1">
              <Zap className="w-3.5 h-3.5" /> {t.calculator.openaiCost}
            </div>
            <div className="text-3xl font-semibold text-[#1C1C1C] font-serif-title">{formatTokens(inputTokens)}M</div>
            <div className="text-[10px] text-[#C73E28] font-mono-tag font-semibold">{t.calculator.inputLabel} | {formatTokens(outputTokens)}{t.calculator.tokensUnit} {t.calculator.outputLabel}</div>
          </div>

          <div className="py-4 md:px-4 text-center space-y-1">
            <div className="text-[#1C1C1C]/80 text-xs font-mono-tag font-semibold">{t.calculator.annualSavings}</div>
            <div className="text-2xl font-semibold text-[#C73E28] font-serif-title">{selectedModelCopy.rateLabel}</div>
            <div className="text-[10px] text-[#1C1C1C]/70 font-mono-tag">{t.calculator.billingView}: {currency}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono-tag">
          <div className="bg-white border border-[#1C1C1C]/10 rounded-xl p-3">
            <Calculator className="w-4 h-4 text-[#C73E28] mb-2" />
            <div className="text-[#1C1C1C]/50 uppercase">{t.models.category}</div>
            <div className="font-bold mt-1">{selectedModelCopy.category}</div>
          </div>
          <div className="bg-white border border-[#1C1C1C]/10 rounded-xl p-3">
            <div className="text-[#1C1C1C]/50 uppercase">{t.models.context}</div>
            <div className="font-bold mt-1">{selectedModelCopy.contextWindow}</div>
          </div>
          <div className="bg-white border border-[#1C1C1C]/10 rounded-xl p-3">
            <div className="text-[#1C1C1C]/50 uppercase">{t.models.health}</div>
            <div className="font-bold mt-1">{selectedModelCopy.healthLabel}</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#1C1C1C]/10">
          <div className="text-xs text-[#1C1C1C]/80 font-sans">
            {t.calculator.quotePrompt}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {openApiKeyModal && (
              <button
                type="button"
                onClick={openApiKeyModal}
                className="btn-editorial-primary px-4 py-2 text-xs flex items-center gap-1.5 cursor-pointer"
              >
                {t.bento.slaCta}
              </button>
            )}
            <button
              type="button"
              onClick={onNavigateToPricing}
              className="btn-editorial-outline px-4 py-2 text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <span>{t.calculator.viewRateMatrix}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
