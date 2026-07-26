import React, { useState } from 'react';
import { MODELS_DATA } from '../data/modelsData';
import { NumberTicker } from './NumberTicker';
import { CustomSelect, CustomSelectOption } from './CustomSelect';
import { CustomSlider } from './CustomSlider';
import { KineticText } from './KineticText';
import { DollarSign, Zap, TrendingDown, ArrowRight, ShieldCheck, CheckCircle2, Calculator } from 'lucide-react';

interface SavingsCalculatorProps {
  onNavigateToPricing: () => void;
  currency: string;
  openApiKeyModal?: () => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({
  onNavigateToPricing,
  currency,
  openApiKeyModal
}) => {
  const [selectedModelId, setSelectedModelId] = useState('deepseek-v3');
  const [monthlyTokensMillions, setMonthlyTokensMillions] = useState(50); // 50M tokens/month default

  const selectedModel = MODELS_DATA.find(m => m.id === selectedModelId) || MODELS_DATA[0];

  // Savings Calc
  const inputRatio = 0.8;
  const outputRatio = 0.2;
  const monthlyInputTokensM = monthlyTokensMillions * inputRatio;
  const monthlyOutputTokensM = monthlyTokensMillions * outputRatio;

  const helsteraCost = (monthlyInputTokensM * selectedModel.inputPrice) + (monthlyOutputTokensM * selectedModel.outputPrice);
  const openAiCost = (monthlyInputTokensM * selectedModel.openAiInputPrice) + (monthlyOutputTokensM * selectedModel.openAiOutputPrice);

  const monthlySavings = Math.max(0, openAiCost - helsteraCost);
  const annualSavings = monthlySavings * 12;
  const savingsPercent = openAiCost > 0 ? Math.round((monthlySavings / openAiCost) * 100) : 80;

  const currencySymbol = currency === 'EUR' ? '€' : currency === 'JPY' ? '¥' : '$';
  const rateMultiplier = currency === 'EUR' ? 0.92 : currency === 'JPY' ? 155 : 1.0;

  const fmt = (val: number) => {
    const converted = val * rateMultiplier;
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: converted > 1000 ? 0 : 2
    }).format(converted);
  };

  return (
    <div className="border-t border-b border-[#1C1C1C]/15 py-8 text-[#1C1C1C]">
      <div className="space-y-6">
        {/* Title Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1C1C1C]/10 pb-5">
          <div className="space-y-1">
            <KineticText
              text="Estimate Your Monthly AI API Cost Savings"
              type="words"
              direction="left"
              stagger={0.04}
              as="h3"
              className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#1C1C1C]"
            />
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-tag font-semibold text-[#C73E28]">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Save Up to 80% vs OpenAI Rates</span>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Custom Model Selection Dropdown */}
          <div className="space-y-2">
            <label className="block text-xs font-mono-tag font-semibold text-[#1C1C1C]/80">
              1. Select Target LLM Model
            </label>
            <CustomSelect
              value={selectedModelId}
              onChange={(val) => setSelectedModelId(val)}
              options={MODELS_DATA.map((m) => ({
                value: m.id,
                label: `${m.name} (${m.provider})`,
                sublabel: `${currencySymbol}${fmt(m.inputPrice)}/1M input tokens vs ${m.openAiEquiv}`,
                badge: m.badge
              }))}
            />
          </div>

          {/* Custom Volume Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono-tag font-semibold">
              <span className="text-[#1C1C1C]/80">2. Monthly Token Inference Volume</span>
              <span className="text-[#C73E28] font-bold text-sm font-mono-tag">{monthlyTokensMillions} Million Tokens</span>
            </div>
            <CustomSlider
              min={5}
              max={500}
              step={5}
              value={monthlyTokensMillions}
              onChange={(val) => setMonthlyTokensMillions(val)}
              unit="M Tokens"
            />
            <div className="flex justify-between text-[10px] text-[#1C1C1C]/50 font-mono-tag pt-1">
              <span>5M (Startup)</span>
              <span>100M (Scale-up)</span>
              <span>500M+ (Enterprise)</span>
            </div>
          </div>
        </div>

        {/* Metric Comparison Editorial Rows with Staggered Offset */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1C]/15 border-t border-b border-[#1C1C1C]/15 py-6">
          <div className="py-4 md:px-4 text-center space-y-1">
            <div className="text-[#1C1C1C]/60 text-xs font-mono-tag">Standard OpenAI Benchmark</div>
            <div className="text-2xl font-semibold text-[#1C1C1C]/40 line-through font-serif-title">
              <NumberTicker value={openAiCost * rateMultiplier} prefix={currencySymbol} formatThousands decimals={openAiCost * rateMultiplier > 1000 ? 0 : 2} /> <span className="text-xs font-normal">/ mo</span>
            </div>
            <div className="text-[10px] text-[#1C1C1C]/40 font-mono-tag">Based on {selectedModel.openAiEquiv} published rates</div>
          </div>

          <div className="py-4 md:px-4 text-center space-y-1 border-l-2 border-[#C73E28] md:translate-y-2">
            <div className="text-[#C73E28] text-xs font-mono-tag font-bold flex items-center justify-center gap-1">
              <Zap className="w-3.5 h-3.5" /> Helstera Gateway Cost
            </div>
            <div className="text-3xl font-semibold text-[#1C1C1C] font-serif-title">
              <NumberTicker value={helsteraCost * rateMultiplier} prefix={currencySymbol} formatThousands decimals={helsteraCost * rateMultiplier > 1000 ? 0 : 2} /> <span className="text-xs text-[#1C1C1C]/50 font-normal">/ mo</span>
            </div>
            <div className="text-[10px] text-[#C73E28] font-mono-tag font-semibold">
              Includes 99.9% SLA & Formal DPA
            </div>
          </div>

          <div className="py-4 md:px-4 text-center space-y-1">
            <div className="text-[#1C1C1C]/80 text-xs font-mono-tag font-semibold">Net Annual Savings</div>
            <div className="text-3xl font-semibold text-[#C73E28] font-serif-title">
              <NumberTicker value={annualSavings * rateMultiplier} prefix={currencySymbol} formatThousands decimals={0} /> <span className="text-xs font-normal">/ yr</span>
            </div>
            <div className="text-[10px] text-[#1C1C1C]/80 font-mono-tag font-semibold">
              Save <NumberTicker value={savingsPercent} suffix="%" /> directly every month
            </div>
          </div>
        </div>

        {/* Footer Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#1C1C1C]/10">
          <div className="text-xs text-[#1C1C1C]/80 font-sans">
            Ready to save <span className="text-[#C73E28] font-bold font-mono-tag">{currencySymbol}{fmt(monthlySavings)}/mo</span> with 100% OpenAI SDK compatibility?
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {openApiKeyModal && (
              <button
                onClick={openApiKeyModal}
                className="btn-editorial-primary px-4 py-2 text-xs flex items-center gap-1.5 cursor-pointer"
              >
                Get Free API Key
              </button>
            )}
            <button
              onClick={onNavigateToPricing}
              className="btn-editorial-outline px-4 py-2 text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Full Rate Matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
