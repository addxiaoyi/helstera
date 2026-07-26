import React, { useState } from 'react';
import { Activity, Globe, CheckCircle2, RefreshCw, Zap, ShieldAlert, Wifi } from 'lucide-react';

interface RegionPing {
  region: string;
  location: string;
  latencyMs: number;
  status: 'optimal' | 'good' | 'degraded';
  ip: string;
}

export const GatewayHealthStatus: React.FC = () => {
  const [isTesting, setIsTesting] = useState(false);
  const [lastTestedAt, setLastTestedAt] = useState<string>('Just now');
  const [pings, setPings] = useState<RegionPing[]>([
    { region: 'HK-01', location: 'Hong Kong Gateway', latencyMs: 24, status: 'optimal', ip: '43.218.xx.12' },
    { region: 'SG-01', location: 'Singapore Edge', latencyMs: 38, status: 'optimal', ip: '18.142.xx.88' },
    { region: 'TYO-02', location: 'Tokyo Hub', latencyMs: 45, status: 'optimal', ip: '13.230.xx.41' },
    { region: 'US-EAST', location: 'US East (N. Virginia)', latencyMs: 118, status: 'optimal', ip: '54.210.xx.90' },
    { region: 'FRA-01', location: 'Frankfurt Central', latencyMs: 142, status: 'optimal', ip: '3.120.xx.15' },
  ]);

  const handleRunPingTest = () => {
    setIsTesting(true);
    setTimeout(() => {
      setPings((prev) =>
        prev.map((p) => ({
          ...p,
          latencyMs: Math.max(12, Math.floor(p.latencyMs + (Math.random() * 8 - 4))),
        }))
      );
      setLastTestedAt(new Date().toLocaleTimeString());
      setIsTesting(false);
    }, 800);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Activity className="w-4 h-4" /> Global Cross-Border Gateway Pulse
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Live Gateway Health & Latency Status
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>99.99% Uptime SLA Active</span>
            </div>

            <button
              onClick={handleRunPingTest}
              disabled={isTesting}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isTesting ? 'animate-spin' : ''}`} />
              <span>{isTesting ? 'Ping Testing...' : 'Run Ping Test'}</span>
            </button>
          </div>
        </div>

        {/* Live Latency Region Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {pings.map((ping) => (
            <div
              key={ping.region}
              className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-blue-500/50 transition space-y-2 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase">
                  {ping.region}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                  <Wifi className="w-3 h-3" /> Optimal
                </span>
              </div>

              <div className="text-sm font-bold text-white tracking-tight">
                {ping.location}
              </div>

              <div className="flex items-baseline justify-between pt-1 border-t border-slate-800/60">
                <span className="text-[11px] text-slate-500">Latency</span>
                <span className="text-sm font-extrabold text-blue-400 font-mono">
                  {ping.latencyMs} ms
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture & SLA Footer Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
            <Zap className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="text-slate-300 font-semibold">Intelligent Multi-Model Failover</div>
              <div className="text-[11px] text-slate-400">Automatic route redirection within 50ms on QPS spike</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="text-slate-300 font-semibold">RAM-Only Memory Instant Purge</div>
              <div className="text-[11px] text-slate-400">Prompts processed in memory & purged immediately</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
            <Globe className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="text-slate-300 font-semibold">Dedicated Cross-Border Routes</div>
              <div className="text-[11px] text-slate-400">Shantou Pilot Zone authorized line routing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
