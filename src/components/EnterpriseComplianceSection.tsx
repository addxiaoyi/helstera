import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { KineticText } from './KineticText';
import { useLanguage } from '../i18n/LanguageContext';
import {
  ShieldCheck,
  Lock,
  FileText,
  Server,
  CheckCircle2,
  ArrowRight,
  Globe,
  Zap,
  Cpu,
  Trash2,
  ChevronRight,
  Activity,
  Layers
} from 'lucide-react';

interface EnterpriseComplianceSectionProps {
  openContractModal: () => void;
}

export const EnterpriseComplianceSection: React.FC<EnterpriseComplianceSectionProps> = ({
  openContractModal
}) => {
  const { t } = useLanguage();
  const enterprise = t.ui.enterprise;
  const [selectedNode, setSelectedNode] = useState<number>(2); // Default to Gateway node

  const architectureNodes = [
    {
      id: 0,
      icon: <Globe className="w-5 h-5 text-[#C73E28]" />,
      ...enterprise.nodes.client,
    },
    {
      id: 1,
      icon: <Zap className="w-5 h-5 text-[#C73E28]" />,
      ...enterprise.nodes.network,
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-5 h-5 text-[#C73E28]" />,
      ...enterprise.nodes.governance,
    },
    {
      id: 3,
      icon: <Cpu className="w-5 h-5 text-[#C73E28]" />,
      ...enterprise.nodes.routes,
    },
    {
      id: 4,
      icon: <Trash2 className="w-5 h-5 text-[#C73E28]" />,
      ...enterprise.nodes.retention,
    }
  ];

  const securityPillars = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#C73E28]" />,
      ...enterprise.pillars.governance,
    },
    {
      icon: <Lock className="w-5 h-5 text-[#C73E28]" />,
      ...enterprise.pillars.retention,
    },
    {
      icon: <FileText className="w-5 h-5 text-[#C73E28]" />,
      ...enterprise.pillars.contract,
    },
    {
      icon: <Server className="w-5 h-5 text-[#C73E28]" />,
      ...enterprise.pillars.network,
    }
  ];

  const active = architectureNodes[selectedNode];

  return (
    <div className="space-y-12">
      {/* Direct Kinetic Section Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <KineticText
          text={enterprise.title}
          type="words"
          direction="left"
          stagger={0.04}
          as="h2"
          className="font-serif-title text-3xl sm:text-5xl font-semibold text-[#1C1C1C] tracking-tight"
        />
        <KineticText
          text={enterprise.subtitle}
          type="words"
          direction="right"
          stagger={0.02}
          delay={0.15}
          as="p"
          className="text-sm sm:text-base text-[#1C1C1C]/80 leading-relaxed font-sans"
        />
      </div>

      {/* Interactive Multi-Node Data Flow Architecture Diagram - Pure Editorial Hairline Frame */}
      <div className="border-t border-b border-[#1C1C1C]/15 py-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1C1C1C]/10 font-mono-tag">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C73E28] animate-pulse" />
            <span className="text-xs font-bold uppercase text-[#1C1C1C]">
              {enterprise.pathTitle}
            </span>
          </div>
          <span className="text-xs text-[#1C1C1C]/60">
            {enterprise.pathHint}
          </span>
        </div>

        {/* Pipeline Nodes Row with Staggered Offsets ("错位") */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
          {architectureNodes.map((node, idx) => {
            const isSelected = selectedNode === node.id;
            return (
              <motion.button
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`p-4 border text-left transition flex flex-col justify-between space-y-3 relative cursor-pointer ${
                  idx % 2 === 1 ? 'sm:translate-y-2' : ''
                } ${
                  isSelected
                    ? 'bg-[#1C1C1C] text-[#F8F7F4] border-[#1C1C1C]'
                    : 'bg-white text-[#1C1C1C] border-[#1C1C1C]/15 hover:border-[#1C1C1C]/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-1.5 ${isSelected ? 'bg-white/10 text-white' : 'bg-[#1C1C1C]/5'}`}>
                    {node.icon}
                  </div>
                  <span className={`text-[10px] font-mono-tag px-2 py-0.5 font-bold ${
                    isSelected ? 'bg-[#C73E28] text-white' : 'bg-[#C73E28]/10 text-[#C73E28]'
                  }`}>
                    {enterprise.stepPrefix} 0{node.id + 1}
                  </span>
                </div>

                <div>
                  <h4 className="font-serif-title font-semibold text-sm leading-tight mb-1">{node.title}</h4>
                  <p className={`text-[11px] font-mono-tag ${isSelected ? 'text-white/70' : 'text-[#1C1C1C]/60'}`}>
                    {node.tag}
                  </p>
                </div>

                {isSelected && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1C1C1C] rotate-45"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Selected Node Details Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 bg-[#F8F7F4] border-l-2 border-[#C73E28] border-y border-r border-[#1C1C1C]/15 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#1C1C1C]/10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white border border-[#1C1C1C]/10">
                  {active.icon}
                </div>
                <div>
                  <h3 className="font-serif-title text-xl font-semibold text-[#1C1C1C]">{active.title}</h3>
                  <p className="text-xs text-[#1C1C1C]/70 font-sans">{active.summary}</p>
                </div>
              </div>

              <div className="px-3 py-1 bg-[#C73E28]/10 text-[#C73E28] text-xs font-mono-tag font-bold self-start sm:self-auto">
                {active.tag}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 text-xs font-mono-tag">
              <div className="p-3 border-l-2 border-[#1C1C1C]/20 space-y-1">
                <span className="text-[10px] text-[#1C1C1C]/50 uppercase">{enterprise.detailLabels.routeSignal}</span>
                <div className="font-bold text-[#C73E28]">{active.details.routeSignal}</div>
              </div>

              <div className="p-3 border-l-2 border-[#1C1C1C]/20 space-y-1">
                <span className="text-[10px] text-[#1C1C1C]/50 uppercase">{enterprise.detailLabels.security}</span>
                <div className="font-bold text-[#1C1C1C]">{active.details.security}</div>
              </div>

              <div className="p-3 border-l-2 border-[#1C1C1C]/20 space-y-1">
                <span className="text-[10px] text-[#1C1C1C]/50 uppercase">{enterprise.detailLabels.compliance}</span>
                <div className="font-bold text-[#1C1C1C]">{active.details.compliance}</div>
              </div>

              <div className="p-3 border-l-2 border-[#1C1C1C]/20 space-y-1">
                <span className="text-[10px] text-[#1C1C1C]/50 uppercase">{enterprise.detailLabels.specs}</span>
                <div className="font-bold text-[#1C1C1C]">{active.details.specs}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Editorial Pillars List */}
      <div className="border-t border-b border-[#1C1C1C]/15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#1C1C1C]/15">
        {securityPillars.map((p, idx) => (
          <div
            key={idx}
            className="py-6 lg:px-6 first:pl-0 last:pr-0 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <h3 className="font-serif-title text-xl font-semibold text-[#1C1C1C]">{p.title}</h3>
              <p className="text-xs text-[#1C1C1C]/75 leading-relaxed font-sans">{p.description}</p>
            </div>

            <div className="pt-2 flex items-center gap-1.5 text-xs text-[#C73E28] font-mono-tag font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#C73E28]" />
              <span>{enterprise.evidence}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Enterprise DPA Banner */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-serif-title text-2xl font-semibold text-[#1C1C1C]">{enterprise.dpaTitle}</h3>
          <p className="text-xs text-[#1C1C1C]/75 font-sans">
            {enterprise.dpaDescription}
          </p>
        </div>

        <button
          onClick={openContractModal}
          className="btn-editorial-primary px-6 py-3 text-xs flex items-center gap-2 cursor-pointer shrink-0"
        >
          <span>{enterprise.requestPack}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};


