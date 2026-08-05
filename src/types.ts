export type PageView = 'home' | 'pricing' | 'compliance' | 'docs' | 'about' | 'blog' | 'contact';

export type ModelCategory = 'General' | 'Reasoning' | 'Multimodal' | 'Long Context';

export interface ModelInfo {
  id: string;
  name: string;
  provider: string;
  badge?: string;
  description: string;
  category: ModelCategory;
  rateLabel: string;
  contextWindow: string;
  healthLabel: string;
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
  id: string;
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
  id: string;
  title: string;
  category: string;
  description: string;
}
