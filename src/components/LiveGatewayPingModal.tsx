import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { DEFAULT_MODEL_ID, MODELS_DATA } from '../data/modelsData';
import {
  X,
  Zap,
  Activity,
  Globe,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Play,
  ArrowRight,
  Cpu,
  RefreshCw
} from 'lucide-react';

interface LiveGatewayPingModalProps {
  isOpen: boolean;
  onClose: () => void;
  openApiKeyModal: () => void;
}

export const LiveGatewayPingModal: React.FC<LiveGatewayPingModalProps> = ({
  isOpen,
  onClose,
  openApiKeyModal
}) => {
  const { t } = useLanguage();
  const copy = t.ui.modals.ping;
  const [selectedOrigin, setSelectedOrigin] = useState<'tokyo' | 'sg' | 'fra' | 'sf' | 'london'>('sg');
  const [selectedModel, setSelectedModel] = useState(DEFAULT_MODEL_ID);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [pingResult, setPingResult] = useState<{
    routeId: string;
    origin: string;
    status: string;
  } | null>(null);

  const origins = {
    sg: { name: copy.origins.sg },
    tokyo: { name: copy.origins.tokyo },
    fra: { name: copy.origins.fra },
    sf: { name: copy.origins.sf },
    london: { name: copy.origins.london }
  };

  const handleRunDiagnostic = () => {
    setIsRunning(true);
    setLogs([]);
    setPingResult(null);

    const origin = origins[selectedOrigin];

    const stepLogs = [
      copy.logs.resolving,
      `${copy.logs.accepted} ${origin.name}`,
      copy.logs.tls,
      `${copy.logs.model} ${selectedModel}.`,
      copy.logs.prepared,
      copy.logs.complete
    ];

    stepLogs.forEach((log, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, log]);
        if (index === stepLogs.length - 1) {
          setIsRunning(false);
          setPingResult({ routeId: selectedModel, origin: origin.name, status: copy.simulationComplete });
        }
      }, (index + 1) * 220);
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#1C1C1C]/60 backdrop-blur-xs animate-fadeIn">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          className="bg-white border border-[#1C1C1C]/20 rounded-2xl max-w-2xl max-w-[calc(100vw-1.5rem)] w-full p-4 sm:p-8 space-y-6 shadow-2xl relative text-[#1C1C1C] max-h-[calc(100dvh-1.5rem)] overflow-y-auto min-w-0"
        >
          {/* Header */}
          <div className="flex min-w-0 items-start justify-between gap-3 pb-4 border-b border-[#1C1C1C]/15">
            <div className="min-w-0 flex items-center gap-2">
              <span className="p-2 rounded-xl bg-[#F8F7F4] border border-[#1C1C1C]/15 text-[#C73E28]">
                <Activity className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-serif-title text-xl font-semibold text-[#1C1C1C] break-words">
                  {t.modals.pingTitle}
                </h3>
                <p className="text-xs text-[#1C1C1C]/60 font-sans break-words">
                  {t.modals.pingDesc}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#F8F7F4] border border-[#1C1C1C]/15 text-[#1C1C1C]/60 hover:text-[#1C1C1C] transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Selector Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            <div>
              <label className="block text-[#1C1C1C] font-semibold mb-1 font-serif-title">
                {t.modals.originLabel}
              </label>
              <select
                value={selectedOrigin}
                onChange={(e) => setSelectedOrigin(e.target.value as any)}
                className="w-full bg-[#F8F7F4] border border-[#1C1C1C]/15 rounded-xl p-2.5 font-mono-tag text-xs text-[#1C1C1C] focus:outline-none cursor-pointer"
              >
                {Object.entries(origins).map(([key, item]) => (
                  <option key={key} value={key}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[#1C1C1C] font-semibold mb-1 font-serif-title">
                {t.modals.modelLabel}
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value as any)}
                className="w-full bg-[#F8F7F4] border border-[#1C1C1C]/15 rounded-xl p-2.5 font-mono-tag text-xs text-[#1C1C1C] focus:outline-none cursor-pointer"
              >
                {MODELS_DATA.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name} ({t.content.models[model.id].category})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Trigger Button */}
          <button
            onClick={handleRunDiagnostic}
            disabled={isRunning}
            className="w-full btn-editorial-primary text-xs py-3 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-white" />
                <span>{copy.tracing}</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>{t.modals.runDiagnostic}</span>
              </>
            )}
          </button>

          {/* Real-time Hop Terminal Log */}
          <div className="p-4 bg-[#F8F7F4] rounded-xl border border-[#1C1C1C]/15 font-mono-tag text-xs leading-relaxed space-y-1 max-h-48 overflow-y-auto text-[#1C1C1C]">
            <div className="text-[#1C1C1C]/50 border-b border-[#1C1C1C]/10 pb-1 text-[11px] flex items-center justify-between">
              <span>{copy.terminalTitle}</span>
              <span>{copy.gateway}</span>
            </div>
            {logs.length === 0 ? (
              <p className="text-[#1C1C1C]/40 italic py-2">{copy.emptyLog}</p>
            ) : (
              logs.map((line, idx) => (
                <div key={idx} className="text-[#1C1C1C] flex items-center gap-2">
                  <span className="text-[#C73E28] font-bold">›</span>
                  <span>{line}</span>
                </div>
              ))
            )}
          </div>

          {/* Result Card */}
          {pingResult && (
            <div className="p-4 bg-white border border-[#1C1C1C]/20 rounded-xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-mono-tag text-xs">
              <div>
                <span className="text-[#1C1C1C]/60 text-[10px] block uppercase">{copy.selectedRoute}</span>
                <span className="text-base font-bold text-[#C73E28]">{pingResult.routeId}</span>
              </div>
              <div>
                <span className="text-[#1C1C1C]/60 text-[10px] block uppercase">{copy.origin}</span>
                <span className="text-base font-bold text-[#1C1C1C]">{pingResult.origin}</span>
              </div>
              <div>
                <span className="text-[#1C1C1C]/60 text-[10px] block uppercase">{copy.status}</span>
                <span className="text-base font-bold text-[#1C1C1C]">{pingResult.status}</span>
              </div>
            </div>
          )}

          {/* Modal Footer */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#1C1C1C]/15 text-xs font-mono-tag text-[#1C1C1C]/60">
            <span className="flex items-center gap-1.5 break-words">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C73E28]" />
              {copy.policyAttached}
            </span>

            <button
              onClick={() => {
                onClose();
                openApiKeyModal();
              }}
              className="text-[#C73E28] font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>{copy.getApiKey}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
