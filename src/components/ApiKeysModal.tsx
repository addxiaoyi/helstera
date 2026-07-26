import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import {
  Key,
  Copy,
  Check,
  Plus,
  Trash2,
  ShieldCheck,
  X,
  Terminal,
  ExternalLink,
  Play,
  Sparkles,
  Zap,
  Clock,
  Coins,
  Code,
  Sliders,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';

interface ApiKeysModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToDocs: () => void;
}

interface ApiKeyItem {
  id: string;
  key: string;
  name: string;
  created: string;
  lastUsed: string;
}

export const ApiKeysModal: React.FC<ApiKeysModalProps> = ({ isOpen, onClose, onNavigateToDocs }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'keys' | 'playground' | 'usage'>('keys');

  // Keys State
  const [keys, setKeys] = useState<ApiKeyItem[]>([
    {
      id: '1',
      key: 'sk-helstera-live-982f1a7b629e4d01c8a5',
      name: 'Production Gateway Key',
      created: '2026-07-25',
      lastUsed: 'Just now'
    },
    {
      id: '2',
      key: 'sk-helstera-test-412e8b031c90a12f5e3d',
      name: 'Staging Sandbox Key',
      created: '2026-07-20',
      lastUsed: '2 days ago'
    }
  ]);

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [newKeyName, setNewKeyName] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);

  // Playground State
  const [selectedModel, setSelectedModel] = useState<'deepseek-v3' | 'deepseek-r1' | 'qwen-max-2.5' | 'glm-4-plus'>('deepseek-v3');
  const [userPrompt, setUserPrompt] = useState('Write a high-performance Python script to query the Helstera OpenAI-compatible endpoint and stream reasoning tokens.');
  const [isLoading, setIsLoading] = useState(false);
  const [responseOutput, setResponseOutput] = useState<string | null>(null);
  const [responseStats, setResponseStats] = useState<{ ttft: number; speed: number; tokens: number; cost: number } | null>(null);
  const [codeLanguage, setCodeLanguage] = useState<'curl' | 'python' | 'node'>('python');

  if (!isOpen) return null;

  const handleCopy = (keyText: string, id: string) => {
    navigator.clipboard.writeText(keyText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCreateKey = (e: React.FormEvent) => {
    e.preventDefault();
    const randomHex = Array.from({ length: 20 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
    const newKey: ApiKeyItem = {
      id: Date.now().toString(),
      key: `sk-helstera-live-${randomHex}`,
      name: newKeyName || 'New API Key',
      created: new Date().toISOString().split('T')[0],
      lastUsed: 'Never'
    };
    setKeys([newKey, ...keys]);
    setNewKeyName('');
    setShowCreateForm(false);
  };

  const handleDeleteKey = (id: string) => {
    setKeys(keys.filter(k => k.id !== id));
  };

  const modelPrices = {
    'deepseek-v3': { name: 'DeepSeek-V3', rate: 0.27 },
    'deepseek-r1': { name: 'DeepSeek-R1', rate: 0.55 },
    'qwen-max-2.5': { name: 'Qwen-Max 2.5', rate: 1.60 },
    'glm-4-plus': { name: 'GLM-4 Plus', rate: 1.40 }
  };

  const runPlaygroundRequest = () => {
    setIsLoading(true);
    setResponseOutput(null);
    setResponseStats(null);

    setTimeout(() => {
      let outputText = '';
      if (selectedModel === 'deepseek-r1') {
        outputText = `<think>\nAnalyzing the prompt for Python streaming implementation...\nConstructing OpenAI client configuration pointing to https://api.helstera.com/v1...\nVerified zero-data-retention RAM conduit.\n</think>\n\nfrom openai import OpenAI\n\nclient = OpenAI(\n    base_url="https://api.helstera.com/v1",\n    api_key="${keys[0]?.key || 'sk-helstera-xxx'}"\n)\n\nstream = client.chat.completions.create(\n    model="${selectedModel}",\n    messages=[{"role": "user", "content": "${userPrompt.replace(/"/g, '\\"')}"}],\n    stream=True\n)\n\nfor chunk in stream:\n    if chunk.choices[0].delta.content:\n        print(chunk.choices[0].delta.content, end="")`;
      } else {
        outputText = `HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  "id": "chatcmpl-helstera-${Math.floor(Math.random() * 899999 + 100000)}",\n  "object": "chat.completion",\n  "created": ${Math.floor(Date.now() / 1000)},\n  "model": "${selectedModel}",\n  "choices": [{\n    "index": 0,\n    "message": {\n      "role": "assistant",\n      "content": "Request processed successfully via Shantou Pilot Zone encrypted marine line with zero prompt logging."\n    },\n    "finish_reason": "stop"\n  }],\n  "usage": {\n    "prompt_tokens": 42,\n    "completion_tokens": 128,\n    "total_tokens": 170\n  }\n}`;
      }

      setResponseOutput(outputText);
      setIsLoading(false);
      setResponseStats({
        ttft: Math.floor(Math.random() * 40 + 110), // ms
        speed: Math.floor(Math.random() * 25 + 85), // tokens/sec
        tokens: 170,
        cost: (170 / 1000000) * modelPrices[selectedModel].rate
      });
    }, 900);
  };

  const getCodeSnippet = () => {
    const currentKey = keys[0]?.key || 'sk-helstera-xxx';
    if (codeLanguage === 'curl') {
      return `curl https://api.helstera.com/v1/chat/completions \\
  -H "Authorization: Bearer ${currentKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${selectedModel}",
    "messages": [{"role": "user", "content": "${userPrompt.replace(/"/g, '\\"')}"}]
  }'`;
    } else if (codeLanguage === 'python') {
      return `from openai import OpenAI

client = OpenAI(
    api_key="${currentKey}",
    base_url="https://api.helstera.com/v1"
)

response = client.chat.completions.create(
    model="${selectedModel}",
    messages=[{"role": "user", "content": "${userPrompt.replace(/"/g, '\\"')}"}]
)

print(response.choices[0].message.content)`;
    } else {
      return `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "${currentKey}",
  baseURL: "https://api.helstera.com/v1"
});

const completion = await client.chat.completions.create({
  model: "${selectedModel}",
  messages: [{ role: "user", content: "${userPrompt.replace(/"/g, '\\"')}" }]
});

console.log(completion.choices[0].message.content);`;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1C1C]/75 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#F8F7F4] border border-[#1C1C1C]/20 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative text-[#1C1C1C] flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-[#1C1C1C]/15 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#C73E28]/10 text-[#C73E28]">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-serif-title font-semibold text-[#1C1C1C]">Developer Console & API Sandbox</h3>
              <p className="text-xs text-[#1C1C1C]/60 font-sans">Manage credentials & test endpoints in real time</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#1C1C1C]/60 hover:text-[#1C1C1C] hover:bg-[#1C1C1C]/5 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="bg-white/80 px-6 py-2 border-b border-[#1C1C1C]/10 flex items-center gap-2 font-mono-tag text-xs shrink-0">
          <button
            onClick={() => setActiveTab('keys')}
            className={`px-3 py-1.5 rounded-full transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'keys'
                ? 'bg-[#1C1C1C] text-[#F8F7F4] font-bold'
                : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
            }`}
          >
            <Key className="w-3.5 h-3.5" />
            <span>API Keys</span>
          </button>

          <button
            onClick={() => setActiveTab('playground')}
            className={`px-3 py-1.5 rounded-full transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'playground'
                ? 'bg-[#1C1C1C] text-[#F8F7F4] font-bold'
                : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
            }`}
          >
            <Play className="w-3.5 h-3.5 text-[#C73E28]" />
            <span>Live Playground</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#C73E28]/15 text-[#C73E28] font-bold">Interactive</span>
          </button>

          <button
            onClick={() => setActiveTab('usage')}
            className={`px-3 py-1.5 rounded-full transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'usage'
                ? 'bg-[#1C1C1C] text-[#F8F7F4] font-bold'
                : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
            }`}
          >
            <Coins className="w-3.5 h-3.5" />
            <span>Credits & Usage</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 overflow-y-auto flex-1">
          {/* TAB 1: API KEYS */}
          {activeTab === 'keys' && (
            <div className="space-y-5">
              {/* Security Banner */}
              <div className="flex items-start gap-3 p-4 bg-white border border-[#1C1C1C]/15 rounded-xl text-xs">
                <ShieldCheck className="w-5 h-5 text-[#C73E28] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-semibold text-[#1C1C1C]">Zero Data Retention Security Guarantee</p>
                  <p className="text-[#1C1C1C]/75 leading-relaxed font-sans">
                    Requests authenticated with your Helstera API keys are routed via encrypted cross-border channels with zero prompt logging or disk retention.
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-xs font-mono-tag font-bold uppercase tracking-wider text-[#1C1C1C]/60">Your Active API Keys</h4>
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="btn-editorial-primary px-3 py-1.5 text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Create New Key</span>
                </button>
              </div>

              {/* New Key Form */}
              {showCreateForm && (
                <form onSubmit={handleCreateKey} className="p-4 bg-white rounded-xl border border-[#1C1C1C]/15 space-y-3 text-xs animate-fadeIn shadow-2xs">
                  <label className="block text-[#1C1C1C] font-mono-tag font-semibold">API Key Label / Purpose</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      required
                      placeholder="e.g. DeepSeek-R1 Agent Gateway"
                      value={newKeyName}
                      onChange={(e) => setNewKeyName(e.target.value)}
                      className="flex-1 px-3 py-2 bg-[#F8F7F4] border border-[#1C1C1C]/20 rounded-lg text-[#1C1C1C] focus:outline-none focus:border-[#C73E28]"
                    />
                    <button
                      type="submit"
                      className="btn-editorial-primary px-4 py-2 text-xs cursor-pointer"
                    >
                      Generate Key
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowCreateForm(false)}
                      className="px-3 py-2 bg-white border border-[#1C1C1C]/15 rounded-lg text-[#1C1C1C] hover:bg-[#1C1C1C]/5 transition cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* Keys List */}
              <div className="space-y-3">
                {keys.map((k) => (
                  <div
                    key={k.id}
                    className="p-4 rounded-xl bg-white border border-[#1C1C1C]/15 hover:border-[#1C1C1C]/30 transition space-y-2 shadow-2xs"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#1C1C1C]">{k.name}</span>
                      <div className="flex items-center gap-2 text-[10px] text-[#1C1C1C]/60 font-mono-tag">
                        <span>Created: {k.created}</span>
                        <span>•</span>
                        <span>Used: {k.lastUsed}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-[#F8F7F4] px-3 py-2 rounded-lg border border-[#1C1C1C]/15 font-mono-tag text-xs text-[#1C1C1C]">
                      <span className="flex-1 truncate">{k.key}</span>
                      <button
                        onClick={() => handleCopy(k.key, k.id)}
                        className="p-1 text-[#1C1C1C]/60 hover:text-[#C73E28] transition cursor-pointer"
                        title="Copy Key"
                      >
                        {copiedId === k.id ? <Check className="w-4 h-4 text-[#C73E28]" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => handleDeleteKey(k.id)}
                        className="p-1 text-[#1C1C1C]/40 hover:text-rose-600 transition cursor-pointer"
                        title="Revoke Key"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quickstart Code Preview */}
              <div className="p-4 bg-white rounded-xl border border-[#1C1C1C]/15 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono-tag">
                  <span className="text-[#1C1C1C]/70 flex items-center gap-1.5 font-bold">
                    <Terminal className="w-4 h-4 text-[#C73E28]" /> 1-Line Drop-in Quickstart
                  </span>
                  <button
                    onClick={() => { onClose(); onNavigateToDocs(); }}
                    className="text-[#C73E28] hover:underline flex items-center gap-1 text-xs cursor-pointer font-semibold"
                  >
                    <span>Full API Documentation</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
                <pre className="bg-[#1C1C1C] p-3.5 rounded-xl text-[11px] font-mono-tag text-[#F8F7F4] overflow-x-auto leading-relaxed shadow-inner">
{`curl https://api.helstera.com/v1/chat/completions \\
  -H "Authorization: Bearer ${keys[0]?.key || 'sk-helstera-xxx'}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "deepseek-v3",
    "messages": [{"role": "user", "content": "Hello Helstera!"}]
  }'`}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 2: LIVE PLAYGROUND */}
          {activeTab === 'playground' && (
            <div className="space-y-5">
              {/* Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-xl border border-[#1C1C1C]/15">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono-tag font-bold text-[#1C1C1C]/70 uppercase">Select Target LLM</label>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value as any)}
                    className="w-full px-3 py-2 bg-[#F8F7F4] border border-[#1C1C1C]/20 rounded-lg text-xs font-mono-tag text-[#1C1C1C] focus:outline-none focus:border-[#C73E28]"
                  >
                    <option value="deepseek-v3">DeepSeek-V3 ($0.27 / 1M)</option>
                    <option value="deepseek-r1">DeepSeek-R1 ($0.55 / 1M Reasoning)</option>
                    <option value="qwen-max-2.5">Qwen-Max 2.5 ($1.60 / 1M)</option>
                    <option value="glm-4-plus">GLM-4 Plus ($1.40 / 1M)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-tag font-bold text-[#1C1C1C]/70 uppercase">Prompt Preset</label>
                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      onClick={() => setUserPrompt('Explain the architectural advantages of DeepSeek-V3 Multi-Head Latent Attention (MLA).')}
                      className="px-2.5 py-1.5 bg-[#F8F7F4] hover:bg-[#1C1C1C]/5 border border-[#1C1C1C]/10 rounded-lg text-[11px] text-[#1C1C1C] truncate cursor-pointer flex-1"
                    >
                      MLA Arch
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserPrompt('Write a Python async streaming client for OpenAI-compatible Helstera API.')}
                      className="px-2.5 py-1.5 bg-[#F8F7F4] hover:bg-[#1C1C1C]/5 border border-[#1C1C1C]/10 rounded-lg text-[11px] text-[#1C1C1C] truncate cursor-pointer flex-1"
                    >
                      Python Client
                    </button>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono-tag">
                  <span className="font-bold text-[#1C1C1C]">User Prompt</span>
                  <span className="text-[#1C1C1C]/50">{userPrompt.length} chars</span>
                </div>
                <textarea
                  rows={3}
                  value={userPrompt}
                  onChange={(e) => setUserPrompt(e.target.value)}
                  className="w-full p-3 bg-white border border-[#1C1C1C]/20 rounded-xl text-xs text-[#1C1C1C] font-sans focus:outline-none focus:border-[#C73E28] transition"
                  placeholder="Enter prompt..."
                />
              </div>

              {/* Run Button */}
              <div className="flex items-center justify-between">
                <button
                  onClick={runPlaygroundRequest}
                  disabled={isLoading}
                  className="btn-editorial-primary px-5 py-2 text-xs flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Routing Via Marine Optical Line...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Run API Test Request</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-xs font-mono-tag">
                  <span className="text-[#1C1C1C]/60">Code Export:</span>
                  {(['python', 'curl', 'node'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setCodeLanguage(lang)}
                      className={`px-2 py-0.5 rounded text-[11px] uppercase transition cursor-pointer ${
                        codeLanguage === lang
                          ? 'bg-[#1C1C1C] text-[#F8F7F4] font-bold'
                          : 'bg-white border border-[#1C1C1C]/10 text-[#1C1C1C]/60'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Snippet / Response Display */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Code Box */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono-tag text-[#1C1C1C]/60">
                    <span>Generated Code Snippet ({codeLanguage})</span>
                    <button
                      onClick={() => navigator.clipboard.writeText(getCodeSnippet())}
                      className="hover:text-[#1C1C1C] flex items-center gap-1 cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </button>
                  </div>
                  <pre className="p-3.5 bg-[#1C1C1C] text-[#F8F7F4] rounded-xl font-mono-tag text-[11px] leading-relaxed overflow-x-auto h-48 border border-[#1C1C1C]">
                    {getCodeSnippet()}
                  </pre>
                </div>

                {/* Output Box */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono-tag text-[#1C1C1C]/60">
                    <span>Live Output Payload</span>
                    {responseStats && (
                      <span className="text-[#C73E28] font-bold">
                        Cost: ${responseStats.cost.toFixed(6)}
                      </span>
                    )}
                  </div>
                  <div className="p-3.5 bg-white border border-[#1C1C1C]/20 rounded-xl font-mono-tag text-[11px] leading-relaxed overflow-y-auto h-48 text-[#1C1C1C]">
                    {isLoading ? (
                      <div className="h-full flex items-center justify-center text-[#1C1C1C]/50 gap-2">
                        <RefreshCw className="w-4 h-4 animate-spin text-[#C73E28]" />
                        <span>Awaiting volatile RAM response...</span>
                      </div>
                    ) : responseOutput ? (
                      <pre className="whitespace-pre-wrap">{responseOutput}</pre>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-[#1C1C1C]/40 text-center p-4 space-y-1">
                        <Terminal className="w-6 h-6 text-[#1C1C1C]/30" />
                        <p>Click "Run API Test Request" to see real-time inference latency and response stats.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Response Stats Ribbon */}
              {responseStats && (
                <div className="grid grid-cols-4 gap-3 bg-white p-3 rounded-xl border border-[#1C1C1C]/15 text-xs font-mono-tag">
                  <div>
                    <span className="text-[10px] text-[#1C1C1C]/50 uppercase">First Token (TTFT)</span>
                    <div className="font-bold text-[#1C1C1C]">{responseStats.ttft} ms</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#1C1C1C]/50 uppercase">Speed</span>
                    <div className="font-bold text-[#C73E28]">{responseStats.speed} tok/s</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#1C1C1C]/50 uppercase">Total Tokens</span>
                    <div className="font-bold text-[#1C1C1C]">{responseStats.tokens}</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#1C1C1C]/50 uppercase">Computed Cost</span>
                    <div className="font-bold text-[#C73E28]">${responseStats.cost.toFixed(6)}</div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: USAGE & CREDITS */}
          {activeTab === 'usage' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-xl border border-[#1C1C1C]/15 space-y-1">
                  <span className="text-[10px] font-mono-tag text-[#1C1C1C]/60 uppercase">Free Trial Credit</span>
                  <div className="font-serif-title text-2xl font-bold text-[#1C1C1C]">$5.00</div>
                  <div className="text-[10px] font-mono-tag text-emerald-600 font-semibold">Active & Valid</div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#1C1C1C]/15 space-y-1">
                  <span className="text-[10px] font-mono-tag text-[#1C1C1C]/60 uppercase">Monthly API Calls</span>
                  <div className="font-serif-title text-2xl font-bold text-[#1C1C1C]">1,280</div>
                  <div className="text-[10px] font-mono-tag text-[#1C1C1C]/60">0% Error Rate</div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#1C1C1C]/15 space-y-1">
                  <span className="text-[10px] font-mono-tag text-[#1C1C1C]/60 uppercase">Avg Gateway Latency</span>
                  <div className="font-serif-title text-2xl font-bold text-[#C73E28]">138 ms</div>
                  <div className="text-[10px] font-mono-tag text-[#C73E28] font-semibold">Sub-180ms SLA Verified</div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#1C1C1C]/15 space-y-3">
                <h4 className="font-serif-title text-base font-semibold text-[#1C1C1C]">Tier & Quota Limits</h4>
                <div className="space-y-2 text-xs font-mono-tag">
                  <div className="flex justify-between py-1.5 border-b border-[#1C1C1C]/10">
                    <span className="text-[#1C1C1C]/70">Rate Limit (RPM)</span>
                    <span className="font-bold text-[#1C1C1C]">10,000 requests / min</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#1C1C1C]/10">
                    <span className="text-[#1C1C1C]/70">Token Limit (TPM)</span>
                    <span className="font-bold text-[#1C1C1C]">2,000,000 tokens / min</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#1C1C1C]/70">Data Retention Policy</span>
                    <span className="font-bold text-[#C73E28]">Zero Data Retention (ZDR RAM)</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

