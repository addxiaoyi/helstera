import React, { useState } from 'react';
import { Activity, Globe, CheckCircle2, RefreshCw, Zap, ShieldAlert, Wifi } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface RegionPing {
  region: string;
  location: string;
  status: 'available' | 'checked';
}

export const GatewayHealthStatus: React.FC = () => {
  const { t } = useLanguage();
  const health = t.ui.health;
  const [isTesting, setIsTesting] = useState(false);
  const [lastTestedAt, setLastTestedAt] = useState<string | null>(null);
  const [pings, setPings] = useState<RegionPing[]>([
    { region: 'HK-01', location: 'Hong Kong Gateway', status: 'available' },
    { region: 'SG-01', location: 'Singapore Edge', status: 'available' },
    { region: 'TYO-02', location: 'Tokyo Hub', status: 'available' },
    { region: 'US-EAST', location: 'US East (N. Virginia)', status: 'available' },
    { region: 'FRA-01', location: 'Frankfurt Central', status: 'available' },
  ]);

  const handleRunPingTest = () => {
    setIsTesting(true);
    setTimeout(() => {
      setPings((prev) =>
        prev.map((p) => ({
          ...p,
          status: 'checked',
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
              <Activity className="w-4 h-4" /> {health.eyebrow}
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {health.title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{lastTestedAt ? health.complete : health.accountRequired}</span>
            </div>

            <button
              onClick={handleRunPingTest}
              disabled={isTesting}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isTesting ? 'animate-spin' : ''}`} />
              <span>{isTesting ? health.checking : health.awaitCheck}</span>
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
                  <Wifi className="w-3 h-3" /> {ping.status === 'checked' ? health.checked : health.configured}
                </span>
              </div>

              <div className="text-sm font-bold text-white tracking-tight">
                {health.regions[ping.region]}
              </div>

              <div className="flex items-baseline justify-between pt-1 border-t border-slate-800/60">
                <span className="text-[11px] text-slate-500">{health.signal}</span>
                <span className="text-sm font-extrabold text-blue-400 font-mono">
                  {ping.status === 'checked' ? health.checkComplete : health.runCheck}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Operating signals and policy surfaces */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
            <Zap className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="text-slate-300 font-semibold">{health.fallbackTitle}</div>
              <div className="text-[11px] text-slate-400">{health.fallbackDescription}</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="text-slate-300 font-semibold">{health.retentionTitle}</div>
              <div className="text-[11px] text-slate-400">{health.retentionDescription}</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
            <Globe className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="text-slate-300 font-semibold">{health.scopeTitle}</div>
              <div className="text-[11px] text-slate-400">{health.scopeDescription}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
