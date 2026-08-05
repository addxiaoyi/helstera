import React, { useState } from 'react';
import { DEFAULT_MODEL_ID, findModel, MODELS_DATA } from '../data/modelsData';
import { KineticText } from '../components/KineticText';
import {
  Terminal,
  Code,
  Copy,
  Check,
  Play,
  Key,
  Sliders,
  Sparkles,
  AlertTriangle,
  Server,
  Zap,
  BookOpen,
  Send,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface DocsViewProps {
  openApiKeyModal: () => void;
}

export const DocsView: React.FC<DocsViewProps> = ({ openApiKeyModal }) => {
  const { t } = useLanguage();
  const docs = t.ui.docs;
  const [selectedLang, setSelectedLang] = useState<'python' | 'node' | 'curl' | 'go' | 'langchain'>('python');
  const [selectedModel, setSelectedModel] = useState(DEFAULT_MODEL_ID);
  const [copied, setCopied] = useState(false);

  // Playground state
  const [playgroundModel, setPlaygroundModel] = useState(DEFAULT_MODEL_ID);
  const [temperature, setTemperature] = useState(0.7);
  const [promptInput, setPromptInput] = useState('Write a concise Python function to calculate Fibonacci numbers with memoization.');
  const [isGenerating, setIsGenerating] = useState(false);
  const [playgroundResponse, setPlaygroundResponse] = useState<string | null>(null);
  const [tokenStats, setTokenStats] = useState<{ promptTokens: number; completionTokens: number; routeId: string } | null>(null);

  const getCodeSnippet = () => {
    if (selectedLang === 'python') {
      return `from openai import OpenAI

# Helstera OpenAI-Compatible Client Contract
client = OpenAI(
    base_url="https://api.helstera.com/v1",
    api_key="sk-helstera-your-api-key"
)

response = client.chat.completions.create(
    model="${selectedModel}",
    messages=[
        {"role": "system", "content": "You are a helpful software engineering assistant."},
        {"role": "user", "content": "Explain async/await in Python with an example."}
    ],
    temperature=0.7,
    max_tokens=1024
)

print(response.choices[0].message.content)`;
    }

    if (selectedLang === 'node') {
      return `import OpenAI from 'openai';

// Initialize OpenAI SDK directed to Helstera gateway
const openai = new OpenAI({
  baseURL: 'https://api.helstera.com/v1',
  apiKey: 'sk-helstera-your-api-key',
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: '${selectedModel}',
    messages: [{ role: 'user', content: 'Explain async/await in JavaScript' }],
    temperature: 0.7,
  });

  console.log(completion.choices[0].message.content);
}

main();`;
    }

    if (selectedLang === 'curl') {
      return `curl https://api.helstera.com/v1/chat/completions \\
  -H "Authorization: Bearer sk-helstera-your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${selectedModel}",
    "messages": [
      {"role": "user", "content": "Hello Helstera!"}
    ],
    "temperature": 0.7
  }'`;
    }

    if (selectedLang === 'go') {
      return `package main

import (
	"context"
	"fmt"
	"github.com/sashabaranov/go-openai"
)

func main() {
	config := openai.DefaultConfig("sk-helstera-your-api-key")
	config.BaseURL = "https://api.helstera.com/v1"

	client := openai.NewClientWithConfig(config)
	resp, err := client.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model: "${selectedModel}",
			Messages: []openai.ChatCompletionMessage{
				{Role: openai.ChatMessageRoleUser, Content: "Hello from Go!"},
			},
		},
	)
	if err != nil {
		fmt.Printf("Error: %v\\n", err)
		return
	}
	fmt.Println(resp.Choices[0].Message.Content)
}`;
    }

    return `from langchain_openai import ChatOpenAI

# LangChain Integration
llm = ChatOpenAI(
    openai_api_base="https://api.helstera.com/v1",
    openai_api_key="sk-helstera-your-api-key",
    model_name="${selectedModel}",
    temperature=0.7
)

response = llm.invoke("Draft a quick summary of cross-border AI compliance.")
print(response.content)`;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getCodeSnippet());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunPlayground = () => {
    setIsGenerating(true);
    setPlaygroundResponse(null);
    setTokenStats(null);

    setTimeout(() => {
      let output = '';
      if (findModel(playgroundModel).category === 'Reasoning') {
        output = `<think>
1. Analyzing the user request for memoized Fibonacci in Python.
2. Memoization avoids O(2^n) exponential recursion time complexity, reducing it to O(n).
3. Using functools.lru_cache or a simple dictionary decorator.
</think>

Here is the clean, memoized Fibonacci function in Python using \`functools.lru_cache\`:

\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci(n: int) -> int:
    if n < 0:
        raise ValueError("n must be a non-negative integer")
    if n in (0, 1):
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Example Usage:
print([fibonacci(i) for i in range(10)])
# Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
\`\`\``;
      } else {
        output = `Here is an efficient memoized Fibonacci function in Python using a hash dictionary:

\`\`\`python
def fibonacci_memo(n: int, memo: dict = None) -> int:
    if memo is None:
        memo = {}
    if n in memo:
        return memo[n]
    if n <= 0:
        return 0
    if n == 1:
        return 1
    
    memo[n] = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo)
    return memo[n]

# Test
print([fibonacci_memo(i) for i in range(10)])
# Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
\`\`\``;
      }

      setPlaygroundResponse(output);
      setTokenStats({
        promptTokens: 24,
        completionTokens: 142,
        routeId: playgroundModel
      });
      setIsGenerating(false);
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-[#F8F7F4] text-[#1C1C1C]">
      {/* Editorial Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <KineticText
          text={docs.heroTitle}
          type="words"
          direction="left"
          stagger={0.04}
          as="h1"
          className="font-serif-title text-4xl sm:text-6xl font-semibold text-[#1C1C1C] tracking-tight"
        />
        <KineticText
          text={docs.heroSubtitle}
          type="words"
          direction="right"
          stagger={0.02}
          delay={0.15}
          as="p"
          className="text-sm sm:text-base text-[#1C1C1C]/80 leading-relaxed font-sans"
        />
      </div>

      {/* Steps to Integrate */}
      <div className="py-8 border-t border-b border-[#1C1C1C]/15 space-y-6">
        <h2 className="font-serif-title text-2xl font-semibold text-[#1C1C1C]">{docs.migrationTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#1C1C1C]/15">
          {Object.values(docs.steps).map((step) => (
            <div key={step.label} className="py-4 sm:px-4 first:pl-0 space-y-2">
              <span className="font-mono-tag text-xs font-bold text-[#C73E28]">{step.label}</span>
              <h3 className="font-serif-title font-semibold text-[#1C1C1C]">{step.title}</h3>
              <p className="text-[#1C1C1C]/75 text-xs font-sans">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* QUICKSTART CODE GENERATOR */}
      <div className="bg-white border border-[#1C1C1C]/20 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1C1C1C]/10 pb-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#C73E28]" />
            <h2 className="font-serif-title text-xl font-semibold text-[#1C1C1C]">{docs.quickstartTitle}</h2>
          </div>

          <button
            onClick={openApiKeyModal}
            className="btn-editorial-primary text-xs flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Key className="w-3.5 h-3.5" />
            <span>{docs.getLiveApiKey}</span>
          </button>
        </div>

        {/* Language & Model Selector Pills */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono-tag text-xs">
          <div className="flex flex-wrap items-center gap-1.5 bg-[#F8F7F4] p-1 rounded-full border border-[#1C1C1C]/10">
            {(['python', 'node', 'curl', 'go', 'langchain'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLang(lang)}
                className={`px-3 py-1 rounded-full transition cursor-pointer capitalize ${
                  selectedLang === lang
                    ? 'bg-[#1C1C1C] text-[#F8F7F4] font-semibold'
                    : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
                }`}
              >
                {lang === 'node' ? 'Node.js' : lang === 'curl' ? 'cURL' : lang}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#1C1C1C]/60 text-xs">{docs.targetModel}</span>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="bg-[#F8F7F4] border border-[#1C1C1C]/15 rounded-lg px-3 py-1.5 text-xs text-[#1C1C1C] font-mono-tag focus:outline-none cursor-pointer"
            >
              {MODELS_DATA.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name} ({m.provider})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Code View Frame */}
        <div className="relative p-5 bg-[#F8F7F4] rounded-xl border border-[#1C1C1C]/15 font-mono-tag text-xs leading-relaxed overflow-x-auto text-[#1C1C1C]">
          <button
            onClick={handleCopyCode}
            className="absolute top-4 right-4 p-2 rounded-md bg-white border border-[#1C1C1C]/15 hover:bg-[#1C1C1C]/5 text-[#1C1C1C] transition cursor-pointer"
            title={docs.copyCode}
          >
            {copied ? <Check className="w-4 h-4 text-[#C73E28]" /> : <Copy className="w-4 h-4 text-[#1C1C1C]/60" />}
          </button>

          <pre className="whitespace-pre">{getCodeSnippet()}</pre>
        </div>
      </div>

      {/* LIVE INTERACTIVE PLAYGROUND */}
      <div className="py-8 border-t border-b border-[#1C1C1C]/15 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-mono-tag text-xs text-[#C73E28] font-bold uppercase tracking-wider">{docs.interactiveTag}</span>
            <h2 className="font-serif-title text-2xl font-semibold text-[#1C1C1C]">{docs.playgroundTitle}</h2>
          </div>

          <div className="flex items-center gap-2 font-mono-tag text-xs text-[#C73E28]">
            <Sparkles className="w-4 h-4" />
            <span>{docs.simulatedResponse}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls & Input */}
          <div className="lg:col-span-5 bg-white border border-[#1C1C1C]/20 rounded-2xl p-6 space-y-4 font-sans text-xs">
            <div>
              <label className="block text-[#1C1C1C] font-medium mb-1 font-serif-title">{docs.selectModelRoute}</label>
              <select
                value={playgroundModel}
                onChange={(e) => setPlaygroundModel(e.target.value)}
                className="w-full bg-[#F8F7F4] border border-[#1C1C1C]/15 rounded-lg px-3 py-2 text-xs font-mono-tag text-[#1C1C1C] focus:outline-none cursor-pointer"
              >
                {MODELS_DATA.map((model) => (
                  <option key={model.id} value={model.id}>{model.name} ({t.content.models[model.id].category})</option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1 font-mono-tag text-[#1C1C1C]/70">
                <span>{docs.temperature}</span>
                <span>{temperature}</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-full accent-[#C73E28] cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-[#1C1C1C] font-medium mb-1 font-serif-title">{docs.promptMessage}</label>
              <textarea
                rows={4}
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                className="w-full p-3 bg-[#F8F7F4] border border-[#1C1C1C]/15 rounded-xl text-xs font-mono-tag text-[#1C1C1C] focus:outline-none resize-none"
              />
            </div>

            <button
              onClick={handleRunPlayground}
              disabled={isGenerating}
              className="w-full btn-editorial-primary text-xs py-3 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Zap className="w-4 h-4 animate-spin text-white" />
                  <span>{docs.processingQuery}</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>{docs.executeRequest}</span>
                </>
              )}
            </button>
          </div>

          {/* Response Frame */}
          <div className="lg:col-span-7 bg-white border border-[#1C1C1C]/20 rounded-2xl p-6 space-y-4 font-mono-tag text-xs min-h-[320px] flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#1C1C1C]/10 text-[11px] text-[#1C1C1C]/60">
                <span>{docs.responseOutput}</span>
                {tokenStats && (
                  <div className="flex items-center gap-3 text-[#C73E28] font-semibold">
                    <span>{tokenStats.routeId}</span>
                    <span>•</span>
                    <span>{tokenStats.promptTokens + tokenStats.completionTokens} {docs.tokenUnit}</span>
                  </div>
                )}
              </div>

              {isGenerating ? (
                <div className="py-12 text-center text-[#1C1C1C]/40 animate-pulse space-y-2">
                  <Cpu className="w-6 h-6 mx-auto text-[#C73E28] animate-spin" />
                  <p>{docs.routing}</p>
                </div>
              ) : playgroundResponse ? (
                <div className="p-4 bg-[#F8F7F4] rounded-xl border border-[#1C1C1C]/10 leading-relaxed font-mono-tag text-xs text-[#1C1C1C] overflow-x-auto whitespace-pre-wrap">
                  {playgroundResponse}
                </div>
              ) : (
                <div className="py-16 text-center text-[#1C1C1C]/40 space-y-1 font-sans text-xs">
                  <Terminal className="w-8 h-8 mx-auto text-[#1C1C1C]/20" />
                  <p>{docs.clickExecute}</p>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-[#1C1C1C]/10 text-[11px] text-[#1C1C1C]/60 flex items-center justify-between font-mono-tag">
              <span>{docs.simulationOnly}</span>
              <span className="text-[#C73E28]">{docs.compatibleRoute}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
