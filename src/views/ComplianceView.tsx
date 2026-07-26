import React from 'react';
import { PageView } from '../types';
import { COMPLIANCE_DOCS } from '../data/complianceData';
import { KineticText } from '../components/KineticText';
import {
  ShieldCheck,
  FileText,
  Download,
  Lock,
  Cpu,
  Layers,
  CheckCircle2,
  Building,
  Globe,
  ArrowRight
} from 'lucide-react';

interface ComplianceViewProps {
  setCurrentView: (view: PageView) => void;
  openContractModal: () => void;
}

export const ComplianceView: React.FC<ComplianceViewProps> = ({ setCurrentView, openContractModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-[#F8F7F4] text-[#1C1C1C]">
      {/* Editorial Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <KineticText
          text="Compliance You Can Trust"
          type="words"
          direction="left"
          stagger={0.04}
          as="h1"
          className="font-serif-title text-4xl sm:text-6xl font-semibold text-[#1C1C1C] tracking-tight"
        />
        <KineticText
          text="Helstera is designed from the ground up to meet the needs of overseas companies that require legal clarity and data protection. We operate under the official pilot policy of the Shantou Overseas Chinese Economic and Cultural Cooperation Experimental Zone, enabling compliant cross-border AI computing."
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
              <Building className="w-4 h-4" /> Legal & Procurement Assurance
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#1C1C1C]">
              Shantou Pilot Zone "Data Processing" Policy (来数加工)
            </h2>
            <p className="text-xs sm:text-sm text-[#1C1C1C]/75 leading-relaxed font-sans">
              This structure enables overseas enterprises to utilize premier LLM inference while meeting internal procurement, legal, and GDPR-aligned data governance requirements.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={openContractModal}
              className="btn-editorial-primary text-xs flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Request Compliance Documents</span>
            </button>
            <button
              onClick={() => setCurrentView('contact')}
              className="btn-editorial-outline text-xs flex items-center gap-2 cursor-pointer"
            >
              <span>Contact Us</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1C]/15 font-sans text-xs text-[#1C1C1C]/80 leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-serif-title text-lg font-semibold text-[#1C1C1C] flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#C73E28]" />
              What We Provide
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C73E28] shrink-0" />
                <span>Formal Commercial B2B Master Service Agreement</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C73E28] shrink-0" />
                <span>Legally binding Data Processing Agreement (DPA)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C73E28] shrink-0" />
                <span>99.9% Service Level Agreement (SLA) Guarantee</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C73E28] shrink-0" />
                <span>Clear data handling and zero-retention security documentation</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 md:pt-0 md:pl-8 space-y-4">
            <h3 className="font-serif-title text-lg font-semibold text-[#1C1C1C] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C73E28]" />
              Data Security Principles
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C73E28] shrink-0 mt-0.5" />
                <span>Prompts are processed strictly in RAM and purged immediately post-execution</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C73E28] shrink-0 mt-0.5" />
                <span>System logs contain strictly non-sensitive token billing metadata</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C73E28] shrink-0 mt-0.5" />
                <span>Traffic flows via authorized cross-border dedicated fiber routes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Security Pillars Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-b border-[#1C1C1C]/15 py-8 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1C]/15">
        <div className="py-4 md:px-6 first:pl-0 space-y-3">
          <span className="font-mono-tag text-[10px] text-[#C73E28] font-bold uppercase tracking-wider">[01] MEMORY PURGE</span>
          <h3 className="font-serif-title text-xl font-semibold text-[#1C1C1C]">RAM Transient Processing</h3>
          <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans">
            Prompts are computed in volatile GPU RAM memory and immediately destroyed. Zero persistent disk logging or AI model training on customer prompts.
          </p>
        </div>

        <div className="py-4 md:px-6 space-y-3">
          <span className="font-mono-tag text-[10px] text-[#C73E28] font-bold uppercase tracking-wider">[02] METADATA AUDITING</span>
          <h3 className="font-serif-title text-xl font-semibold text-[#1C1C1C]">Metadata-Only Logs</h3>
          <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans">
            Operational telemetry stores strictly anonymized token counts, latency timestamps, and HTTP response status for billing auditability.
          </p>
        </div>

        <div className="py-4 md:px-6 space-y-3">
          <span className="font-mono-tag text-[10px] text-[#C73E28] font-bold uppercase tracking-wider">[03] AUTHORIZED PATHWAY</span>
          <h3 className="font-serif-title text-xl font-semibold text-[#1C1C1C]">Compliant Cross-Border Lines</h3>
          <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans">
            Traffic routes directly through Shantou Experimental Zone dedicated optical interconnects under official pilot zone authorizations.
          </p>
        </div>
      </div>

      {/* Downloadable Deliverables Section */}
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="font-serif-title text-3xl font-semibold text-[#1C1C1C]">Compliance Documents & Whitepapers</h2>
          <p className="text-xs text-[#1C1C1C]/70 font-sans">Official legal documents available upon request for B2B procurement and legal review.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-b border-[#1C1C1C]/15 py-6 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1C]/15">
          {COMPLIANCE_DOCS.map((doc, idx) => (
            <div key={idx} className="py-4 md:px-6 first:pl-0 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="font-mono-tag text-[10px] text-[#C73E28] font-bold uppercase">
                  {doc.category || 'LEGAL DOCUMENT'}
                </span>
                <h3 className="font-serif-title text-xl font-semibold text-[#1C1C1C]">{doc.title}</h3>
                <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans">{doc.description}</p>
              </div>

              <div className="pt-2">
                <button
                  onClick={openContractModal}
                  className="btn-editorial-outline text-xs inline-flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#C73E28]" />
                  <span>Request Copy ({doc.fileSize || 'PDF'})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
