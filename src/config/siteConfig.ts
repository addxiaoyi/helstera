import { ModelInfo, PricingTier, FAQItem, BlogPost, ComplianceDoc } from '../types';

/**
 * ====================================================================
 * HELSTERA CENTRAL SITE CONFIGURATION & CONTENT DATA
 * 全站统一文案与配置中心
 * 
 * 修改本文件即可直接更新全站的品牌信息、Hero标题、核心功能文案、
 * 模型价格、对比数据、合规条文、常见问题及购买流程。
 * ====================================================================
 */

export const SITE_CONFIG = {
  // 1. 品牌与基础元数据 (Brand Metadata)
  brand: {
    name: 'Helstera',
    title: 'Helstera | Cross-Border AI Compute Gateway',
    description: 'Regulated, high-performance, cross-border AI compute gateway bridging global developers to leading Chinese LLMs at 80% cost savings.',
    apiBaseUrl: 'https://api.helstera.com/v1',
    pilotZoneName: 'Shantou Overseas Chinese Pilot Zone (汕头华侨试验区来数加工基地)',
    contactEmail: 'enterprise@helstera.com',
    supportPhone: '+1 (800) 582-8920',
    address: 'Building 3, Digital Intelligence Hub, Shantou Overseas Chinese Pilot Zone, Guangdong, China',
    copyright: '© 2026 Helstera Compute Networks Ltd. All rights reserved.',
  },

  // 2. 首页 Hero 区块文案 (Hero Section Copy)
  hero: {
    eyebrowTag: 'PILOT ZONE APPROVED • CROSS-BORDER COMPUTE GATEWAY [01]',
    mainTitle: 'Enterprise cloud compute. Global reach.',
    highlightText: 'Global reach.',
    subtitle: 'Managed enterprise cloud compute from Shantou Pilot Zone hubs (Local edge compute nodes in Phase II roadmap). Save 80% with 99.9% uptime SLA.',
    primaryCtaText: 'Get Started with $5 Credit',
    secondaryCtaText: 'View Enterprise Compliance',
    stats: [
      { label: 'COST SAVINGS VS OPENAI', value: 80, suffix: '%' },
      { label: 'LATENCY SLA GUARANTEE', value: 180, prefix: '<', suffix: 'ms' },
      { label: 'ENTERPRISE UPTIME SLA', value: 99.9, suffix: '%', decimals: 1 },
    ],
  },

  // 3. 核心优势与 5 大功能点 (Core Features Copy)
  bentoFeatures: {
    sectionTag: 'REGULATED INFRASTRUCTURE ARCHITECTURE [02]',
    sectionTitle: 'Engineered for Enterprise Compliance & Speed',
    sectionSubtitle: 'Direct optical connectivity and pilot zone regulatory protections yield unmatched unit economics and legal safety.',
    features: [
      {
        id: 'unit-economics',
        tag: '01 / Unit Economics',
        title: 'Up to 80% Cost Advantage vs OpenAI',
        description: "By aggregating compute directly within Shantou Pilot Zone's state-of-the-art data center hubs, we pass favorable electricity, bandwidth, and open-weights MoE model efficiencies straight to developers.",
      },
      {
        id: 'sdk-compat',
        tag: '02 / SDK Compatibility',
        title: '1-Line OpenAI Drop-in',
        description: 'Zero code rewrites. Point baseURL to Helstera in Python, Node.js, LangChain, or AutoGPT.',
        codeSnippet: `import OpenAI from "openai";
const client = new OpenAI({
  baseURL: "https://api.helstera.com/v1",
  apiKey: process.env.HELSTERA_API_KEY
});`,
      },
      {
        id: 'legal-dpa',
        tag: '03 / Legal Compliance',
        title: 'Shantou Pilot Zone DPA',
        description: 'Authorized legal framework under Shantou Overseas Chinese Pilot Zone "Data Processing Zone" policy, backed by formal B2B contracts.',
        ctaText: 'Request DPA Contract',
      },
      {
        id: 'zdr-privacy',
        tag: '04 / Data Privacy',
        title: 'Zero Data Retention (ZDR)',
        description: 'Prompts are processed strictly in volatile RAM and purged instantly upon response completion. Zero disk logging, zero model training.',
        badge: 'RAM-Only Volatile Execution',
      },
      {
        id: 'marine-sla',
        tag: '05 / Reliability',
        title: 'Sub-180ms SLA & Marine Optic',
        description: 'Dedicated marine optical cables bypass public Internet hops with guaranteed 99.9% uptime SLA for mission-critical enterprise apps.',
        ctaText: 'Get API Key ($5 Trial)',
      },
    ],
  },

  // 4. 滚动叙事 4 大章节 (Keynote Scroll Story)
  scrollStory: {
    sectionTitle: 'One Gateway. Infinite Compute Potential.',
    sectionSubtitle: 'Scroll or click through the 4 acts of Helstera’s cross-border infrastructure.',
    acts: [
      {
        id: 0,
        actNumber: 'ACT I',
        badge: 'Regulatory Framework',
        title: 'Shantou Pilot Zone Legal Framework',
        subtitle: 'Government-sanctioned cross-border "Data Processing" (来数加工) pilot zone.',
        description: 'Under Guangdong provincial policy, customer prompt data enters dedicated offshore compute nodes without legal ambiguity. Fully compliant with international data export laws.',
        stats: [
          { value: '100%', label: 'Compliance Grade' },
          { value: 'DPA & SLA', label: 'B2B Legal Papers' }
        ]
      },
      {
        id: 1,
        actNumber: 'ACT II',
        badge: 'Cost Efficiency',
        title: '80% Token Price Reduction',
        subtitle: 'Run DeepSeek-V3 & R1 reasoning models at fraction of Western API costs.',
        description: 'Leveraging green energy grid advantages and native open-weights optimizations in Shantou hubs to deliver top-tier inference at $0.14 - $0.55 per million input tokens.',
        stats: [
          { value: '$0.27', label: 'DeepSeek-V3 / 1M' },
          { value: '80%', label: 'Average Savings' }
        ]
      },
      {
        id: 2,
        actNumber: 'ACT III',
        badge: 'RAM Volatile Security',
        title: 'Zero-Retention RAM Processing',
        subtitle: 'Ephemeral volatile execution with zero disk logging or LLM retraining.',
        description: 'Requests are buffered in encrypted volatile memory and erased the exact millisecond the last token streams to your app client.',
        stats: [
          { value: '0 Bytes', label: 'Disk Persistence' },
          { value: '100%', label: 'Data Privacy' }
        ]
      },
      {
        id: 3,
        actNumber: 'ACT IV',
        badge: 'Instant Migration',
        title: 'OpenAI SDK 1-Line Drop-in',
        subtitle: 'No complex migration engineering or prompt modifications required.',
        description: 'Works out-of-the-box with existing OpenAI client libraries across Python, TypeScript, Go, LangChain, and LlamaIndex.',
        stats: [
          { value: '< 1 Min', label: 'Setup Time' },
          { value: '100%', label: 'API Compatibility' }
        ]
      }
    ]
  },

  // 5. 计算机模型列表 (AI Models Data)
  models: [
    {
      id: 'deepseek-v3',
      name: 'DeepSeek-V3',
      provider: 'DeepSeek',
      badge: 'Most Popular',
      description: '671B parameter Mixture-of-Experts model offering SOTA performance on code, math, and general reasoning at ultra-low cost.',
      inputPrice: 0.14,
      outputPrice: 0.28,
      openAiEquiv: 'GPT-4o',
      openAiInputPrice: 2.50,
      openAiOutputPrice: 10.00,
      contextWindow: '64K',
      latencyMs: 380,
      score: 92.8,
      recommendedFor: ['General Chat', 'Code Generation', 'Instruction Following', 'Multilingual Translation'],
      popular: true,
    },
    {
      id: 'deepseek-r1',
      name: 'DeepSeek-R1',
      provider: 'DeepSeek',
      badge: 'SOTA Reasoning',
      description: 'First-class open reasoning model rivaling OpenAI o1 in complex math, competitive coding, and multi-step logic chains.',
      inputPrice: 0.55,
      outputPrice: 2.19,
      openAiEquiv: 'OpenAI o1',
      openAiInputPrice: 15.00,
      openAiOutputPrice: 60.00,
      contextWindow: '128K',
      latencyMs: 720,
      score: 96.4,
      recommendedFor: ['Complex Reasoning', 'Scientific Analysis', 'Reflective Math Proofs', 'Algorithm Design'],
      popular: true,
    },
    {
      id: 'qwen-max',
      name: 'Qwen-Max 2.5',
      provider: 'Alibaba Cloud',
      badge: 'Enterprise Grade',
      description: 'Alibaba flagship model with top-tier multilingual understanding, tool call reliability, and structured JSON output accuracy.',
      inputPrice: 0.28,
      outputPrice: 0.84,
      openAiEquiv: 'GPT-4o',
      openAiInputPrice: 2.50,
      openAiOutputPrice: 10.00,
      contextWindow: '128K',
      latencyMs: 410,
      score: 91.5,
      recommendedFor: ['Enterprise Workflows', 'Agent Tool Calling', 'Multilingual Customer Service', 'Document QA'],
      popular: true,
    },
    {
      id: 'qwen-coder-32b',
      name: 'Qwen-2.5-Coder',
      provider: 'Alibaba Cloud',
      badge: 'Code Specialist',
      description: 'Specialized 32B coding model outperforming many larger models on HumanEval, MBPP, and real-world repo refactoring.',
      inputPrice: 0.12,
      outputPrice: 0.36,
      openAiEquiv: 'GPT-4o-mini',
      openAiInputPrice: 0.15,
      openAiOutputPrice: 0.60,
      contextWindow: '128K',
      latencyMs: 290,
      score: 88.9,
      recommendedFor: ['IDE Code Completion', 'Automated PR Code Review', 'Bug Fixing', 'SQL Generation'],
      popular: false,
    },
    {
      id: 'glm-4-plus',
      name: 'GLM-4 Plus',
      provider: 'Zhipu AI',
      badge: 'Balanced Performance',
      description: 'High-intelligence general model with exceptional long-context comprehension and nuanced Chinese/English reasoning.',
      inputPrice: 0.70,
      outputPrice: 0.70,
      openAiEquiv: 'GPT-4o',
      openAiInputPrice: 2.50,
      openAiOutputPrice: 10.00,
      contextWindow: '128K',
      latencyMs: 450,
      score: 90.2,
      recommendedFor: ['Long-document Analysis', 'Creative Copywriting', 'Report Generation'],
      popular: false,
    },
    {
      id: 'minimax-abab6.5s',
      name: 'MiniMax abab6.5s',
      provider: 'MiniMax',
      badge: 'High Speed',
      description: 'Ultra-fast speech-and-text optimized model with 245,000 token context window for large payload processing.',
      inputPrice: 0.14,
      outputPrice: 0.28,
      openAiEquiv: 'GPT-4o-mini',
      openAiInputPrice: 0.15,
      openAiOutputPrice: 0.60,
      contextWindow: '245K',
      latencyMs: 220,
      score: 87.4,
      recommendedFor: ['Ultra-fast Chatbots', 'Large PDF Processing', 'Audio Dialogue'],
      popular: false,
    },
  ] as ModelInfo[],

  // 6. 价格套餐 (Pricing Tiers)
  pricingTiers: [
    {
      id: 'developer',
      name: 'Developer Plan',
      tagline: 'Pay only for what you use. Perfect for testing, side projects, and early-stage products.',
      price: 'Pay-as-you-go',
      minDeposit: 'Minimum top-up: $5',
      ctaText: 'Get Started with Developer Plan',
      features: [
        'Ideal for: Individual developers and startups',
        'Access to all supported Chinese LLMs (DeepSeek, Qwen, GLM, etc.)',
        'OpenAI SDK 100% drop-in compatibility',
        'Pay only for the Tokens you actually use',
        'Option to receive formal commercial contracts & DPA',
        'Instant dashboard API key creation'
      ]
    },
    {
      id: 'pro',
      name: 'Pro Plan',
      tagline: 'Higher rate limits, priority support, and better stability for production applications.',
      price: '$49',
      period: '/ month',
      highlight: true,
      ctaText: 'Get Started with Pro Plan',
      features: [
        'Ideal for: Growing SaaS products and small teams',
        'Everything in Developer Plan included',
        'Higher rate limits & priority routing',
        'Priority customer support',
        'Formal Commercial Contracts & DPA upon request',
        'Enhanced SLA guarantees & lower latency'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      tagline: 'Custom model routing, dedicated account management, formal contracts, DPA, and SLA guarantees.',
      price: 'Custom',
      period: 'contract',
      ctaText: 'Talk to Sales for Enterprise',
      features: [
        'Ideal for: Mid-to-large companies with compliance and volume requirements',
        'Custom model routing & private instance hosting',
        'Dedicated account management & 24/7 channel support',
        'Formal commercial contracts & custom DPA legal review',
        'Guaranteed 99.9%+ SLA & dedicated cross-border bandwidth',
        'Invoicing, SWIFT wire transfers & custom payment terms'
      ]
    }
  ] as PricingTier[],

  // 7. 合规与法律文件 (Compliance Docs)
  complianceDocs: [
    {
      title: 'Shantou Pilot Zone Cross-Border Data Policy Authorization',
      category: 'Government Authorization',
      description: 'Official legal authorization issued under the Shantou Overseas Chinese Economic Zone "Data Processing Zone" (来数加工) pilot policy.',
      fileSize: '1.2 MB',
      fileType: 'PDF Document',
    },
    {
      title: 'Standard International Data Processing Agreement (DPA)',
      category: 'Legal Contract',
      description: 'B2B legally binding data protection agreement compliant with GDPR Article 28 and international data processing standards.',
      fileSize: '840 KB',
      fileType: 'PDF Document',
    },
    {
      title: '99.9% Uptime & Latency Service Level Agreement (SLA)',
      category: 'Service Level Agreement',
      description: 'Contractual guarantee of 99.9% gateway availability and sub-180ms routing SLA with financial credit remedies.',
      fileSize: '620 KB',
      fileType: 'PDF Document',
    },
    {
      title: 'Helstera Infrastructure Security & RAM Isolation Whitepaper',
      category: 'Technical Whitepaper',
      description: 'In-depth architectural review of hardware-level enclave isolation, TLS 1.3 transit encryption, and volatile RAM lifecycle management.',
      fileSize: '2.4 MB',
      fileType: 'PDF Document',
    }
  ] as ComplianceDoc[],

  // 8. 常见问题 (FAQs)
  faqs: [
    {
      category: 'compliance',
      question: 'Is Helstera fully compliant for overseas enterprise usage?',
      answer: 'Yes. Helstera operates legally under Shantou Overseas Chinese Pilot Zone\'s "Data Processing Pilot Zone" (来数加工) cross-border data policy framework. We provide international developers and enterprise customers with legally binding commercial contracts, Data Processing Agreements (DPA), and standard enterprise compliance documentation.'
    },
    {
      category: 'security',
      question: 'How is data privacy handled? Is prompt data retained or used for training?',
      answer: 'We strictly operate under a Zero Data Retention (ZDR) policy. Prompt and completion data are processed in volatile RAM only and purged immediately after output delivery. We never store prompt payloads on disk, nor do we or underlying model providers use customer data for model training.'
    },
    {
      category: 'compliance',
      question: 'Can you provide a formal commercial contract and DPA?',
      answer: 'Yes. We provide legally binding international Commercial Contracts, Data Processing Agreements (DPA), and Service Level Agreements (SLA 99.9%+). Our legal team can also work directly with your procurement department for custom enterprise paper agreements.'
    },
    {
      category: 'technical',
      question: 'Does the data pass through China’s public internet?',
      answer: 'No. All cross-border API traffic is routed through dedicated, encrypted cross-border lines (IPLC/IEPL) directly to isolated compute infrastructure inside the Data Processing Pilot Zone. Your traffic bypasses public internet congestion and monitoring with sub-180ms global routing.'
    },
    {
      category: 'models',
      question: 'Which flagship models are supported through the unified gateway?',
      answer: 'We aggregate leading Chinese open-weights and flagship LLMs through a unified OpenAI-compatible API gateway. Supported models include DeepSeek-V3, DeepSeek-R1 (reasoning), Qwen-Max 2.5, Qwen-2.5-Coder, GLM-4 Plus, MiniMax abab6.5s, Doubao Pro, and Kimi Moonshot-v1.'
    },
    {
      category: 'billing',
      question: 'How does token billing work and what payment options are supported?',
      answer: 'Billing is pay-as-you-go per 1,000,000 tokens with transparent real-time metering. We support credit cards (Stripe), SWIFT/ACH wire transfers, corporate PO invoicing (NET30 for enterprise), and crypto stablecoin payments (USDT/USDC).'
    },
    {
      category: 'technical',
      question: 'How fast is migration if we currently use the OpenAI SDK?',
      answer: 'Migration takes under 1 minute. Helstera is 100% API compatible with OpenAI SDKs (Python, Node.js, LangChain, LlamaIndex, cURL). Simply change `base_url="https://api.helstera.com/v1"` and update your `api_key`. Zero code refactoring required.'
    }
  ] as FAQItem[],

  // 9. 博客与技术文章 (Blog Posts)
  blogs: [
    {
      id: 'deepseek-r1-benchmark-cost',
      title: 'DeepSeek-R1 vs. OpenAI o1/o3-mini: Comprehensive Benchmark & 80% Cost Analysis',
      summary: 'An empirical comparison of DeepSeek-R1 against top reasoning models across HumanEval, MATH, and code generation, detailing how teams save thousands monthly.',
      date: '2026-07-20',
      readTime: '6 min read',
      category: 'Benchmarks',
      author: {
        name: 'Alex Chen',
        role: 'Head of Infrastructure, Helstera',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
      }
    },
    {
      id: 'cross-border-data-compliance-guide',
      title: 'Navigating Cross-Border AI Data Compliance: The "Data Processing" (来数加工) Framework',
      summary: 'How international enterprises legally tap into Chinese high-performance AI compute through pilot zone regulatory protections, DPA contracts, and Zero Retention routing.',
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
      id: 'openai-to-helstera-migration-in-3-lines',
      title: 'Migration Guide: How to Replace OpenAI with Helstera in 3 Lines of Code',
      summary: 'A step-by-step tutorial on swapping base_url and API keys in Python, Node.js, and LangChain without modifying your existing prompt engineering or response handlers.',
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
      tagline: 'Instant $5 test balance',
      description: 'Register with email or GitHub OAuth. Get instant access to dashboard API keys with no mandatory credit card upfront.',
    },
    {
      number: '02',
      title: 'Generate API Key',
      tagline: 'Under 10 seconds',
      description: 'Create production or test API keys with custom rate limits and usage alerts directly in the dashboard.',
    },
    {
      number: '03',
      title: 'Update 1 Line in SDK',
      tagline: '100% OpenAI drop-in',
      description: 'Point your existing OpenAI Python/Node client base URL to https://api.helstera.com/v1 and enter your Helstera key.',
    },
    {
      number: '04',
      title: 'Top Up & Formal DPA',
      tagline: 'Credit card, Wire, PO',
      description: 'Pay via Stripe, SWIFT wire, or request enterprise custom DPA & commercial contracts for corporate accounting.',
    },
  ],
};
