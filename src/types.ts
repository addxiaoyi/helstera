export type PageView = 'home' | 'pricing' | 'compliance' | 'docs' | 'about' | 'blog' | 'contact';

export interface ModelInfo {
  id: string;
  name: string;
  provider: string;
  badge?: string;
  description: string;
  inputPrice: number; // USD per 1M tokens
  outputPrice: number; // USD per 1M tokens
  openAiEquiv: string; // e.g. "GPT-4o"
  openAiInputPrice: number;
  openAiOutputPrice: number;
  contextWindow: string; // e.g. "64K" or "128K"
  latencyMs: number;
  score: number; // benchmark score
  recommendedFor: string[];
  popular?: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period?: string;
  minDeposit?: string;
  features: string[];
  highlight?: boolean;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'compliance' | 'billing' | 'technical' | 'models' | 'security';
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content?: string;
}

export interface ComplianceDoc {
  title: string;
  category: string;
  description: string;
  fileSize: string;
  fileType: string;
  downloadUrl?: string;
}
