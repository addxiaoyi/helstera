import React from 'react';
import { PageView } from '../types';
import { KineticText } from '../components/KineticText';
import { ShieldCheck, Zap, Globe, Target, Cpu, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface AboutViewProps {
  setCurrentView: (view: PageView) => void;
  openContractModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setCurrentView, openContractModal }) => {
  const { t } = useLanguage();
  const about = t.ui.about;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-[#F8F7F4] text-[#1C1C1C]">
      {/* Editorial Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <KineticText
          text={about.heroTitle}
          type="words"
          direction="left"
          stagger={0.04}
          as="h1"
          className="font-serif-title text-4xl sm:text-6xl font-semibold text-[#1C1C1C] tracking-tight"
        />
        <KineticText
          text={about.heroSubtitle}
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
        {Object.values(about.missions).map((mission) => (
          <div key={mission.title} className="py-4 md:px-6 first:pl-0 space-y-3">
            <h3 className="font-serif-title text-xl font-semibold text-[#1C1C1C]">{mission.title}</h3>
            <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans">{mission.description}</p>
          </div>
        ))}
      </div>

      {/* Why governance belongs in the route */}
      <div className="py-8 border-t border-b border-[#1C1C1C]/15 space-y-6">
        <h2 className="font-serif-title text-3xl font-semibold text-[#1C1C1C]">
          {about.governanceTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1C]/15 font-sans text-xs text-[#1C1C1C]/80 leading-relaxed">
          <div className="space-y-3">
            <p>
              {about.governanceParagraph1}
            </p>
            <p>
              {about.governanceParagraph2}
            </p>
          </div>

          <div className="pt-6 md:pt-0 md:pl-8 space-y-3">
            <h4 className="font-serif-title font-semibold text-[#1C1C1C] text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C73E28]" />
              {about.governanceCapabilitiesTitle}
            </h4>
            <ul className="space-y-2 text-[#1C1C1C]/80 font-sans">
              {Object.values(about.governanceCapabilities).map((capability) => (
                <li key={capability} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C73E28]" />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="font-serif-title text-3xl font-semibold text-[#1C1C1C]">{about.roadmapTitle}</h2>
          <p className="text-xs text-[#1C1C1C]/70 font-sans">{about.roadmapSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-b border-[#1C1C1C]/15 py-8 divide-y sm:divide-y-0 sm:divide-x divide-[#1C1C1C]/15">
          {Object.values(about.roadmap).map((item) => (
            <div key={item.title} className="py-4 sm:px-6 first:pl-0 space-y-2">
              <span className="font-mono-tag text-[#C73E28] font-bold uppercase tracking-wider text-[10px]">{item.phase}</span>
              <h4 className="font-serif-title font-semibold text-[#1C1C1C] text-lg">{item.title}</h4>
              <p className="text-[#1C1C1C]/75 text-xs font-sans">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
