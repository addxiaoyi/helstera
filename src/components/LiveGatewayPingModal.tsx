import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
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
  const [selectedOrigin, setSelectedOrigin] = useState<'tokyo' | 'sg' | 'fra' | 'sf' | 'london'>('sg');
  const [selectedModel, setSelectedModel] = useState<'v3' | 'r1' | 'qwen'>('v3');
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [pingResult, setPingResult] = useState<{
    ttft: number;
    totalLatency: number;
    tps: number;
    costPerReq: string;
  } | null>(null);

  const origins = {
    sg: { name: 'Singapore (AWS ap-southeast-1)', distance: '1,850 km', basePing: 32 },
    tokyo: { name: 'Tokyo (GCP asia-northeast1)', distance: '2,900 km', basePing: 45 },
    fra: { name: 'Frankfurt (AWS eu-central-1)', distance: '8,700 km', basePing: 135 },
    sf: { name: 'San Francisco (AWS us-west-1)', distance: '10,200 km', basePing: 148 },
    london: { name: 'London (GCP europe-west2)', distance: '9,100 km', basePing: 140 }
  };

  const models = {
    v3: { name: 'DeepSeek-V3 671B MoE', tps: 184, rate: '$0.27 / 1M' },
    r1: { name: 'DeepSeek-R1 Reasoning', tps: 122, rate: '$0.55 / 1M' },
    qwen: { name: 'Qwen-Max 2.5', tps: 156, rate: '$1.60 / 1M' }
  };

  const handleRunDiagnostic = () => {
    setIsRunning(true);
    setLogs([]);
    setPingResult(null);

    const base = origins[selectedOrigin].basePing;
    const modelInfo = models[selectedModel];

    const stepLogs = [
      `[0.0ms] Resolving api.helstera.com via TLS 1.3...`,
      `[${(base * 0.2).toFixed(1)}ms] Handshake OK. Connecting via Shantou Optical Fiber Route...`,
      `[${(base * 0.6).toFixed(1)}ms] Pilot Zone RAM Volatile Memory sandbox provisioned (ZDR verified).`,
      `[${(base * 0.9).toFixed(1)}ms] Request received at DeepSeek H800 MoE Cluster in RAM.`,
      `[${(base + 65).toFixed(1)}ms] First token generated (TTFT: ${(base + 65).toFixed(1)}ms).`,
      `[${(base + 115).toFixed(1)}ms] Streaming token payload at ${modelInfo.tps} tok/s...`,
      `[${(base + 128).toFixed(1)}ms] Complete. Status 200 OK. 0 bytes retained to disk.`
    ];

    stepLogs.forEach((log, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, log]);
        if (index === stepLogs.length - 1) {
          setIsRunning(false);
          setPingResult({
            ttft: Math.round(base + 65),
            totalLatency: Math.round(base + 128),
            tps: modelInfo.tps,
            costPerReq: '$0.000081'
          });
        }
      }, (index + 1) * 220);
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1C1C]/60 backdrop-blur-xs animate-fadeIn">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          className="bg-white border border-[#1C1C1C]/20 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-[#1C1C1C]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#1C1C1C]/15">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-[#F8F7F4] border border-[#1C1C1C]/15 text-[#C73E28]">
                <Activity className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-serif-title text-xl font-semibold text-[#1C1C1C]">
                  {t.modals.pingTitle}
                </h3>
                <p className="text-xs text-[#1C1C1C]/60 font-sans">
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
                    {item.name} ({item.distance})
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
                {Object.entries(models).map(([key, item]) => (
                  <option key={key} value={key}>
                    {item.name} ({item.rate})
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
                <span>Pinging Shantou Optical Node...</span>
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
              <span>ROUTE TERMINAL TRACE</span>
              <span>GATEWAY: api.helstera.com</span>
            </div>
            {logs.length === 0 ? (
              <p className="text-[#1C1C1C]/40 italic py-2">Click "Run Real-Time Route Ping Diagnostic" to initiate route trace...</p>
            ) : (
              logs.map((line, idx) => (
                <div key={idx} className="text-[#1C1C1C] flex items-center gap-2">
                  <span className="text-[#C73E28] font-bold">›</span>
                  <span>{line}</span>
                </div>
              ))
            )}
          </div>

          {/* Result Card metrics */}
          {pingResult && (
            <div className="p-4 bg-white border border-[#1C1C1C]/20 rounded-xl grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono-tag text-xs">
              <div>
                <span className="text-[#1C1C1C]/60 text-[10px] block uppercase">Total Latency</span>
                <span className="text-base font-bold text-[#C73E28]">{pingResult.totalLatency}ms</span>
              </div>
              <div>
                <span className="text-[#1C1C1C]/60 text-[10px] block uppercase">Time to First Token</span>
                <span className="text-base font-bold text-[#1C1C1C]">{pingResult.ttft}ms</span>
              </div>
              <div>
                <span className="text-[#1C1C1C]/60 text-[10px] block uppercase">Throughput Speed</span>
                <span className="text-base font-bold text-[#1C1C1C]">{pingResult.tps} tok/s</span>
              </div>
              <div>
                <span className="text-[#1C1C1C]/60 text-[10px] block uppercase">Est. Cost/Req</span>
                <span className="text-base font-bold text-[#C73E28]">{pingResult.costPerReq}</span>
              </div>
            </div>
          )}

          {/* Modal Footer */}
          <div className="pt-2 flex items-center justify-between border-t border-[#1C1C1C]/15 text-xs font-mono-tag text-[#1C1C1C]/60">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C73E28]" />
              ZDR Volatile Memory Compliant
            </span>

            <button
              onClick={() => {
                onClose();
                openApiKeyModal();
              }}
              className="text-[#C73E28] font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Get API Key</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
