import React, { useState } from 'react';
import { PageView } from '../types';
import { KineticText } from '../components/KineticText';
import { PRICING_TIERS } from '../data/pricingData';
import { MODELS_DATA } from '../data/modelsData';
import { SavingsCalculator } from '../components/SavingsCalculator';
import {
  CheckCircle2,
  CreditCard,
  Building2,
  Zap,
  ArrowRight,
  ShieldCheck,
  FileText,
  Key,
  Globe
} from 'lucide-react';

interface PricingViewProps {
  setCurrentView: (view: PageView) => void;
  openContractModal: () => void;
  openApiKeyModal: () => void;
  currency: string;
}

export const PricingView: React.FC<PricingViewProps> = ({
  setCurrentView,
  openContractModal,
  openApiKeyModal,
  currency
}) => {
  const [activeTableTab, setActiveTableTab] = useState<'all' | 'reasoning' | 'chat'>('all');

  const filteredModels = MODELS_DATA.filter((m) => {
    if (activeTableTab === 'reasoning') return m.id.includes('r1') || m.id.includes('kimi');
    if (activeTableTab === 'chat') return !m.id.includes('r1');
    return true;
  });

  const currencySymbol = currency === 'EUR' ? '€' : currency === 'JPY' ? '¥' : '$';
  const rateMultiplier = currency === 'EUR' ? 0.92 : currency === 'JPY' ? 155 : 1.0;

  const fmtPrice = (val: number) => {
    const converted = val * rateMultiplier;
    return converted < 0.1 ? converted.toFixed(3) : converted.toFixed(2);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-[#F8F7F4] text-[#1C1C1C]">
      {/* Editorial Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <KineticText
          text="Transparent Pricing for Developers & Enterprise"
          type="words"
          direction="left"
          stagger={0.04}
          as="h1"
          className="font-serif-title text-4xl sm:text-6xl font-semibold text-[#1C1C1C] tracking-tight"
        />
        <KineticText
          text="Pay-as-you-go per 1M tokens. Access DeepSeek, Qwen, GLM, MiniMax, and Doubao with formal DPA legal compliance guarantees and 99.9% uptime SLA."
          type="words"
          direction="right"
          stagger={0.02}
          delay={0.15}
          as="p"
          className="text-sm sm:text-base text-[#1C1C1C]/80 leading-relaxed font-sans"
        />
      </div>

      {/* Editorial Pricing Tiers Grid */}
      <div className="border-t border-b border-[#1C1C1C]/15 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1C]/15 py-8">
        {PRICING_TIERS.map((tier) => (
          <div
            key={tier.id}
            className="py-6 md:px-8 first:pl-0 last:pr-0 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-tag text-[10px] text-[#C73E28] font-bold uppercase tracking-wider">
                  {tier.highlight ? 'Recommended' : 'Tier Option'}
                </span>
                {tier.highlight && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#C73E28] text-white text-[9px] font-mono-tag font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-serif-title text-2xl font-semibold text-[#1C1C1C]">{tier.name}</h3>
                <p className="text-xs text-[#1C1C1C]/70 mt-1 font-sans">{tier.tagline}</p>
              </div>

              <div className="pt-2 border-t border-[#1C1C1C]/10">
                <div className="font-serif-title text-3xl font-bold text-[#1C1C1C]">
                  {tier.price} <span className="text-xs font-sans font-normal text-[#1C1C1C]/60">{tier.period || ''}</span>
                </div>
                {tier.minDeposit && (
                  <div className="text-xs text-[#C73E28] font-mono-tag font-semibold mt-1">{tier.minDeposit}</div>
                )}
              </div>

              <ul className="space-y-2.5 text-xs text-[#1C1C1C]/80 pt-2 font-sans">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C73E28] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                if (tier.id === 'enterprise') {
                  openContractModal();
                } else {
                  openApiKeyModal();
                }
              }}
              className={`w-full py-2.5 text-xs flex items-center justify-center gap-2 cursor-pointer transition ${
                tier.highlight ? 'btn-editorial-primary' : 'btn-editorial-outline'
              }`}
            >
              <span>{tier.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Savings Calculator Component */}
      <SavingsCalculator
        onNavigateToPricing={() => {}}
        currency={currency}
        openApiKeyModal={openApiKeyModal}
      />

      {/* Model-by-Model Token Price Matrix Table */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1C1C1C]/15 pb-4">
          <div>
            <h2 className="font-serif-title text-2xl font-semibold text-[#1C1C1C]">Detailed Model Unit Rates</h2>
            <p className="text-xs text-[#1C1C1C]/60 font-sans">All prices per 1,000,000 (1M) Tokens</p>
          </div>

          <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-[#1C1C1C]/15 text-xs font-mono-tag">
            <button
              onClick={() => setActiveTableTab('all')}
              className={`px-3 py-1 rounded-full transition cursor-pointer ${
                activeTableTab === 'all' ? 'bg-[#1C1C1C] text-[#F8F7F4] font-semibold' : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
              }`}
            >
              All Models
            </button>
            <button
              onClick={() => setActiveTableTab('reasoning')}
              className={`px-3 py-1 rounded-full transition cursor-pointer ${
                activeTableTab === 'reasoning' ? 'bg-[#1C1C1C] text-[#F8F7F4] font-semibold' : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
              }`}
            >
              Reasoning Models
            </button>
            <button
              onClick={() => setActiveTableTab('chat')}
              className={`px-3 py-1 rounded-full transition cursor-pointer ${
                activeTableTab === 'chat' ? 'bg-[#1C1C1C] text-[#F8F7F4] font-semibold' : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
              }`}
            >
              Chat & Instruct
            </button>
          </div>
        </div>

        <div className="border-t border-b border-[#1C1C1C]/15 overflow-x-auto">
          <table className="w-full text-left border-collapse font-sans text-xs">
            <thead>
              <tr className="border-b border-[#1C1C1C]/15 font-mono-tag text-[11px] text-[#1C1C1C]/60 uppercase tracking-wider">
                <th className="py-3 px-4 font-normal">Model Name</th>
                <th className="py-3 px-4 font-normal">Provider</th>
                <th className="py-3 px-4 font-normal text-right">Helstera Input</th>
                <th className="py-3 px-4 font-normal text-right">Helstera Output</th>
                <th className="py-3 px-4 font-normal">Equiv Benchmark</th>
                <th className="py-3 px-4 font-normal text-right">OpenAI Rate</th>
                <th className="py-3 px-4 font-normal text-right">Savings %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1C1C1C]/15 font-mono-tag">
              {filteredModels.map((m) => {
                const savingsPct = Math.round((1 - m.inputPrice / m.openAiInputPrice) * 100);
                return (
                  <tr key={m.id} className="hover:bg-white transition-colors group">
                    <td className="py-4 px-4 font-bold text-[#1C1C1C] font-serif-title text-sm flex items-center gap-2">
                      <span>{m.name}</span>
                      {m.badge && (
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-white border border-[#1C1C1C]/15 text-[#C73E28] font-mono-tag font-bold uppercase">
                          {m.badge}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-[#1C1C1C]/70">{m.provider}</td>
                    <td className="py-4 px-4 text-right text-[#C73E28] font-bold">{currencySymbol}{fmtPrice(m.inputPrice)}</td>
                    <td className="py-4 px-4 text-right text-[#C73E28] font-bold">{currencySymbol}{fmtPrice(m.outputPrice)}</td>
                    <td className="py-4 px-4 text-[#1C1C1C]/70">{m.openAiEquiv}</td>
                    <td className="py-4 px-4 text-right text-[#1C1C1C]/40 line-through">{currencySymbol}{fmtPrice(m.openAiInputPrice)}</td>
                    <td className="py-4 px-4 text-right font-bold text-[#C73E28]">+{savingsPct}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment & Invoicing Methods Section */}
      <div className="py-8 border-t border-b border-[#1C1C1C]/15 space-y-6">
        <div className="space-y-1">
          <h3 className="font-serif-title text-2xl font-semibold text-[#1C1C1C]">Flexible Payment & Settlement Methods</h3>
          <p className="text-xs text-[#1C1C1C]/70 font-sans">Supporting Credit Cards, SWIFT Wire Transfers, Corporate POs, and Stablecoins.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#1C1C1C]/15">
          <div className="py-4 sm:px-4 first:pl-0 space-y-2">
            <CreditCard className="w-5 h-5 text-[#C73E28]" />
            <h4 className="font-serif-title font-semibold text-[#1C1C1C]">Stripe & Credit Card</h4>
            <p className="text-[#1C1C1C]/75 text-xs font-sans">Instant automated top-ups via Visa, Mastercard, AMEX, and Apple Pay.</p>
          </div>

          <div className="py-4 sm:px-4 space-y-2">
            <Building2 className="w-5 h-5 text-[#C73E28]" />
            <h4 className="font-serif-title font-semibold text-[#1C1C1C]">SWIFT Wire / Corporate PO</h4>
            <p className="text-[#1C1C1C]/75 text-xs font-sans">Corporate wire transfers with NET30 billing terms for Pro & Enterprise.</p>
          </div>

          <div className="py-4 sm:px-4 space-y-2">
            <Globe className="w-5 h-5 text-[#C73E28]" />
            <h4 className="font-serif-title font-semibold text-[#1C1C1C]">USDT / USDC Stablecoins</h4>
            <p className="text-[#1C1C1C]/75 text-xs font-sans">Direct crypto stablecoin payments for instant global settlement.</p>
          </div>

          <div className="py-4 sm:px-4 space-y-2">
            <ShieldCheck className="w-5 h-5 text-[#C73E28]" />
            <h4 className="font-serif-title font-semibold text-[#1C1C1C]">Formal DPA Included</h4>
            <p className="text-[#1C1C1C]/75 text-xs font-sans">Legally binding Data Processing Agreements provided for all accounts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
