import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { DEFAULT_MODEL_ID, findModel, MODELS_DATA } from '../data/modelsData';
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
  nameKey?: 'production' | 'staging';
  created: string;
  lastUsed: string;
  lastUsedKey?: 'justNow' | 'daysAgo' | 'never';
}

export const ApiKeysModal: React.FC<ApiKeysModalProps> = ({ isOpen, onClose, onNavigateToDocs }) => {
  const { t } = useLanguage();
  const copy = t.ui.modals.apiKeys;
  const [activeTab, setActiveTab] = useState<'keys' | 'playground' | 'usage'>('keys');

  // Keys State
  const [keys, setKeys] = useState<ApiKeyItem[]>([
    {
      id: '1',
      key: 'sk-helstera-live-982f1a7b629e4d01c8a5',
      name: '',
      nameKey: 'production',
      created: '2026-07-25',
      lastUsed: '',
      lastUsedKey: 'justNow'
    },
    {
      id: '2',
      key: 'sk-helstera-test-412e8b031c90a12f5e3d',
      name: '',
      nameKey: 'staging',
      created: '2026-07-20',
      lastUsed: '',
      lastUsedKey: 'daysAgo'
    }
  ]);

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [newKeyName, setNewKeyName] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);

  // Playground State
  const [selectedModel, setSelectedModel] = useState(DEFAULT_MODEL_ID);
  const [promptMode, setPromptMode] = useState<'default' | 'presetA' | 'presetB' | 'custom'>('default');
  const [userPrompt, setUserPrompt] = useState(copy.defaultPrompt);
  const [isLoading, setIsLoading] = useState(false);
  const [responseOutput, setResponseOutput] = useState<string | null>(null);
  const [responseStats, setResponseStats] = useState<{ tokens: number; routeId: string } | null>(null);
  const [codeLanguage, setCodeLanguage] = useState<'curl' | 'python' | 'node'>('python');

  useEffect(() => {
    if (promptMode === 'default') setUserPrompt(copy.defaultPrompt);
    if (promptMode === 'presetA') setUserPrompt(copy.presetA);
    if (promptMode === 'presetB') setUserPrompt(copy.presetB);
  }, [copy.defaultPrompt, copy.presetA, copy.presetB, promptMode]);

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
      name: newKeyName || copy.newKeyName,
      created: new Date().toISOString().split('T')[0],
      lastUsed: '',
      lastUsedKey: 'never'
    };
    setKeys([newKey, ...keys]);
    setNewKeyName('');
    setShowCreateForm(false);
  };

  const handleDeleteKey = (id: string) => {
    setKeys(keys.filter(k => k.id !== id));
  };

  const selectPrompt = (mode: 'presetA' | 'presetB') => {
    setPromptMode(mode);
    setUserPrompt(mode === 'presetA' ? copy.presetA : copy.presetB);
  };

  const handlePromptChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPromptMode('custom');
    setUserPrompt(event.target.value);
  };

  const runPlaygroundRequest = () => {
    setIsLoading(true);
    setResponseOutput(null);
    setResponseStats(null);

    setTimeout(() => {
      let outputText = '';
      if (findModel(selectedModel).category === 'Reasoning') {
        outputText = `<think>\nAnalyzing the prompt for Python streaming implementation...\nConstructing OpenAI client configuration pointing to https://api.helstera.com/v1...\nApplying the selected account data policy.\n</think>\n\nfrom openai import OpenAI\n\nclient = OpenAI(\n    base_url="https://api.helstera.com/v1",\n    api_key="${keys[0]?.key || 'sk-helstera-xxx'}"\n)\n\nstream = client.chat.completions.create(\n    model="${selectedModel}",\n    messages=[{"role": "user", "content": "${userPrompt.replace(/"/g, '\\"')}"}],\n    stream=True\n)\n\nfor chunk in stream:\n    if chunk.choices[0].delta.content:\n        print(chunk.choices[0].delta.content, end="")`;
      } else {
        outputText = `HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  "id": "chatcmpl-helstera-${Math.floor(Math.random() * 899999 + 100000)}",\n  "object": "chat.completion",\n  "created": ${Math.floor(Date.now() / 1000)},\n  "model": "${selectedModel}",\n  "choices": [{\n    "index": 0,\n    "message": {\n      "role": "assistant",\n      "content": "Request processed through the selected route; retention and training behavior follow the account policy."\n    },\n    "finish_reason": "stop"\n  }],\n  "usage": {\n    "prompt_tokens": 42,\n    "completion_tokens": 128,\n    "total_tokens": 170\n  }\n}`;
      }

      outputText = outputText
        .replace('Analyzing the prompt for Python streaming implementation...', copy.reasoningAnalyzing)
        .replace('Constructing OpenAI client configuration pointing to https://api.helstera.com/v1...', copy.reasoningConstructing)
        .replace('Applying the selected account data policy.', copy.reasoningPolicy)
        .replace('Request processed through the selected route; retention and training behavior follow the account policy.', copy.responseContent);

      setResponseOutput(outputText);
      setIsLoading(false);
      setResponseStats({
        tokens: 170,
        routeId: selectedModel
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
              <h3 className="text-base font-serif-title font-semibold text-[#1C1C1C]">{copy.title}</h3>
              <p className="text-xs text-[#1C1C1C]/60 font-sans">{copy.description}</p>
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
            <span>{copy.tabs.keys}</span>
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
            <span>{copy.tabs.playground}</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#C73E28]/15 text-[#C73E28] font-bold">{copy.interactive}</span>
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
            <span>{copy.tabs.usage}</span>
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
                  <p className="font-semibold text-[#1C1C1C]">{copy.policyTitle}</p>
                  <p className="text-[#1C1C1C]/75 leading-relaxed font-sans">
                    {copy.policyDescription}
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-xs font-mono-tag font-bold uppercase tracking-wider text-[#1C1C1C]/60">{copy.activeKeys}</h4>
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="btn-editorial-primary px-3 py-1.5 text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{copy.createKey}</span>
                </button>
              </div>

              {/* New Key Form */}
              {showCreateForm && (
                <form onSubmit={handleCreateKey} className="p-4 bg-white rounded-xl border border-[#1C1C1C]/15 space-y-3 text-xs animate-fadeIn shadow-2xs">
                  <label className="block text-[#1C1C1C] font-mono-tag font-semibold">{copy.keyLabel}</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      required
                      placeholder={copy.keyPlaceholder}
                      value={newKeyName}
                      onChange={(e) => setNewKeyName(e.target.value)}
                      className="flex-1 px-3 py-2 bg-[#F8F7F4] border border-[#1C1C1C]/20 rounded-lg text-[#1C1C1C] focus:outline-none focus:border-[#C73E28]"
                    />
                    <button
                      type="submit"
                      className="btn-editorial-primary px-4 py-2 text-xs cursor-pointer"
                    >
                      {copy.generateKey}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowCreateForm(false)}
                      className="px-3 py-2 bg-white border border-[#1C1C1C]/15 rounded-lg text-[#1C1C1C] hover:bg-[#1C1C1C]/5 transition cursor-pointer"
                    >
                      {copy.cancel}
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
                      <span className="font-semibold text-[#1C1C1C]">
                        {k.nameKey ? copy.sampleKeyNames[k.nameKey] : k.name}
                      </span>
                      <div className="flex items-center gap-2 text-[10px] text-[#1C1C1C]/60 font-mono-tag">
                        <span>{copy.created} {k.created}</span>
                        <span>•</span>
                        <span>{copy.used} {k.lastUsedKey ? copy.sampleLastUsed[k.lastUsedKey] : k.lastUsed}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-[#F8F7F4] px-3 py-2 rounded-lg border border-[#1C1C1C]/15 font-mono-tag text-xs text-[#1C1C1C]">
                      <span className="flex-1 truncate">{k.key}</span>
                      <button
                        onClick={() => handleCopy(k.key, k.id)}
                        className="p-1 text-[#1C1C1C]/60 hover:text-[#C73E28] transition cursor-pointer"
                        title={copy.copyKey}
                      >
                        {copiedId === k.id ? <Check className="w-4 h-4 text-[#C73E28]" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => handleDeleteKey(k.id)}
                        className="p-1 text-[#1C1C1C]/40 hover:text-rose-600 transition cursor-pointer"
                        title={copy.revokeKey}
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
                    <Terminal className="w-4 h-4 text-[#C73E28]" /> {copy.fullDocs}
                  </span>
                  <button
                    onClick={() => { onClose(); onNavigateToDocs(); }}
                    className="text-[#C73E28] hover:underline flex items-center gap-1 text-xs cursor-pointer font-semibold"
                  >
                    <span>{copy.fullDocs}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
                <pre className="bg-[#1C1C1C] p-3.5 rounded-xl text-[11px] font-mono-tag text-[#F8F7F4] overflow-x-auto leading-relaxed shadow-inner">
{`curl https://api.helstera.com/v1/chat/completions \\
  -H "Authorization: Bearer ${keys[0]?.key || 'sk-helstera-xxx'}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${DEFAULT_MODEL_ID}",
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
                  <label className="text-xs font-mono-tag font-bold text-[#1C1C1C]/70 uppercase">{copy.targetLlm}</label>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value as any)}
                    className="w-full px-3 py-2 bg-[#F8F7F4] border border-[#1C1C1C]/20 rounded-lg text-xs font-mono-tag text-[#1C1C1C] focus:outline-none focus:border-[#C73E28]"
                  >
                    {MODELS_DATA.map((model) => (
                      <option key={model.id} value={model.id}>{model.name} ({t.content.models[model.id].category})</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-tag font-bold text-[#1C1C1C]/70 uppercase">{copy.promptPreset}</label>
                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      onClick={() => selectPrompt('presetA')}
                      className="px-2.5 py-1.5 bg-[#F8F7F4] hover:bg-[#1C1C1C]/5 border border-[#1C1C1C]/10 rounded-lg text-[11px] text-[#1C1C1C] truncate cursor-pointer flex-1"
                    >
                      {copy.promptPreset} A
                    </button>
                    <button
                      type="button"
                      onClick={() => selectPrompt('presetB')}
                      className="px-2.5 py-1.5 bg-[#F8F7F4] hover:bg-[#1C1C1C]/5 border border-[#1C1C1C]/10 rounded-lg text-[11px] text-[#1C1C1C] truncate cursor-pointer flex-1"
                    >
                      {copy.promptPreset} B
                    </button>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono-tag">
                  <span className="font-bold text-[#1C1C1C]">{copy.userPrompt}</span>
                  <span className="text-[#1C1C1C]/50">{userPrompt.length} {copy.characters}</span>
                </div>
                <textarea
                  rows={3}
                  value={userPrompt}
                  onChange={handlePromptChange}
                  className="w-full p-3 bg-white border border-[#1C1C1C]/20 rounded-xl text-xs text-[#1C1C1C] font-sans focus:outline-none focus:border-[#C73E28] transition"
                  placeholder={copy.promptPlaceholder}
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
                      <span>{copy.routingSelected}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{copy.runRequest}</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-xs font-mono-tag">
                  <span className="text-[#1C1C1C]/60">{copy.codeExport}</span>
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
                    <span>{copy.generatedSnippet} ({codeLanguage})</span>
                    <button
                      onClick={() => navigator.clipboard.writeText(getCodeSnippet())}
                      className="hover:text-[#1C1C1C] flex items-center gap-1 cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copy.copy}</span>
                    </button>
                  </div>
                  <pre className="p-3.5 bg-[#1C1C1C] text-[#F8F7F4] rounded-xl font-mono-tag text-[11px] leading-relaxed overflow-x-auto h-48 border border-[#1C1C1C]">
                    {getCodeSnippet()}
                  </pre>
                </div>

                {/* Output Box */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono-tag text-[#1C1C1C]/60">
                    <span>{copy.outputPayload}</span>
                    {responseStats && (
                      <span className="text-[#C73E28] font-bold">
                        {copy.selectedRoute}: {responseStats.routeId}
                      </span>
                    )}
                  </div>
                  <div className="p-3.5 bg-white border border-[#1C1C1C]/20 rounded-xl font-mono-tag text-[11px] leading-relaxed overflow-y-auto h-48 text-[#1C1C1C]">
                    {isLoading ? (
                      <div className="h-full flex items-center justify-center text-[#1C1C1C]/50 gap-2">
                        <RefreshCw className="w-4 h-4 animate-spin text-[#C73E28]" />
                        <span>{copy.awaitingResponse}</span>
                      </div>
                    ) : responseOutput ? (
                      <pre className="whitespace-pre-wrap">{responseOutput}</pre>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-[#1C1C1C]/40 text-center p-4 space-y-1">
                        <Terminal className="w-6 h-6 text-[#1C1C1C]/30" />
                        <p>{copy.clickRun}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Response Stats Ribbon */}
              {responseStats && (
                <div className="grid grid-cols-2 gap-3 bg-white p-3 rounded-xl border border-[#1C1C1C]/15 text-xs font-mono-tag">
                  <div>
                    <span className="text-[10px] text-[#1C1C1C]/50 uppercase">{copy.selectedRoute}</span>
                    <div className="font-bold text-[#1C1C1C]">{responseStats.routeId}</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#1C1C1C]/50 uppercase">{copy.totalTokens}</span>
                    <div className="font-bold text-[#1C1C1C]">{responseStats.tokens}</div>
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
                  <span className="text-[10px] font-mono-tag text-[#1C1C1C]/60 uppercase">{copy.accountBalance}</span>
                  <div className="font-serif-title text-2xl font-bold text-[#1C1C1C]">{copy.live}</div>
                  <div className="text-[10px] font-mono-tag text-emerald-600 font-semibold">{copy.checkTerms}</div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#1C1C1C]/15 space-y-1">
                  <span className="text-[10px] font-mono-tag text-[#1C1C1C]/60 uppercase">{copy.monthlyUsage}</span>
                  <div className="font-serif-title text-2xl font-bold text-[#1C1C1C]">{copy.telemetry}</div>
                  <div className="text-[10px] font-mono-tag text-[#1C1C1C]/60">{copy.dashboardSource}</div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#1C1C1C]/15 space-y-1">
                  <span className="text-[10px] font-mono-tag text-[#1C1C1C]/60 uppercase">{copy.routeHealth}</span>
                  <div className="font-serif-title text-2xl font-bold text-[#C73E28]">{copy.live}</div>
                  <div className="text-[10px] font-mono-tag text-[#C73E28] font-semibold">{copy.verifyRelease}</div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#1C1C1C]/15 space-y-3">
                <h4 className="font-serif-title text-base font-semibold text-[#1C1C1C]">{copy.quotaLimits}</h4>
                <div className="space-y-2 text-xs font-mono-tag">
                  <div className="flex justify-between py-1.5 border-b border-[#1C1C1C]/10">
                    <span className="text-[#1C1C1C]/70">{copy.requestLimits}</span>
                    <span className="font-bold text-[#1C1C1C]">{copy.accountConfigured}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#1C1C1C]/10">
                    <span className="text-[#1C1C1C]/70">{copy.tokenLimits}</span>
                    <span className="font-bold text-[#1C1C1C]">{copy.accountConfigured}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#1C1C1C]/70">{copy.dataPolicy}</span>
                    <span className="font-bold text-[#C73E28]">{copy.contractScoped}</span>
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

