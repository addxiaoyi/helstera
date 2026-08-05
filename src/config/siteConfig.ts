import { ModelInfo, PricingTier, FAQItem, BlogPost, ComplianceDoc } from '../types';

/**
 * ====================================================================
 * HELSTERA CENTRAL SITE CONFIGURATION & CONTENT DATA
 * 全站统一文案与配置中心
 * 
 * 修改本文件即可直接更新全站的品牌信息、Hero标题、核心功能文案、
 * 模型路由、运营条款、合规条文、常见问题及购买流程。
 * ====================================================================
 */

export const SITE_CONFIG = {
  // 1. 品牌与基础元数据 (Brand Metadata)
  brand: {
    name: 'Helstera',
    title: 'Helstera | Cross-Border AI Compute Gateway',
    description: 'A governed, OpenAI-compatible gateway for current Chinese frontier models, with account-level routing, clear data controls, and enterprise support.',
    apiBaseUrl: 'https://api.helstera.com/v1',
    contactEmail: 'enterprise@helstera.com',
    supportPhone: '+1 (800) 582-8920',
    address: 'Building 3, Digital Intelligence Hub, Shantou Overseas Chinese Pilot Zone, Guangdong, China',
    copyright: '© 2026 Helstera Compute Networks Ltd. All rights reserved.',
  },

  // 2. 首页 Hero 区块文案 (Hero Section Copy)
  hero: {
    eyebrowTag: 'CURRENT MODEL ROUTES • OPENAI-COMPATIBLE GATEWAY [01]',
    mainTitle: 'Current frontier models. One governed route.',
    highlightText: 'One governed route.',
    subtitle: 'Build on current DeepSeek, Qwen, Kimi, and GLM routes through one OpenAI-compatible gateway. Confirm live availability and rate terms from your account.',
    primaryCtaText: 'Request API Access',
    secondaryCtaText: 'Review Enterprise Controls',
    stats: [
      { label: 'CURRENT MODEL ROUTES', value: 6, suffix: '' },
      { label: 'RATE CARD', value: 'LIVE', suffix: '' },
      { label: 'API CONTRACT', value: 'OPENAI', suffix: '' },
    ],
  },

  // 3. 核心优势与 5 大功能点 (Core Features Copy)
  bentoFeatures: {
    sectionTag: 'MODEL ROUTING & DATA CONTROLS [02]',
    sectionTitle: 'Current routes, clear operating terms',
    sectionSubtitle: 'Use one stable API contract for model access, account-level routing, and data handling that your team can review.',
    features: [
      {
        id: 'unit-economics',
        tag: '01 / Rate clarity',
        title: 'Use the current rate card',
        description: 'Model pricing and availability change. Helstera keeps the route catalog separate from static marketing claims so teams can confirm terms before production traffic.',
      },
      {
        id: 'sdk-compat',
        tag: '02 / SDK Compatibility',
        title: 'Keep your existing API contract',
        description: 'Point the base URL to Helstera in Python, Node.js, LangChain, or your own client and select a current model route by ID.',
        codeSnippet: `import OpenAI from "openai";
const client = new OpenAI({
  baseURL: "https://api.helstera.com/v1",
  apiKey: process.env.HELSTERA_API_KEY
});`,
      },
      {
        id: 'legal-dpa',
        tag: '03 / Procurement',
        title: 'Contract-ready governance',
        description: 'Review data-processing terms, service scope, and account obligations with your procurement and legal teams before rollout.',
        ctaText: 'Request Contract Pack',
      },
      {
        id: 'account-data-policy',
        tag: '04 / Data Controls',
        title: 'Retention terms you can review',
        description: 'Define the retention and training boundaries for your account, then keep the approved policy attached to the production contract.',
        badge: 'Policy-first routing',
      },
      {
        id: 'route-health',
        tag: '05 / Observability',
        title: 'Choose from live route signals',
        description: 'Use account telemetry, status information, and route health when selecting a model, keeping current evidence next to the route decision.',
        ctaText: 'Open Developer Console',
      },
    ],
  },

  // 4. 滚动叙事 4 大章节 (Keynote Scroll Story)
  scrollStory: {
    sectionTitle: 'One route. A model catalog that keeps moving.',
    sectionSubtitle: 'Explore the four operating decisions behind a current, governed AI gateway.',
    acts: [
      {
        id: 0,
        actNumber: 'ACT I',
        badge: 'Governance',
        title: 'Make the route reviewable',
        subtitle: 'Keep model access, data handling, and service obligations visible to the people who approve production systems.',
        description: 'Helstera packages the gateway contract, route scope, and data-processing terms so engineering and procurement can evaluate the same operating picture.',
        stats: [
          { value: 'DPA', label: 'Data terms' },
          { value: 'SLA', label: 'Service terms' }
        ]
      },
      {
        id: 1,
        actNumber: 'ACT II',
        badge: 'Current model choice',
        title: 'Choose by capability, not yesterday’s leaderboard',
        subtitle: 'Route current general, reasoning, multimodal, and long-context models through the same API contract.',
        description: 'The catalog highlights what each route is for and points teams to live rate and availability information when the request is made.',
        stats: [
          { value: 'LIVE', label: 'Rate card' },
          { value: '6', label: 'Current routes' }
        ]
      },
      {
        id: 2,
        actNumber: 'ACT III',
        badge: 'Data controls',
        title: 'Put retention terms next to the route',
        subtitle: 'Make data handling part of the integration decision, not a footer added after launch.',
        description: 'Document the approved retention, training, and access boundaries for each production account and review them with your compliance owners.',
        stats: [
          { value: 'POLICY', label: 'Account data terms' },
          { value: 'DOCS', label: 'Evidence surface' }
        ]
      },
      {
        id: 3,
        actNumber: 'ACT IV',
        badge: 'Integration',
        title: 'Migrate without a provider rewrite',
        subtitle: 'Keep your request shape while changing the gateway base URL and model ID.',
        description: 'Existing OpenAI-compatible clients can keep their message and response handling while teams validate the current route contract in a controlled environment.',
        stats: [
          { value: 'ONE', label: 'Base URL' },
          { value: 'API', label: 'Compatibility layer' }
        ]
      }
    ]
  },

  // 5. 计算机模型列表 (AI Models Data)
  models: [
    {
      id: 'deepseek-v4-pro',
      name: 'DeepSeek V4 Pro',
      provider: 'DeepSeek',
      badge: 'Frontier reasoning',
      description: 'A current reasoning route for complex analysis, coding, and multi-step work. Confirm live availability and account terms before production use.',
      category: 'Reasoning',
      rateLabel: 'Live rate card',
      contextWindow: 'See provider model card',
      healthLabel: 'Live route telemetry',
      recommendedFor: ['Complex reasoning', 'Code generation', 'Planning', 'Technical analysis'],
      popular: true,
    },
    {
      id: 'deepseek-v4-flash',
      name: 'DeepSeek V4 Flash',
      provider: 'DeepSeek',
      badge: 'Fast general',
      description: 'A current general-purpose route for assistants, extraction, and high-volume workflows that need a responsive default.',
      category: 'General',
      rateLabel: 'Live rate card',
      contextWindow: 'See provider model card',
      healthLabel: 'Live route telemetry',
      recommendedFor: ['Assistants', 'Extraction', 'High-volume workflows', 'Multilingual tasks'],
      popular: true,
    },
    {
      id: 'qwen3.7-max',
      name: 'Qwen3.7-Max',
      provider: 'Alibaba Cloud',
      badge: 'Flagship general',
      description: 'A current flagship general route for multilingual instruction following, tool use, and structured enterprise output.',
      category: 'General',
      rateLabel: 'Live rate card',
      contextWindow: 'See provider model card',
      healthLabel: 'Live route telemetry',
      recommendedFor: ['Enterprise workflows', 'Tool use', 'Structured output', 'Customer operations'],
      popular: true,
    },
    {
      id: 'qwen3.5-omni-plus',
      name: 'Qwen3.5-Omni-Plus',
      provider: 'Alibaba Cloud',
      badge: 'Multimodal',
      description: 'A multimodal route for text, image, and audio workflows where one context needs multiple input types.',
      category: 'Multimodal',
      rateLabel: 'Live rate card',
      contextWindow: 'See provider model card',
      healthLabel: 'Live route telemetry',
      recommendedFor: ['Voice workflows', 'Image understanding', 'Multimodal agents', 'Content operations'],
      popular: false,
    },
    {
      id: 'kimi-k3',
      name: 'Kimi K3',
      provider: 'Moonshot AI',
      badge: 'Long context',
      description: 'A current long-context route for large documents, research synthesis, and knowledge-heavy agent workflows.',
      category: 'Long Context',
      rateLabel: 'Live rate card',
      contextWindow: 'See provider model card',
      healthLabel: 'Live route telemetry',
      recommendedFor: ['Large documents', 'Research synthesis', 'Knowledge agents', 'Long-form analysis'],
      popular: false,
    },
    {
      id: 'glm-5.2',
      name: 'GLM-5.2',
      provider: 'Zhipu AI',
      badge: 'Reasoning and bilingual',
      description: 'A current route for planning, analysis, bilingual work, and tool-enabled enterprise applications.',
      category: 'Reasoning',
      rateLabel: 'Live rate card',
      contextWindow: 'See provider model card',
      healthLabel: 'Live route telemetry',
      recommendedFor: ['Planning', 'Bilingual analysis', 'Tool-enabled apps', 'Report generation'],
      popular: false,
    },
  ] as ModelInfo[],

  // 6. 价格套餐 (Pricing Tiers)
  pricingTiers: [
    {
      id: 'developer',
      name: 'Developer Plan',
      tagline: 'A clean path for prototyping, evaluation, and early production traffic.',
      price: 'Usage-based',
      minDeposit: 'Start with an account balance',
      ctaText: 'Get Started with Developer Plan',
      features: [
        'For individual builders and small teams',
        'Access the current supported route catalog',
        'OpenAI-compatible request format',
        'Account-level usage metering',
        'Self-serve API key management',
        'Rate terms shown before production use'
      ]
    },
    {
      id: 'pro',
      name: 'Pro Plan',
      tagline: 'More routing control, operational support, and room for growing production workloads.',
      price: 'Usage-based',
      period: 'with reserved capacity options',
      highlight: true,
      ctaText: 'Get Started with Pro Plan',
      features: [
        'For SaaS teams moving into production',
        'Everything in Developer Plan included',
        'Higher limits and priority routing options',
        'Operational support for rollout',
        'Commercial contract and DPA review',
        'Route-specific service terms'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      tagline: 'Custom model routing, dedicated account management, formal contracts, DPA, and negotiated service terms.',
      price: 'Custom',
      period: 'contract',
      ctaText: 'Talk to Sales for Enterprise',
      features: [
        'For teams with compliance and volume requirements',
        'Custom model routing and private deployment review',
        'Dedicated account and implementation support',
        'Commercial contract and custom DPA review',
        'Negotiated service, support, and data terms',
        'Invoicing and custom payment workflows'
      ]
    }
  ] as PricingTier[],

  // 7. 合规与法律文件 (Compliance Docs)
  complianceDocs: [
    {
      id: 'data-processing-scope',
      title: 'Account Data-Processing Scope Pack',
      category: 'Governance Pack',
      description: 'Reviewable documents for processing scope, access boundaries, retention choices, and account obligations.',
    },
    {
      id: 'dpa-template',
      title: 'Standard International Data Processing Agreement (DPA)',
      category: 'Legal Contract',
      description: 'Contract template covering account data-processing scope, access responsibilities, and applicable privacy obligations.',
    },
    {
      id: 'service-schedule',
      title: 'Service Availability & Support Schedule',
      category: 'Service Level Agreement',
      description: 'Contract-specific availability, support, escalation, and service-credit terms for the selected route and account.',
    },
    {
      id: 'security-observability',
      title: 'Helstera Security and Observability Notes',
      category: 'Technical Notes',
      description: 'Review route controls, TLS 1.3 transit encryption, telemetry fields, and evidence available to the account.',
    }
  ] as ComplianceDoc[],

  // 8. 常见问题 (FAQs)
  faqs: [
    {
      id: 'enterprise-compliance',
      category: 'compliance',
      question: 'What does enterprise compliance review cover?',
      answer: 'Helstera provides a contract and documentation path for enterprise review, including data-processing terms, service scope, and account-specific obligations. Ask our compliance team for the current package for your route and region.'
    },
    {
      id: 'privacy-handling',
      category: 'security',
      question: 'How is data privacy handled? Is prompt data retained or used for training?',
      answer: 'Data handling is defined by the account policy and contract. Confirm retention, logging, training, and access scope with compliance before rollout.'
    },
    {
      id: 'formal-contract',
      category: 'compliance',
      question: 'Can you provide a formal commercial contract and DPA?',
      answer: 'Yes. We can provide commercial contracts, Data Processing Agreements, and service schedules for procurement review. The final terms depend on the selected route, region, and account requirements.'
    },
    {
      id: 'network-path',
      category: 'technical',
      question: 'Does the data pass through China’s public internet?',
      answer: 'The route depends on your account and destination. Helstera documents the network path, encryption boundary, and processing location for the selected service so your team can review the actual deployment scope.'
    },
    {
      id: 'supported-models',
      category: 'models',
      question: 'Which flagship models are supported through the unified gateway?',
      answer: 'The current catalog includes DeepSeek V4 Pro, DeepSeek V4 Flash, Qwen3.7-Max, Qwen3.5-Omni-Plus, Kimi K3, and GLM-5.2. Availability and rate terms are account-specific, so use the live route card before sending production traffic.'
    },
    {
      id: 'token-billing',
      category: 'billing',
      question: 'How does token billing work and what payment options are supported?',
      answer: 'Usage is metered against the current account rate card. Payment and invoicing options are agreed during onboarding and can include card, wire, or enterprise purchase-order workflows where available.'
    },
    {
      id: 'sdk-migration',
      category: 'technical',
      question: 'How fast is migration if we currently use the OpenAI SDK?',
      answer: 'Start with a controlled migration: change `base_url="https://api.helstera.com/v1"`, update the key, and select one current model ID. Keep your existing request shape, then validate tool calls, streaming, and structured output before expanding traffic.'
    }
  ] as FAQItem[],

  // 9. 博客与技术文章 (Blog Posts)
  blogs: [
    {
      id: 'deepseek-v4-routing-notes',
      title: 'DeepSeek V4 Pro and Flash: Choosing a Current Production Route',
      summary: 'A practical guide to selecting a reasoning or general-purpose route by workload, operational constraints, and the current account rate card.',
      date: '2026-07-20',
      readTime: '6 min read',
      category: 'Route Intelligence',
      author: {
        name: 'Alex Chen',
        role: 'Head of Infrastructure, Helstera',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
      }
    },
    {
      id: 'cross-border-ai-data-controls',
      title: 'Cross-Border AI Data Controls: From Route Review to Contract',
      summary: 'How engineering, security, and procurement teams document processing scope, retention choices, network boundaries, and service terms before launch.',
      date: '2026-07-15',
      readTime: '8 min read',
      category: 'Legal & Compliance',
      author: {
        name: 'Sarah Lin, Esq.',
        role: 'Chief Legal Counsel',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
      }
    },
    {
      id: 'openai-compatible-route-migration',
      title: 'Migration Guide: Add a Current Model Route Without Rewriting Your Client',
      summary: 'A practical walkthrough for changing the base URL, selecting a current model ID, and validating responses in Python, Node.js, and LangChain.',
      date: '2026-07-08',
      readTime: '4 min read',
      category: 'Developer Guide',
      author: {
        name: 'David Vance',
        role: 'Lead Developer Relations',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
      }
    }
  ] as BlogPost[],

  // 10. 购买与注册流程 4 步 (How To Buy Steps)
  onboardingSteps: [
    {
      number: '01',
      title: 'Create Free Account',
      tagline: 'Start with a controlled test account',
      description: 'Register with email or GitHub OAuth, then create a scoped key for route evaluation before production onboarding.',
    },
    {
      number: '02',
      title: 'Generate API Key',
      tagline: 'Create a scoped credential',
      description: 'Create production or test API keys with custom rate limits and usage alerts directly in the dashboard.',
    },
    {
      number: '03',
      title: 'Update 1 Line in SDK',
      tagline: 'Keep the request shape',
      description: 'Point your existing OpenAI Python or Node client to https://api.helstera.com/v1, enter your Helstera key, and choose a current model ID.',
    },
    {
      number: '04',
      title: 'Confirm Rate Card & Terms',
      tagline: 'Production readiness review',
      description: 'Confirm the current rate card, route availability, data policy, and commercial terms with the people responsible for launch approval.',
    },
  ],
};
