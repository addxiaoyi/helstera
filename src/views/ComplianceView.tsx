import React from 'react';
import { PageView } from '../types';
import { COMPLIANCE_DOCS } from '../data/complianceData';
import { KineticText } from '../components/KineticText';
import {
  ShieldCheck,
  FileText,
  Lock,
  Cpu,
  Layers,
  CheckCircle2,
  Building,
  Globe,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ComplianceViewProps {
  setCurrentView: (view: PageView) => void;
  openContractModal: () => void;
}

export const ComplianceView: React.FC<ComplianceViewProps> = ({ setCurrentView, openContractModal }) => {
  const { t } = useLanguage();
  const compliance = t.ui.compliance;
  const documents = COMPLIANCE_DOCS.map((doc) => ({ ...doc, ...t.content.complianceDocs[doc.id] }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-[#F8F7F4] text-[#1C1C1C]">
      {/* Editorial Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <KineticText
          text={compliance.heroTitle}
          type="words"
          direction="left"
          stagger={0.04}
          as="h1"
          className="font-serif-title text-4xl sm:text-6xl font-semibold text-[#1C1C1C] tracking-tight"
        />
        <KineticText
          text={compliance.heroSubtitle}
          type="words"
          direction="right"
          stagger={0.02}
          delay={0.15}
          as="p"
          className="text-sm sm:text-base text-[#1C1C1C]/80 leading-relaxed font-sans"
        />
      </div>

      {/* Policy Background Strip */}
      <div className="py-8 border-t border-b border-[#1C1C1C]/15 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#1C1C1C]/15">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[#C73E28] text-xs font-mono-tag font-bold uppercase tracking-wider">
              <Building className="w-4 h-4" /> {compliance.legalTag}
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#1C1C1C]">
              {compliance.policyTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#1C1C1C]/75 leading-relaxed font-sans">
              {compliance.policyDescription}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={openContractModal}
              className="btn-editorial-primary text-xs flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>{compliance.requestDocuments}</span>
            </button>
            <button
              onClick={() => setCurrentView('contact')}
              className="btn-editorial-outline text-xs flex items-center gap-2 cursor-pointer"
            >
              <span>{compliance.contactUs}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1C]/15 font-sans text-xs text-[#1C1C1C]/80 leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-serif-title text-lg font-semibold text-[#1C1C1C] flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#C73E28]" />
              {compliance.provideTitle}
            </h3>
            <ul className="space-y-2.5">
              {Object.values(compliance.provideItems).map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C73E28] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 md:pt-0 md:pl-8 space-y-4">
            <h3 className="font-serif-title text-lg font-semibold text-[#1C1C1C] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C73E28]" />
              {compliance.securityTitle}
            </h3>
            <ul className="space-y-2.5">
              {Object.values(compliance.securityItems).map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C73E28] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Security Pillars Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-b border-[#1C1C1C]/15 py-8 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1C]/15">
        {Object.values(compliance.pillars).map((pillar) => (
          <div key={pillar.title} className="py-4 md:px-6 first:pl-0 space-y-3">
            <span className="font-mono-tag text-[10px] text-[#C73E28] font-bold uppercase tracking-wider">{pillar.label}</span>
            <h3 className="font-serif-title text-xl font-semibold text-[#1C1C1C]">{pillar.title}</h3>
            <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans">{pillar.description}</p>
          </div>
        ))}
      </div>

      {/* Downloadable Deliverables Section */}
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="font-serif-title text-3xl font-semibold text-[#1C1C1C]">{compliance.materialsTitle}</h2>
          <p className="text-xs text-[#1C1C1C]/70 font-sans">{compliance.materialsSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-b border-[#1C1C1C]/15 py-6 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1C]/15">
          {documents.map((doc) => (
            <div key={doc.id} className="py-4 md:px-6 first:pl-0 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="font-mono-tag text-[10px] text-[#C73E28] font-bold uppercase">
                  {doc.category || compliance.legalDocument}
                </span>
                <h3 className="font-serif-title text-xl font-semibold text-[#1C1C1C]">{doc.title}</h3>
                <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans">{doc.description}</p>
              </div>

              <div className="pt-2">
                <button
                  onClick={openContractModal}
                  className="btn-editorial-outline text-xs inline-flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-[#C73E28]" />
                  <span>{compliance.requestVersion}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
