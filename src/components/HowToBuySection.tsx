import React from 'react';
import { KineticText } from './KineticText';
import { UserPlus, Key, Terminal, CreditCard, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface HowItWorksSectionProps {
  openApiKeyModal: () => void;
  openContractModal: () => void;
}

export const HowToBuySection: React.FC<HowItWorksSectionProps> = ({
  openApiKeyModal,
  openContractModal
}) => {
  const { t } = useLanguage();

  const stepsData = [
    {
      number: '01',
      title: t.onboarding.step1Title,
      description: t.onboarding.step1Desc,
      actionLabel: t.onboarding.step1Action,
      onClick: openApiKeyModal,
    },
    {
      number: '02',
      title: t.onboarding.step2Title,
      description: t.onboarding.step2Desc,
      actionLabel: t.onboarding.step2Action,
      onClick: openApiKeyModal,
    },
    {
      number: '03',
      title: t.onboarding.step3Title,
      description: t.onboarding.step3Desc,
      actionLabel: t.onboarding.step3Action,
      onClick: openApiKeyModal,
    },
    {
      number: '04',
      title: t.onboarding.step4Title,
      description: t.onboarding.step4Desc,
      actionLabel: t.onboarding.step4Action,
      onClick: openContractModal,
    },
  ];

  return (
    <div className="space-y-12">
      {/* Direct Kinetic Section Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <KineticText
          text={t.onboarding.title}
          type="words"
          direction="left"
          stagger={0.04}
          as="h2"
          className="font-serif-title text-3xl sm:text-5xl font-semibold text-[#1C1C1C] tracking-tight"
        />
        <KineticText
          text={t.onboarding.subtitle}
          type="words"
          direction="right"
          stagger={0.02}
          delay={0.15}
          as="p"
          className="text-sm sm:text-base text-[#1C1C1C]/80 leading-relaxed font-sans"
        />
      </div>

      {/* Pure Editorial 4-Step Grid with Hairline Dividers & Staggered Offsets */}
      <div className="border-t border-b border-[#1C1C1C]/15 grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1C]/15 py-8">
        {stepsData.map((s, idx) => (
          <div
            key={idx}
            className={`py-6 md:px-6 first:pl-0 last:pr-0 space-y-4 flex flex-col justify-between group ${
              idx % 2 === 1 ? 'md:translate-y-4' : ''
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#1C1C1C]/10 pb-2">
                <span className="text-3xl font-serif-title font-semibold text-[#1C1C1C]/30 group-hover:text-[#C73E28] transition-colors">
                  {s.number}
                </span>
                <span className="font-mono-tag text-[10px] text-[#C73E28] uppercase tracking-widest font-bold">
                  {t.onboarding.stepPrefix} {s.number}
                </span>
              </div>

              <div className="space-y-1.5">
                <KineticText
                  text={s.title}
                  type="words"
                  direction={idx % 2 === 0 ? 'left' : 'right'}
                  stagger={0.03}
                  delay={idx * 0.08}
                  as="h3"
                  className="font-serif-title text-xl font-semibold text-[#1C1C1C] group-hover:text-[#C73E28] transition-colors"
                />
                <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans">{s.description}</p>
              </div>
            </div>

            <button
              onClick={s.onClick}
              className="text-xs font-mono-tag font-semibold text-[#C73E28] hover:underline flex items-center gap-1 cursor-pointer pt-2"
            >
              <span>{s.actionLabel}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};


