export type Language = 'en' | 'zh' | 'ja' | 'es' | 'de' | 'fr';

import { LOCALIZED_CONTENT } from './localizedContent';
import type { LocalizedContent } from './localizedContent';

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '简体中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export interface TranslationSchema {
  ui: LocalizedContent['ui'];
  content: LocalizedContent['content'];
  nav: {
    home: string;
    pricing: string;
    compliance: string;
    docs: string;
    about: string;
    blog: string;
    contact: string;
    getApiKey: string;
    currency: string;
  };
  hero: {
    eyebrowTag: string;
    mainTitle: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    statRoutes: string;
    statRateCard: string;
    statTerms: string;
    routeUnit: string;
    liveValue: string;
    familiesLabel: string;
    familyUnit: string;
    contractValue: string;
    contractSubline: string;
    contractReview: string;
    finalTitle: string;
    finalSubtitle: string;
    testPing: string;
    modelsRates: string;
  };
  routeVisualizer: {
    gatewayTitle: string;
    dataPolicyLabel: string;
    rateLabel: string;
    healthLabel: string;
    callApi: string;
    copySnippet: string;
    snippetComment: string;
  };
  bento: {
    tag: string;
    title: string;
    subtitle: string;
    unitEconomicsTitle: string;
    unitEconomicsDesc: string;
    sdkCompatTitle: string;
    sdkCompatDesc: string;
    dpaTitle: string;
    dpaDesc: string;
    dpaCta: string;
    dataPolicyTitle: string;
    dataPolicyDesc: string;
    dataPolicyBadge: string;
    slaTitle: string;
    slaDesc: string;
    slaCta: string;
  };
  story: {
    title: string;
    subtitle: string;
    act1Badge: string;
    act1Title: string;
    act1Sub: string;
    act1Desc: string;
    act2Badge: string;
    act2Title: string;
    act2Sub: string;
    act2Desc: string;
    act3Badge: string;
    act3Title: string;
    act3Sub: string;
    act3Desc: string;
    act4Badge: string;
    act4Title: string;
    act4Sub: string;
    act4Desc: string;
  };
  models: {
    title: string;
    subtitle: string;
    viewBento: string;
    viewTable: string;
    searchPlaceholder: string;
    testModel: string;
    category: string;
    rate: string;
    context: string;
    health: string;
    filterAll: string;
    filterReasoning: string;
    filterChat: string;
    filterCoding: string;
    filterMultimodal: string;
    filterLongContext: string;
    noResults: string;
    copyModelId: string;
    copied: string;
    callApi: string;
  };
  calculator: {
    title: string;
    subtitle: string;
    volumeLabel: string;
    openaiCost: string;
    helsteraCost: string;
    annualSavings: string;
    liveTerms: string;
    selectRouteLabel: string;
    tokensUnit: string;
    inputLabel: string;
    outputLabel: string;
    billingView: string;
    quotePrompt: string;
    viewRateMatrix: string;
  };
  onboarding: {
    title: string;
    subtitle: string;
    stepPrefix: string;
    step1Title: string;
    step1Desc: string;
    step1Action: string;
    step2Title: string;
    step2Desc: string;
    step2Action: string;
    step3Title: string;
    step3Desc: string;
    step3Action: string;
    step4Title: string;
    step4Desc: string;
    step4Action: string;
  };
  compliance: {
    title: string;
    subtitle: string;
    legalAssuranceTag: string;
    policyTitle: string;
    policyDesc: string;
    requestDocCta: string;
    contactCta: string;
    provideTitle: string;
    provideItem1: string;
    provideItem2: string;
    provideItem3: string;
    provideItem4: string;
  };
  pricingView: {
    title: string;
    subtitle: string;
    tierRecommended: string;
    tierPopular: string;
    tierSelect: string;
    customEnterprise: string;
    tierDeveloper: string;
    tierProduction: string;
    tierContract: string;
  };
  modals: {
    contractTitle: string;
    contractDesc: string;
    apiKeysTitle: string;
    apiKeysDesc: string;
    pingTitle: string;
    pingDesc: string;
    runDiagnostic: string;
    originLabel: string;
    modelLabel: string;
    ttft: string;
    totalLatency: string;
    tps: string;
  };
  common: {
    testApiKey: string;
    requestDpa: string;
    viewDocs: string;
    contactSales: string;
    copyCode: string;
    copied: string;
    close: string;
    language: string;
    toggleNavigation: string;
  };
  footer: {
    desc: string;
    colPlatform: string;
    colCompliance: string;
    colCompany: string;
    copyright: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  en: {
    ...LOCALIZED_CONTENT.en,
    nav: {
      home: 'Overview',
      pricing: 'Pricing',
      compliance: 'Compliance',
      docs: 'API Docs',
      about: 'About Us',
      blog: 'Blog',
      contact: 'Contact',
      getApiKey: 'Get API Key',
      currency: 'Currency',
    },
    hero: {
      eyebrowTag: 'CURRENT MODEL ROUTES • OPENAI-COMPATIBLE GATEWAY [01]',
      mainTitle: 'Current frontier models. One governed route.',
      subtitle: 'Build on current DeepSeek, Qwen, Kimi, and GLM routes through one OpenAI-compatible gateway. Confirm live availability and rate terms from your account.',
      primaryCta: 'Request API Access',
      secondaryCta: 'Review Enterprise Controls',
      statRoutes: 'CURRENT MODEL ROUTES',
      statRateCard: 'RATE CARD',
      statTerms: 'SERVICE TERMS',
      routeUnit: 'routes',
      liveValue: 'LIVE',
      familiesLabel: 'MODEL FAMILIES',
      familyUnit: 'families',
      contractValue: 'DPA',
      contractSubline: 'Service terms',
      contractReview: 'Contract-ready review',
      finalTitle: 'Ready to work from a current route catalog?',
      finalSubtitle: 'Start with current route availability, account rate terms, and a governance package your team can review.',
      testPing: 'Inspect Route Health',
      modelsRates: 'View Route Catalog',
    },
    routeVisualizer: {
      gatewayTitle: 'Helstera Gateway',
      dataPolicyLabel: 'Account data policy',
      rateLabel: 'Rate:',
      healthLabel: 'Route health:',
      callApi: 'Call API',
      copySnippet: 'Copy Code Snippet',
      snippetComment: '# OpenAI-compatible route contract',
    },
    bento: {
      tag: 'MODEL ROUTING & DATA CONTROLS [02]',
      title: 'Current routes, clear operating terms',
      subtitle: 'Use one stable API contract for model access, account-level routing, and data handling that your team can review.',
      unitEconomicsTitle: 'Use the current rate card',
      unitEconomicsDesc: 'Model pricing and availability change. Confirm the account rate card for the selected route before sending production traffic.',
      sdkCompatTitle: 'Keep your existing API contract',
      sdkCompatDesc: 'Point the base URL to Helstera in Python, Node.js, LangChain, or your own client and select a current route by ID.',
      dpaTitle: 'Contract-ready governance',
      dpaDesc: 'Review data-processing terms, service scope, and account obligations with your procurement and legal teams before rollout.',
      dpaCta: 'Request Contract Pack',
      dataPolicyTitle: 'Retention terms you can review',
      dataPolicyDesc: 'Define the retention and training boundaries for your account, then keep the approved policy attached to the production contract.',
      dataPolicyBadge: 'Policy-first routing',
      slaTitle: 'Choose from live route signals',
      slaDesc: 'Use account telemetry, status information, and route health while keeping current evidence next to the route decision.',
      slaCta: 'Open Developer Console',
    },
    story: {
      title: 'One route. A model catalog that keeps moving.',
      subtitle: 'Explore the four operating decisions behind a current, governed AI gateway.',
      act1Badge: 'Governance',
      act1Title: 'Make the route reviewable',
      act1Sub: 'Keep model access, data handling, and service obligations visible to the people who approve production systems.',
      act1Desc: 'Helstera packages the gateway contract, route scope, and data-processing terms so engineering and procurement can evaluate the same operating picture.',
      act2Badge: 'Current model choice',
      act2Title: 'Choose by capability, not yesterday’s leaderboard',
      act2Sub: 'Route current general, reasoning, multimodal, and long-context models through the same API contract.',
      act2Desc: 'The catalog highlights what each route is for and points teams to live rate and availability information when the request is made.',
      act3Badge: 'Data controls',
      act3Title: 'Put retention terms next to the route',
      act3Sub: 'Make data handling part of the integration decision, not a footer added after launch.',
      act3Desc: 'Document the approved retention, training, and access boundaries for each production account and review them with your compliance owners.',
      act4Badge: 'Integration',
      act4Title: 'Migrate without a provider rewrite',
      act4Sub: 'Keep your request shape while changing the gateway base URL and model ID.',
      act4Desc: 'Existing OpenAI-compatible clients can keep their message and response handling while teams validate the current route contract in a controlled environment.',
    },
    models: {
      title: 'Current model routes',
      subtitle: 'Choose by capability and confirm live rate, availability, and service terms at account level.',
      viewBento: 'Cards',
      viewTable: 'Table',
      searchPlaceholder: 'Search routes (e.g. DeepSeek, Qwen)...',
      testModel: 'Test Route',
      category: 'Capability',
      rate: 'Rate card',
      context: 'Context',
      health: 'Route health',
      filterAll: 'All Models',
      filterReasoning: 'Reasoning Models',
      filterChat: 'General Chat',
      filterCoding: 'Coding',
      filterMultimodal: 'Multimodal',
      filterLongContext: 'Long Context',
      noResults: 'No current routes match this search.',
      copyModelId: 'Copy model ID',
      copied: 'Copied',
      callApi: 'Call API',
    },
    calculator: {
      title: 'Plan usage before you price it',
      subtitle: 'Scope monthly traffic first, then confirm the current account rate card for the selected route.',
      volumeLabel: 'Monthly token volume',
      openaiCost: 'Usage mix',
      helsteraCost: 'Current route',
      annualSavings: 'Account rate terms',
      liveTerms: 'Current account terms',
      selectRouteLabel: '1. Select a current model route',
      tokensUnit: 'M tokens',
      inputLabel: 'input',
      outputLabel: 'output',
      billingView: 'Billing view',
      quotePrompt: 'Need a quote for this workload? Share volume, region, and data requirements for a current route review.',
      viewRateMatrix: 'View current rate matrix',
    },
    onboarding: {
      title: 'Move from evaluation to governed traffic',
      subtitle: 'Keep your existing request shape, validate a current route, then attach data and service terms before production.',
      stepPrefix: 'STEP',
      step1Title: 'Create a developer account',
      step1Desc: 'Start with a test workspace and review the current route catalog.',
      step1Action: 'Create Workspace',
      step2Title: 'Generate an API key',
      step2Desc: 'Create test or production keys with rate limits and usage alerts.',
      step2Action: 'Generate Key',
      step3Title: 'Select a current route',
      step3Desc: 'Set the gateway base URL and model ID in your existing client.',
      step3Action: 'View Integration Docs',
      step4Title: 'Review operating terms',
      step4Desc: 'Confirm the rate card, retention policy, and service scope before launch.',
      step4Action: 'Request Contract Pack',
    },
    compliance: {
      title: 'Compliance with an evidence trail',
      subtitle: 'Give engineering, security, and procurement one reviewable record for model access, data handling, and service obligations.',
      legalAssuranceTag: 'Legal & Procurement Review',
      policyTitle: 'Account data-processing scope',
      policyDesc: 'Use the applicable policy documents and account contract to review cross-border processing, access boundaries, and internal governance requirements.',
      requestDocCta: 'Request Governance Pack',
      contactCta: 'Contact Us',
      provideTitle: 'What teams can review',
      provideItem1: 'Commercial B2B master service agreement',
      provideItem2: 'Data Processing Agreement (DPA) scope',
      provideItem3: 'Service schedule and escalation terms',
      provideItem4: 'Data handling, retention, and training controls',
    },
    pricingView: {
      title: 'Pricing tied to the current route',
      subtitle: 'Choose an operating plan, then confirm model availability, live rate terms, data policy, and service scope for your account before production traffic.',
      tierRecommended: 'Recommended',
      tierPopular: 'Most Popular',
      tierSelect: 'Select Tier',
      customEnterprise: 'Custom Enterprise Plan',
      tierDeveloper: 'Build',
      tierProduction: 'Production',
      tierContract: 'Contract',
    },
    modals: {
      contractTitle: 'Enterprise Data Processing Agreement (DPA)',
      contractDesc: 'Request the current B2B governance contract for corporate procurement review.',
      apiKeysTitle: 'API Key Management & Credentials',
      apiKeysDesc: 'Generate and manage production API keys for an OpenAI-compatible client contract.',
      pingTitle: 'Live route health diagnostic',
      pingDesc: 'Inspect response telemetry for a selected model route from the available test origins.',
      runDiagnostic: 'Run Route Diagnostic',
      originLabel: 'Select Test Origin Region:',
      modelLabel: 'Select Target Model:',
      ttft: 'Time to first token (TTFT)',
      totalLatency: 'Total roundtrip time',
      tps: 'Streaming rate',
    },
    common: {
      testApiKey: 'Test API Key',
      requestDpa: 'Request DPA Contract',
      viewDocs: 'View API Documentation',
      contactSales: 'Talk to Sales',
      copyCode: 'Copy Code',
      copied: 'Copied!',
      close: 'Close',
      language: 'Language',
      toggleNavigation: 'Toggle navigation menu',
    },
    footer: {
      desc: 'Helstera is an OpenAI-compatible AI gateway for current model routes, account-level operating terms, and reviewable data controls.',
      colPlatform: 'Platform & Gateway',
      colCompliance: 'Legal & Compliance',
      colCompany: 'Company',
      copyright: 'Helstera AI Gateway (helstera.com). All rights reserved.',
    }
  },
  zh: {
    ...LOCALIZED_CONTENT.zh,
    nav: {
      home: '首页概览',
      pricing: '算力价格',
      compliance: '合规与法务',
      docs: '开发文档',
      about: '关于我们',
      blog: '技术博客',
      contact: '联系商务',
      getApiKey: '获取 API Key',
      currency: '货币结算',
    },
    hero: {
      eyebrowTag: '当前模型路由 • OpenAI 兼容网关 [01]',
      mainTitle: '连接当前前沿模型，统一治理一条路由。',
      subtitle: '通过一个 OpenAI 兼容网关接入 DeepSeek、Qwen、Kimi 与 GLM 当前路由；可用性与费率以账户实时信息为准。',
      primaryCta: '申请 API 访问',
      secondaryCta: '查看企业控制项',
      statRoutes: '当前模型路由',
      statRateCard: '账户费率卡',
      statTerms: '服务条款',
      routeUnit: '条路由',
      liveValue: '实时',
      familiesLabel: '模型系列',
      familyUnit: '个系列',
      contractValue: 'DPA',
      contractSubline: '服务条款',
      contractReview: '可进入合同评审',
      finalTitle: '从当前模型路由开始',
      finalSubtitle: '从当前路由可用性、账户费率和可审阅的治理资料开始。',
      testPing: '查看路由健康度',
      modelsRates: '查看路由目录',
    },
    routeVisualizer: {
      gatewayTitle: 'Helstera 网关',
      dataPolicyLabel: '账户数据策略',
      rateLabel: '费率：',
      healthLabel: '路由健康度：',
      callApi: '调用 API',
      copySnippet: '复制示例代码',
      snippetComment: '# OpenAI 兼容路由契约',
    },
    bento: {
      tag: '模型路由与数据控制 [02]',
      title: '当前路由，清晰的运营条款',
      subtitle: '用一套稳定的 API 契约管理模型访问、账户级路由和团队可审阅的数据处理范围。',
      unitEconomicsTitle: '以当前费率卡为准',
      unitEconomicsDesc: '模型价格和可用性会变化。正式流量启用前，请以所选路由的账户费率卡确认计费条件。',
      sdkCompatTitle: '保留现有 API 契约',
      sdkCompatDesc: '在 Python、Node.js、LangChain 或自有客户端中切换 base URL，并通过模型 ID 选择当前路由。',
      dpaTitle: '可直接进入采购评审的治理包',
      dpaDesc: '上线前与法务和采购团队共同核对数据处理条款、服务范围与账户责任。',
      dpaCta: '申请合同资料包',
      dataPolicyTitle: '可审阅的数据留存条款',
      dataPolicyDesc: '明确账户的留存和训练边界，并将已批准的策略附在生产合同中。',
      dataPolicyBadge: '策略先行的路由',
      slaTitle: '根据实时路由信号选择模型',
      slaDesc: '结合账户遥测、状态信息和路由健康度选型，并将当前证据放在路由决策旁边。',
      slaCta: '打开开发者控制台',
    },
    story: {
      title: '一条路由，一个持续更新的模型目录。',
      subtitle: '了解当前治理型 AI 网关背后的四个运营决策。',
      act1Badge: '治理',
      act1Title: '让路由可审阅',
      act1Sub: '让模型访问、数据处理和服务责任对生产审批人保持可见。',
      act1Desc: 'Helstera 将网关契约、路由范围和数据处理条款放在同一份运营视图中，便于工程与采购协同评估。',
      act2Badge: '当前模型选择',
      act2Title: '按能力选择，而不是追逐昨天的榜单',
      act2Sub: '通过同一套 API 契约接入当前通用、推理、多模态和长上下文模型。',
      act2Desc: '目录说明每条路由适合的工作负载，并在请求阶段指向实时费率与可用性信息。',
      act3Badge: '数据控制',
      act3Title: '把留存条款放在路由旁边',
      act3Sub: '让数据处理成为集成决策的一部分，而不是上线后才补上的页脚。',
      act3Desc: '为每个生产账户记录已批准的留存、训练和访问边界，并与合规负责人共同复核。',
      act4Badge: '集成',
      act4Title: '无需重写供应商客户端',
      act4Sub: '保留请求结构，只需切换网关地址和模型 ID。',
      act4Desc: '现有 OpenAI 兼容客户端可以继续处理消息与响应，同时在受控环境中验证当前路由契约。',
    },
    models: {
      title: '当前模型路由',
      subtitle: '按能力选择，并在账户层确认实时费率、可用性和服务条款。',
      viewBento: '卡片',
      viewTable: '表格',
      searchPlaceholder: '搜索路由（例如 DeepSeek、Qwen）...',
      testModel: '测试路由',
      category: '能力类型',
      rate: '费率卡',
      context: '上下文',
      health: '路由健康度',
      filterAll: '全部模型',
      filterReasoning: '深度推理模型',
      filterChat: '通用对话模型',
      filterCoding: '代码开发',
      filterMultimodal: '多模态',
      filterLongContext: '长上下文',
      noResults: '没有匹配当前搜索的路由。',
      copyModelId: '复制模型 ID',
      copied: '已复制',
      callApi: '调用 API',
    },
    calculator: {
      title: '先规划用量，再确认费率',
      subtitle: '先估算月度流量，再为所选路由确认账户当前费率卡。',
      volumeLabel: '月度 Token 用量',
      openaiCost: '用量构成',
      helsteraCost: '当前路由',
      annualSavings: '账户费率条款',
      liveTerms: '当前账户条款',
      selectRouteLabel: '1. 选择当前模型路由',
      tokensUnit: 'M Token',
      inputLabel: '输入',
      outputLabel: '输出',
      billingView: '计费视图',
      quotePrompt: '需要这类工作负载的报价？请提供用量、区域和数据要求，我们会按当前路由评审。',
      viewRateMatrix: '查看当前费率矩阵',
    },
    onboarding: {
      title: '从评估走向可治理的生产流量',
      subtitle: '保留现有请求结构，验证当前路由，并在生产前附上数据与服务条款。',
      stepPrefix: '步骤',
      step1Title: '创建开发者账户',
      step1Desc: '从测试工作区开始，先查看当前路由目录。',
      step2Title: '生成 API 密钥',
      step2Desc: '创建测试或生产密钥，并配置速率限制与用量提醒。',
      step3Title: '选择当前路由',
      step3Desc: '在现有客户端中设置网关地址和模型 ID。',
      step4Title: '复核运营条款',
      step4Desc: '上线前确认费率卡、留存策略和服务范围。',
      step1Action: '创建工作区',
      step2Action: '生成密钥',
      step3Action: '查看集成文档',
      step4Action: '申请合同资料包',
    },
    compliance: {
      title: '有证据链的合规审阅',
      subtitle: '为工程、安全和采购团队提供一份可复核的模型访问、数据处理与服务责任记录。',
      legalAssuranceTag: '法律与采购评审',
      policyTitle: '账户数据处理范围',
      policyDesc: '结合适用政策文件与账户合同，复核跨境处理、访问边界和内部治理要求。',
      requestDocCta: '申请治理资料包',
      contactCta: '联系商务团队',
      provideTitle: '团队可以复核的材料',
      provideItem1: '商业 B2B 主服务协议（MSA）',
      provideItem2: '数据处理协议（DPA）范围',
      provideItem3: '服务计划与升级处理条款',
      provideItem4: '数据处理、留存与训练控制项',
    },
    pricingView: {
      title: '与当前路由绑定的计费方案',
      subtitle: '按用量选择运营方案，并在生产流量启用前确认账户中的模型可用性、实时费率、数据策略与服务范围。',
      tierRecommended: '推荐选择',
      tierPopular: '最受欢迎',
      tierSelect: '选择方案',
      customEnterprise: '定制企业方案',
      tierDeveloper: '构建',
      tierProduction: '生产',
      tierContract: '合同',
    },
    modals: {
      contractTitle: '企业级数据处理协议 (DPA) 申请',
      contractDesc: '申请用于企业采购评审的当前 B2B 治理合同资料。',
      apiKeysTitle: 'API 密钥管理与凭证',
      apiKeysDesc: '生成并管理适用于 OpenAI 兼容客户端契约的生产级 API Key。',
      pingTitle: '实时路由健康度诊断',
      pingDesc: '从可用测试区域检查所选模型路由的响应遥测信息。',
      runDiagnostic: '运行路由诊断',
      originLabel: '选择测试发起区域：',
      modelLabel: '选择目标大模型：',
      ttft: '首 Token 延迟 (TTFT)',
      totalLatency: '总往返延迟 (Total)',
      tps: 'Token 生成速度',
    },
    common: {
      testApiKey: '测试 API Key',
      requestDpa: '申请 DPA 合规合同',
      viewDocs: '查看 API 文档',
      contactSales: '联系商务团队',
      copyCode: '复制代码',
      copied: '已复制！',
      close: '关闭',
      language: '切换语言',
      toggleNavigation: '切换导航菜单',
    },
    footer: {
      desc: 'Helstera 是面向当前模型路由的 OpenAI 兼容 AI 网关，提供账户级运营条款与可复核的数据控制。',
      colPlatform: '平台与网关',
      colCompliance: '合规与法务',
      colCompany: '关于公司',
      copyright: 'Helstera AI Gateway (helstera.com)。保留所有权利。',
    }
  },
  ja: {
    ...LOCALIZED_CONTENT.ja,
    nav: {
      home: '概要',
      pricing: '料金',
      compliance: 'コンプライアンス',
      docs: 'APIドキュメント',
      about: '会社概要',
      blog: 'ブログ',
      contact: 'お問い合わせ',
      getApiKey: 'API Keyを取得',
      currency: '通貨選択',
    },
    hero: {
      eyebrowTag: '現在のモデルルート • OpenAI互換ゲートウェイ [01]',
      mainTitle: '現在の先端モデル。統制された一つのルート。',
      subtitle: 'OpenAI互換ゲートウェイから現在のDeepSeek、Qwen、Kimi、GLMルートへ接続。可用性と料金はアカウントで確認できます。',
      primaryCta: 'APIアクセスを申請',
      secondaryCta: '企業向け管理項目を見る',
      statRoutes: '現在のモデルルート',
      statRateCard: 'アカウント料金表',
      statTerms: 'サービス条項',
      routeUnit: 'ルート',
      liveValue: 'ライブ',
      familiesLabel: 'モデルファミリー',
      familyUnit: 'ファミリー',
      contractValue: 'DPA',
      contractSubline: 'サービス条件',
      contractReview: '契約レビュー対応',
      finalTitle: '現在のルートカタログから始める',
      finalSubtitle: '現在のルート可用性、アカウント料金、確認可能なガバナンス資料から始めます。',
      testPing: 'ルート健全性を確認',
      modelsRates: 'ルート一覧を見る',
    },
    routeVisualizer: {
      gatewayTitle: 'Helstera ゲートウェイ',
      dataPolicyLabel: 'アカウントデータポリシー',
      rateLabel: '料金：',
      healthLabel: 'ルート健全性：',
      callApi: 'API呼び出し',
      copySnippet: 'コードをコピー',
      snippetComment: '# OpenAI互換ルート契約',
    },
    bento: {
      tag: 'モデルルーティングとデータ管理 [02]',
      title: '現在のルート。明確な運用条件。',
      subtitle: '一つのAPI契約でモデルアクセス、アカウント単位のルーティング、レビュー可能なデータ処理を管理。',
      unitEconomicsTitle: '現在の料金表を確認',
      unitEconomicsDesc: 'モデルの料金と可用性は変わります。本番トラフィックの前に、選択したルートのアカウント料金を確認してください。',
      sdkCompatTitle: '既存のAPI契約を維持',
      sdkCompatDesc: 'Python、Node.js、LangChain、独自クライアントでbase URLを切り替え、モデルIDでルートを選択できます。',
      dpaTitle: '調達レビューに使えるガバナンス',
      dpaDesc: '導入前に法務・調達チームとデータ処理条項、サービス範囲、アカウント責任を確認。',
      dpaCta: '契約資料を申請',
      dataPolicyTitle: '確認可能な保持条件',
      dataPolicyDesc: 'アカウントの保持・学習境界を定義し、承認済みポリシーを本番契約に添付します。',
      dataPolicyBadge: 'ポリシー優先のルーティング',
      slaTitle: 'ライブのルート信号で選択',
      slaDesc: 'アカウントのテレメトリ、状態、ルート健全性を使い、現在の証拠をルート判断と並べて確認。',
      slaCta: '開発者コンソールを開く',
    },
    story: {
      title: '一つのルート。更新され続けるモデルカタログ。',
      subtitle: '現在の統制型AIゲートウェイを支える4つの運用判断を確認。',
      act1Badge: 'ガバナンス',
      act1Title: 'ルートをレビュー可能にする',
      act1Sub: 'モデルアクセス、データ処理、サービス責任を本番承認者に見える形で管理。',
      act1Desc: 'ゲートウェイ契約、ルート範囲、データ処理条件を一つの運用ビューにまとめ、開発と調達が同じ前提で評価できます。',
      act2Badge: '現在のモデル選択',
      act2Title: '昨日のランキングではなく能力で選ぶ',
      act2Sub: '現在の汎用、推論、マルチモーダル、長文脈モデルを同じAPI契約で利用。',
      act2Desc: '各ルートの用途を示し、リクエスト時にライブの料金と可用性情報を確認できます。',
      act3Badge: 'データ管理',
      act3Title: '保持条件をルートの隣に置く',
      act3Sub: 'データ処理を導入判断の一部として扱い、ローンチ後の補足にしない。',
      act3Desc: '本番アカウントごとの保持、学習、アクセス境界を記録し、コンプライアンス担当と確認します。',
      act4Badge: 'インテグレーション',
      act4Title: 'プロバイダーの書き換えなしで移行',
      act4Sub: 'リクエスト形式を維持し、ゲートウェイURLとモデルIDだけを変更。',
      act4Desc: '既存のOpenAI互換クライアントを使いながら、管理された環境で現在のルート契約を検証できます。',
    },
    models: {
      title: '現在のモデルルート',
      subtitle: '能力で選び、料金、可用性、サービス条件をアカウント単位で確認。',
      viewBento: 'カード',
      viewTable: 'テーブル',
      searchPlaceholder: 'ルートを検索（例: DeepSeek, Qwen）...',
      testModel: 'ルートをテスト',
      category: '能力',
      rate: '料金表',
      context: 'コンテキスト',
      health: 'ルート健全性',
      filterAll: '全モデル',
      filterReasoning: '推論モデル',
      filterChat: '対話モデル',
      filterCoding: 'コーディング',
      filterMultimodal: 'マルチモーダル',
      filterLongContext: '長文脈',
      noResults: 'この検索に一致する現在のルートはありません。',
      copyModelId: 'モデル ID をコピー',
      copied: 'コピー済み',
      callApi: 'APIを呼び出す',
    },
    calculator: {
      title: '利用量を計画してから料金を確認',
      subtitle: '月間トラフィックを見積もり、選択したルートのアカウント料金表を確認。',
      volumeLabel: '月間トークン量',
      openaiCost: '利用量の構成',
      helsteraCost: '現在のルート',
      annualSavings: 'アカウント料金条件',
      liveTerms: '現在のアカウント条件',
      selectRouteLabel: '1. 現在のモデルルートを選択',
      tokensUnit: 'Mトークン',
      inputLabel: '入力',
      outputLabel: '出力',
      billingView: '請求表示',
      quotePrompt: 'このワークロードの見積もりが必要ですか？利用量、地域、データ要件を共有して現在のルートを確認してください。',
      viewRateMatrix: '現在の料金マトリクスを見る',
    },
    onboarding: {
      title: '評価から統制された本番トラフィックへ',
      subtitle: '既存のリクエスト形式を保ち、現在のルートを検証してからデータとサービス条件を添付。',
      stepPrefix: 'ステップ',
      step1Title: '開発者アカウントを作成',
      step1Desc: 'テストワークスペースから始め、現在のルート一覧を確認。',
      step2Title: 'APIキーを生成',
      step2Desc: 'レート制限と利用アラートを設定したテストまたは本番キーを作成。',
      step3Title: '現在のルートを選択',
      step3Desc: '既存クライアントにゲートウェイURLとモデルIDを設定。',
      step4Title: '運用条件を確認',
      step4Desc: 'リリース前に料金表、保持ポリシー、サービス範囲を確認。',
      step1Action: 'ワークスペース作成',
      step2Action: 'キーを生成',
      step3Action: '統合ドキュメントを見る',
      step4Action: '契約資料を申請',
    },
    compliance: {
      title: '証跡のあるコンプライアンスレビュー',
      subtitle: '開発、セキュリティ、調達チームがモデルアクセス、データ処理、サービス責任を同じ記録で確認。',
      legalAssuranceTag: '法務・調達レビュー',
      policyTitle: 'アカウントのデータ処理範囲',
      policyDesc: '適用される政策文書とアカウント契約で、越境処理、アクセス境界、社内ガバナンス要件を確認。',
      requestDocCta: 'ガバナンス資料を申請',
      contactCta: 'お問い合わせ',
      provideTitle: 'チームが確認できる資料',
      provideItem1: 'B2Bマスターサービス契約（MSA）',
      provideItem2: 'データ処理契約（DPA）の範囲',
      provideItem3: 'サービス計画とエスカレーション条件',
      provideItem4: 'データ処理、保持、学習の管理項目',
    },
    pricingView: {
      title: '現在のルートに紐づく料金プラン',
      subtitle: '利用量に合わせたプランを選び、本番前にアカウントのモデル可用性、料金、データポリシー、サービス範囲を確認。',
      tierRecommended: '推奨プラン',
      tierPopular: '一番人気',
      tierSelect: 'プランを選択',
      customEnterprise: 'エンタープライズカスタム',
      tierDeveloper: '構築',
      tierProduction: '本番',
      tierContract: '契約',
    },
    modals: {
      contractTitle: 'エンタープライズデータ処理合意書 (DPA) 申請',
      contractDesc: '企業調達レビュー向けの最新B2Bガバナンス契約資料を申請。',
      apiKeysTitle: 'APIキー管理と資格情報',
      apiKeysDesc: 'OpenAI互換クライアント契約向けの本番APIキーを生成・管理。',
      pingTitle: 'ライブのルート健全性診断',
      pingDesc: '利用可能なテスト地域から、選択したモデルルートのレスポンステレメトリを確認。',
      runDiagnostic: 'ルート診断を実行',
      originLabel: 'テスト開始地域を選択：',
      modelLabel: '対象モデルを選択：',
      ttft: 'ファーストトークン時間 (TTFT)',
      totalLatency: '合計往復レイテンシ',
      tps: 'トークン生成速度',
    },
    common: {
      testApiKey: 'テストAPI Key',
      requestDpa: 'DPA契約を申請',
      viewDocs: 'APIドキュメントを見る',
      contactSales: '営業担当に相談',
      copyCode: 'コードをコピー',
      copied: 'コピー完了！',
      close: '閉じる',
      language: '言語切替',
      toggleNavigation: 'ナビゲーションメニューを切り替え',
    },
    footer: {
      desc: 'Helsteraは、現在のモデルルート、アカウント単位の運用条件、レビュー可能なデータ管理を提供するOpenAI互換AIゲートウェイです。',
      colPlatform: 'プラットフォーム',
      colCompliance: 'コンプライアンス',
      colCompany: '会社情報',
      copyright: 'Helstera AI Gateway (helstera.com). All rights reserved.',
    }
  },
  es: {
    ...LOCALIZED_CONTENT.es,
    nav: {
      home: 'Inicio',
      pricing: 'Precios',
      compliance: 'Cumplimiento',
      docs: 'Docs API',
      about: 'Nosotros',
      blog: 'Blog',
      contact: 'Contacto',
      getApiKey: 'Obtener API Key',
      currency: 'Moneda',
    },
    hero: {
      eyebrowTag: 'RUTAS DE MODELOS ACTUALES • PASARELA COMPATIBLE CON OPENAI [01]',
      mainTitle: 'Modelos actuales. Una ruta gobernada.',
      subtitle: 'Conecta con las rutas actuales de DeepSeek, Qwen, Kimi y GLM mediante una pasarela compatible con OpenAI. Confirma disponibilidad y tarifas desde tu cuenta.',
      primaryCta: 'Solicitar Acceso API',
      secondaryCta: 'Revisar Controles Empresariales',
      statRoutes: 'RUTAS ACTUALES',
      statRateCard: 'TARIFA DE CUENTA',
      statTerms: 'CONDICIONES DE SERVICIO',
      routeUnit: 'rutas',
      liveValue: 'EN VIVO',
      familiesLabel: 'FAMILIAS DE MODELOS',
      familyUnit: 'familias',
      contractValue: 'DPA',
      contractSubline: 'Condiciones de servicio',
      contractReview: 'Listo para revisión contractual',
      finalTitle: 'Empieza con un catálogo de rutas actual',
      finalSubtitle: 'Comienza con disponibilidad actual, tarifas de cuenta y un paquete de gobernanza revisable.',
      testPing: 'Ver Salud de la Ruta',
      modelsRates: 'Ver Catálogo de Rutas',
    },
    routeVisualizer: {
      gatewayTitle: 'Pasarela Helstera',
      dataPolicyLabel: 'Política de datos de la cuenta',
      rateLabel: 'Tarifa:',
      healthLabel: 'Salud de ruta:',
      callApi: 'Llamar API',
      copySnippet: 'Copiar Código',
      snippetComment: '# Contrato de ruta compatible con OpenAI',
    },
    bento: {
      tag: 'ENRUTAMIENTO DE MODELOS Y CONTROLES DE DATOS [02]',
      title: 'Rutas actuales, condiciones claras',
      subtitle: 'Usa un contrato API estable para el acceso a modelos, el enrutamiento por cuenta y un tratamiento de datos revisable.',
      unitEconomicsTitle: 'Usa la tarifa actual',
      unitEconomicsDesc: 'La disponibilidad y las tarifas cambian. Confirma la tarifa de cuenta de la ruta seleccionada antes del tráfico de producción.',
      sdkCompatTitle: 'Conserva tu contrato API',
      sdkCompatDesc: 'Cambia la URL base a Helstera desde Python, Node.js, LangChain o tu cliente y selecciona una ruta por ID.',
      dpaTitle: 'Gobernanza lista para compras',
      dpaDesc: 'Revisa con los equipos legal y de compras el tratamiento de datos, el alcance del servicio y las obligaciones de la cuenta.',
      dpaCta: 'Solicitar Paquete Contractual',
      dataPolicyTitle: 'Condiciones de retención revisables',
      dataPolicyDesc: 'Define los límites de retención y entrenamiento de tu cuenta y adjunta la política aprobada al contrato de producción.',
      dataPolicyBadge: 'Enrutamiento con política primero',
      slaTitle: 'Elige con señales de ruta en vivo',
      slaDesc: 'Usa telemetría, estado y salud de ruta de la cuenta, manteniendo la evidencia actual junto a la decisión de ruta.',
      slaCta: 'Abrir Consola de Desarrollo',
    },
    story: {
      title: 'Una ruta. Un catálogo de modelos que sigue avanzando.',
      subtitle: 'Explora las cuatro decisiones operativas de una pasarela de IA actual y gobernada.',
      act1Badge: 'Gobernanza',
      act1Title: 'Haz revisable la ruta',
      act1Sub: 'Mantén visibles el acceso a modelos, el tratamiento de datos y las obligaciones de servicio para quienes aprueban producción.',
      act1Desc: 'Helstera reúne el contrato de pasarela, el alcance de la ruta y los términos de tratamiento de datos en una misma vista operativa.',
      act2Badge: 'Elección de modelo actual',
      act2Title: 'Elige por capacidad, no por la tabla de ayer',
      act2Sub: 'Usa modelos actuales generales, de razonamiento, multimodales y de contexto largo con el mismo contrato API.',
      act2Desc: 'El catálogo explica para qué sirve cada ruta y dirige a la información actual de tarifa y disponibilidad al solicitarla.',
      act3Badge: 'Controles de datos',
      act3Title: 'Pon la retención junto a la ruta',
      act3Sub: 'Haz que el tratamiento de datos sea parte de la integración, no una nota añadida después del lanzamiento.',
      act3Desc: 'Documenta los límites aprobados de retención, entrenamiento y acceso de cada cuenta de producción.',
      act4Badge: 'Integración',
      act4Title: 'Migra sin reescribir el proveedor',
      act4Sub: 'Conserva el formato de solicitud y cambia la URL de la pasarela y el ID del modelo.',
      act4Desc: 'Los clientes compatibles con OpenAI pueden conservar su manejo de mensajes y respuestas mientras validan el contrato de ruta.',
    },
    models: {
      title: 'Rutas de modelos actuales',
      subtitle: 'Elige por capacidad y confirma tarifa, disponibilidad y condiciones de servicio desde tu cuenta.',
      viewBento: 'Tarjetas',
      viewTable: 'Tabla',
      searchPlaceholder: 'Buscar rutas (ej. DeepSeek, Qwen)...',
      testModel: 'Probar Ruta',
      category: 'Capacidad',
      rate: 'Tarifa',
      context: 'Contexto',
      health: 'Salud de ruta',
      filterAll: 'Todos los Modelos',
      filterReasoning: 'Modelos de Razonamiento',
      filterChat: 'Chat General',
      filterCoding: 'Código',
      filterMultimodal: 'Multimodal',
      filterLongContext: 'Contexto Largo',
      noResults: 'Ninguna ruta actual coincide con esta búsqueda.',
      copyModelId: 'Copiar ID del modelo',
      copied: 'Copiado',
      callApi: 'Llamar API',
    },
    calculator: {
      title: 'Planifica el uso antes de fijar la tarifa',
      subtitle: 'Calcula el tráfico mensual y confirma la tarifa actual de la cuenta para la ruta elegida.',
      volumeLabel: 'Volumen mensual de tokens',
      openaiCost: 'Distribución de uso',
      helsteraCost: 'Ruta actual',
      annualSavings: 'Condiciones de tarifa de cuenta',
      liveTerms: 'Condiciones actuales de la cuenta',
      selectRouteLabel: '1. Selecciona una ruta de modelo actual',
      tokensUnit: 'M tokens',
      inputLabel: 'entrada',
      outputLabel: 'salida',
      billingView: 'Vista de facturación',
      quotePrompt: '¿Necesitas una cotización para este flujo? Comparte volumen, región y requisitos de datos para revisar la ruta actual.',
      viewRateMatrix: 'Ver matriz de tarifas actual',
    },
    onboarding: {
      title: 'De la evaluación al tráfico gobernado',
      subtitle: 'Conserva tu formato de solicitud, valida una ruta actual y adjunta las condiciones de datos y servicio antes de producción.',
      stepPrefix: 'PASO',
      step1Title: 'Crear una cuenta de desarrollo',
      step1Desc: 'Empieza con un espacio de prueba y revisa el catálogo actual de rutas.',
      step2Title: 'Generar una clave API',
      step2Desc: 'Crea claves de prueba o producción con límites y alertas de uso.',
      step3Title: 'Seleccionar una ruta actual',
      step3Desc: 'Configura la URL de la pasarela y el ID del modelo en tu cliente.',
      step4Title: 'Revisar condiciones operativas',
      step4Desc: 'Confirma tarifa, retención y alcance del servicio antes del lanzamiento.',
      step1Action: 'Crear espacio',
      step2Action: 'Generar clave',
      step3Action: 'Ver documentación',
      step4Action: 'Solicitar paquete contractual',
    },
    compliance: {
      title: 'Cumplimiento con trazabilidad',
      subtitle: 'Ofrece a ingeniería, seguridad y compras un registro revisable de acceso a modelos, tratamiento de datos y obligaciones de servicio.',
      legalAssuranceTag: 'Revisión Legal y de Compras',
      policyTitle: 'Alcance de tratamiento de datos de la cuenta',
      policyDesc: 'Revisa el procesamiento transfronterizo, los límites de acceso y los requisitos internos con la documentación aplicable y el contrato de cuenta.',
      requestDocCta: 'Solicitar Paquete de Gobernanza',
      contactCta: 'Contactar Ventas',
      provideTitle: 'Qué puede revisar el equipo',
      provideItem1: 'Acuerdo marco de servicios B2B (MSA)',
      provideItem2: 'Alcance del acuerdo de tratamiento de datos (DPA)',
      provideItem3: 'Calendario de servicio y escalado',
      provideItem4: 'Controles de tratamiento, retención y entrenamiento',
    },
    pricingView: {
      title: 'Precios ligados a la ruta actual',
      subtitle: 'Elige un plan operativo y confirma la disponibilidad del modelo, la tarifa, la política de datos y el alcance del servicio antes de producción.',
      tierRecommended: 'Recomendado',
      tierPopular: 'Más Popular',
      tierSelect: 'Seleccionar Plan',
      customEnterprise: 'Plan Personalizado Empresa',
      tierDeveloper: 'Construcción',
      tierProduction: 'Producción',
      tierContract: 'Contrato',
    },
    modals: {
      contractTitle: 'Solicitud de Acuerdo de Procesamiento de Datos (DPA)',
      contractDesc: 'Solicita el contrato de gobernanza B2B actual para revisión de compras.',
      apiKeysTitle: 'Gestión de Claves API y Credenciales',
      apiKeysDesc: 'Genera y gestiona claves API de producción para un contrato de cliente compatible con OpenAI.',
      pingTitle: 'Diagnóstico de salud de ruta en vivo',
      pingDesc: 'Inspecciona la telemetría de respuesta de una ruta de modelo desde las regiones de prueba disponibles.',
      runDiagnostic: 'Ejecutar Diagnóstico de Ruta',
      originLabel: 'Seleccionar Región de Origen:',
      modelLabel: 'Seleccionar Modelo Objetivo:',
      ttft: 'Tiempo Hasta Primer Token (TTFT)',
      totalLatency: 'Latencia Total de Ida y Vuelta',
      tps: 'Velocidad de Tokens',
    },
    common: {
      testApiKey: 'Probar API Key',
      requestDpa: 'Solicitar Contrato DPA',
      viewDocs: 'Ver Documentación API',
      contactSales: 'Hablar con Ventas',
      copyCode: 'Copiar Código',
      copied: '¡Copiado!',
      close: 'Cerrar',
      language: 'Idioma',
      toggleNavigation: 'Alternar menú de navegación',
    },
    footer: {
      desc: 'Helstera es una pasarela de IA compatible con OpenAI para rutas actuales, condiciones operativas por cuenta y controles de datos revisables.',
      colPlatform: 'Plataforma y Pasarela',
      colCompliance: 'Legal y Cumplimiento',
      colCompany: 'Compañía',
      copyright: 'Helstera AI Gateway (helstera.com). Todos los derechos reservados.',
    }
  },
  de: {
    ...LOCALIZED_CONTENT.de,
    nav: {
      home: 'Übersicht',
      pricing: 'Preise',
      compliance: 'Compliance',
      docs: 'API Docs',
      about: 'Über uns',
      blog: 'Blog',
      contact: 'Kontakt',
      getApiKey: 'API Key holen',
      currency: 'Währung',
    },
    hero: {
      eyebrowTag: 'AKTUELLE MODELLROUTEN • OPENAI-KOMPATIBLES GATEWAY [01]',
      mainTitle: 'Aktuelle Frontier-Modelle. Eine gesteuerte Route.',
      subtitle: 'Nutzen Sie aktuelle DeepSeek-, Qwen-, Kimi- und GLM-Routen über ein OpenAI-kompatibles Gateway. Verfügbarkeit und Tarife sehen Sie auf Kontoebene.',
      primaryCta: 'API-Zugriff Anfordern',
      secondaryCta: 'Enterprise-Kontrollen Prüfen',
      statRoutes: 'AKTUELLE MODELLROUTEN',
      statRateCard: 'KONTO-TARIFKARTE',
      statTerms: 'SERVICEBEDINGUNGEN',
      routeUnit: 'Routen',
      liveValue: 'LIVE',
      familiesLabel: 'MODELLFAMILIEN',
      familyUnit: 'Familien',
      contractValue: 'DPA',
      contractSubline: 'Servicebedingungen',
      contractReview: 'Für Vertragsprüfung bereit',
      finalTitle: 'Mit einem aktuellen Routenkatalog starten',
      finalSubtitle: 'Starten Sie mit aktueller Verfügbarkeit, Kontotarifen und einem prüfbaren Governance-Paket.',
      testPing: 'Routenstatus Prüfen',
      modelsRates: 'Routenkatalog Öffnen',
    },
    routeVisualizer: {
      gatewayTitle: 'Helstera Gateway',
      dataPolicyLabel: 'Datenrichtlinie des Kontos',
      rateLabel: 'Tarif:',
      healthLabel: 'Routengesundheit:',
      callApi: 'API Aufrufen',
      copySnippet: 'Code Kopieren',
      snippetComment: '# OpenAI-kompatibler Routenvertrag',
    },
    bento: {
      tag: 'MODELLROUTING & DATENKONTROLLEN [02]',
      title: 'Aktuelle Routen, klare Betriebsbedingungen',
      subtitle: 'Nutzen Sie einen stabilen API-Vertrag für Modellzugriff, kontoabhängiges Routing und prüfbare Datenverarbeitung.',
      unitEconomicsTitle: 'Die aktuelle Tarifkarte nutzen',
      unitEconomicsDesc: 'Modellpreise und Verfügbarkeit ändern sich. Bestätigen Sie die Tarifkarte der gewählten Route vor Produktionsverkehr.',
      sdkCompatTitle: 'Ihren API-Vertrag behalten',
      sdkCompatDesc: 'Stellen Sie die Base-URL in Python, Node.js, LangChain oder Ihrem eigenen Client um und wählen Sie die Route per ID.',
      dpaTitle: 'Governance für die Beschaffungsprüfung',
      dpaDesc: 'Prüfen Sie Datenverarbeitung, Serviceumfang und Kontopflichten vor dem Rollout gemeinsam mit Recht und Einkauf.',
      dpaCta: 'Vertragspaket Anfordern',
      dataPolicyTitle: 'Prüfbare Aufbewahrungsbedingungen',
      dataPolicyDesc: 'Definieren Sie Aufbewahrungs- und Trainingsgrenzen für Ihr Konto und hinterlegen Sie die freigegebene Richtlinie im Produktionsvertrag.',
      dataPolicyBadge: 'Policy-first Routing',
      slaTitle: 'Mit aktuellen Routensignalen wählen',
      slaDesc: 'Nutzen Sie Kontotelemetrie, Status und Routengesundheit und halten Sie aktuelle Evidenz neben der Routenentscheidung.',
      slaCta: 'Entwicklerkonsole Öffnen',
    },
    story: {
      title: 'Eine Route. Ein Katalog, der sich weiterbewegt.',
      subtitle: 'Entdecken Sie vier Betriebsentscheidungen hinter einem aktuellen, gesteuerten KI-Gateway.',
      act1Badge: 'Governance',
      act1Title: 'Die Route prüfbar machen',
      act1Sub: 'Modellzugriff, Datenverarbeitung und Servicepflichten für Produktionsfreigaben sichtbar halten.',
      act1Desc: 'Helstera bündelt Gatewayvertrag, Routenumfang und Datenverarbeitungsbedingungen in einer gemeinsamen Betriebsansicht.',
      act2Badge: 'Aktuelle Modellauswahl',
      act2Title: 'Nach Fähigkeit wählen, nicht nach dem Ranking von gestern',
      act2Sub: 'Aktuelle allgemeine, Reasoning-, multimodale und Long-Context-Modelle über denselben API-Vertrag routen.',
      act2Desc: 'Der Katalog zeigt den Einsatzzweck jeder Route und verweist bei der Anfrage auf aktuelle Tarife und Verfügbarkeit.',
      act3Badge: 'Datenkontrollen',
      act3Title: 'Aufbewahrung neben der Route führen',
      act3Sub: 'Datenverarbeitung als Teil der Integrationsentscheidung behandeln, nicht als nachträgliche Fußnote.',
      act3Desc: 'Freigegebene Grenzen für Aufbewahrung, Training und Zugriff je Produktionskonto dokumentieren und prüfen.',
      act4Badge: 'Integration',
      act4Title: 'Ohne Anbieter-Neuschreibung migrieren',
      act4Sub: 'Anfrageformat beibehalten und nur Gateway-URL und Modell-ID ändern.',
      act4Desc: 'OpenAI-kompatible Clients behalten Nachrichten- und Antwortverarbeitung, während der aktuelle Routenvertrag kontrolliert geprüft wird.',
    },
    models: {
      title: 'Aktuelle Modellrouten',
      subtitle: 'Nach Fähigkeit wählen und Tarif, Verfügbarkeit und Servicebedingungen auf Kontoebene bestätigen.',
      viewBento: 'Karten',
      viewTable: 'Tabelle',
      searchPlaceholder: 'Routen suchen (z. B. DeepSeek, Qwen)...',
      testModel: 'Route Testen',
      category: 'Fähigkeit',
      rate: 'Tarifkarte',
      context: 'Kontext',
      health: 'Routengesundheit',
      filterAll: 'Alle Modelle',
      filterReasoning: 'Inferenz-Modelle',
      filterChat: 'Allgemeiner Chat',
      filterCoding: 'Coding',
      filterMultimodal: 'Multimodal',
      filterLongContext: 'Langer Kontext',
      noResults: 'Keine aktuellen Routen passen zu dieser Suche.',
      copyModelId: 'Modell-ID kopieren',
      copied: 'Kopiert',
      callApi: 'API Aufrufen',
    },
    calculator: {
      title: 'Nutzung planen, bevor der Tarif feststeht',
      subtitle: 'Monatlichen Traffic abschätzen und anschließend die aktuelle Kontotarifkarte der gewählten Route bestätigen.',
      volumeLabel: 'Monatliches Token-Volumen',
      openaiCost: 'Nutzungsmix',
      helsteraCost: 'Aktuelle Route',
      annualSavings: 'Tarifbedingungen des Kontos',
      liveTerms: 'Aktuelle Kontobedingungen',
      selectRouteLabel: '1. Aktuelle Modellroute auswählen',
      tokensUnit: 'M Tokens',
      inputLabel: 'Eingabe',
      outputLabel: 'Ausgabe',
      billingView: 'Abrechnungsansicht',
      quotePrompt: 'Benötigen Sie ein Angebot? Teilen Sie Volumen, Region und Datenanforderungen für eine aktuelle Routenprüfung.',
      viewRateMatrix: 'Aktuelle Tarifmatrix öffnen',
    },
    onboarding: {
      title: 'Von der Evaluierung zu gesteuertem Traffic',
      subtitle: 'Anfrageformat beibehalten, eine aktuelle Route prüfen und vor dem Produktionsstart Daten- und Servicebedingungen anhängen.',
      stepPrefix: 'SCHRITT',
      step1Title: 'Entwicklerkonto Erstellen',
      step1Desc: 'Mit einem Testarbeitsbereich starten und den aktuellen Routenkatalog prüfen.',
      step2Title: 'API-Schlüssel Generieren',
      step2Desc: 'Test- oder Produktionsschlüssel mit Limits und Nutzungswarnungen erstellen.',
      step3Title: 'Aktuelle Route Auswählen',
      step3Desc: 'Gateway-URL und Modell-ID im bestehenden Client setzen.',
      step4Title: 'Betriebsbedingungen Prüfen',
      step4Desc: 'Tarifkarte, Aufbewahrung und Serviceumfang vor dem Launch bestätigen.',
      step1Action: 'Arbeitsbereich Erstellen',
      step2Action: 'Schlüssel Generieren',
      step3Action: 'Integrationsdocs Öffnen',
      step4Action: 'Vertragspaket Anfordern',
    },
    compliance: {
      title: 'Compliance mit nachvollziehbarer Evidenz',
      subtitle: 'Engineering, Security und Einkauf erhalten eine gemeinsame prüfbare Übersicht zu Modellzugriff, Datenverarbeitung und Servicepflichten.',
      legalAssuranceTag: 'Rechts- und Beschaffungsprüfung',
      policyTitle: 'Datenverarbeitungsumfang des Kontos',
      policyDesc: 'Grenzüberschreitende Verarbeitung, Zugriffsschranken und interne Governance anhand der geltenden Unterlagen und des Kontovertrags prüfen.',
      requestDocCta: 'Governance-Paket Anfordern',
      contactCta: 'Vertrieb Kontaktieren',
      provideTitle: 'Was Teams prüfen können',
      provideItem1: 'Kommerzieller B2B-Master-Service-Vertrag (MSA)',
      provideItem2: 'Umfang des Datenverarbeitungsvertrags (DPA)',
      provideItem3: 'Serviceplan und Eskalationsbedingungen',
      provideItem4: 'Kontrollen für Verarbeitung, Aufbewahrung und Training',
    },
    pricingView: {
      title: 'Preise passend zur aktuellen Route',
      subtitle: 'Betriebsplan wählen und vor Produktionsverkehr Modellverfügbarkeit, Tarif, Datenrichtlinie und Serviceumfang des Kontos bestätigen.',
      tierRecommended: 'Empfohlen',
      tierPopular: 'Am Beliebtesten',
      tierSelect: 'Tarif Wählen',
      customEnterprise: 'Individueller Enterprise-Plan',
      tierDeveloper: 'Aufbau',
      tierProduction: 'Produktion',
      tierContract: 'Vertrag',
    },
    modals: {
      contractTitle: 'Antrag auf Datenverarbeitungsvertrag (DPA)',
      contractDesc: 'Fordern Sie den aktuellen B2B-Governance-Vertrag zur Prüfung durch den Einkauf an.',
      apiKeysTitle: 'API-Schlüssel-Verwaltung & Anmeldedaten',
      apiKeysDesc: 'Erstellen und verwalten Sie Produktions-API-Schlüssel für einen OpenAI-kompatiblen Clientvertrag.',
      pingTitle: 'Live-Diagnose für Routengesundheit',
      pingDesc: 'Antworttelemetrie einer ausgewählten Modellroute aus verfügbaren Testregionen prüfen.',
      runDiagnostic: 'Routendiagnose Starten',
      originLabel: 'Test-Region Auswählen:',
      modelLabel: 'Ziel-Modell Auswählen:',
      ttft: 'Zeit bis zum Ersten Token (TTFT)',
      totalLatency: 'Gesamte Latenz (Roundtrip)',
      tps: 'Streaming-Geschwindigkeit',
    },
    common: {
      testApiKey: 'API Key Testen',
      requestDpa: 'DPA-Vertrag Anfordern',
      viewDocs: 'API Docs Ansehen',
      contactSales: 'Mit Vertrieb Sprechen',
      copyCode: 'Code Kopieren',
      copied: 'Kopiert!',
      close: 'Schließen',
      language: 'Sprache',
      toggleNavigation: 'Navigationsmenü umschalten',
    },
    footer: {
      desc: 'Helstera ist ein OpenAI-kompatibles KI-Gateway für aktuelle Modellrouten, kontoabhängige Betriebsbedingungen und prüfbare Datenkontrollen.',
      colPlatform: 'Plattform & Gateway',
      colCompliance: 'Recht & Compliance',
      colCompany: 'Unternehmen',
      copyright: 'Helstera AI Gateway (helstera.com). Alle Rechte vorbehalten.',
    }
  },
  fr: {
    ...LOCALIZED_CONTENT.fr,
    nav: {
      home: 'Aperçu',
      pricing: 'Tarifs',
      compliance: 'Conformité',
      docs: 'Docs API',
      about: 'À propos',
      blog: 'Blog',
      contact: 'Contact',
      getApiKey: 'Obtenir Clé API',
      currency: 'Devise',
    },
    hero: {
      eyebrowTag: 'ROUTES DE MODÈLES ACTUELLES • PASSERELLE COMPATIBLE OPENAI [01]',
      mainTitle: 'Modèles actuels. Une route gouvernée.',
      subtitle: 'Accédez aux routes actuelles DeepSeek, Qwen, Kimi et GLM via une passerelle compatible OpenAI. Confirmez disponibilité et tarifs depuis votre compte.',
      primaryCta: 'Demander un Accès API',
      secondaryCta: 'Vérifier les Contrôles Entreprise',
      statRoutes: 'ROUTES ACTUELLES',
      statRateCard: 'TARIF DU COMPTE',
      statTerms: 'CONDITIONS DE SERVICE',
      routeUnit: 'routes',
      liveValue: 'EN DIRECT',
      familiesLabel: 'FAMILLES DE MODÈLES',
      familyUnit: 'familles',
      contractValue: 'DPA',
      contractSubline: 'Conditions de service',
      contractReview: 'Prêt pour revue contractuelle',
      finalTitle: 'Commencer avec un catalogue de routes actuel',
      finalSubtitle: 'Commencez avec la disponibilité actuelle, les tarifs du compte et un dossier de gouvernance vérifiable.',
      testPing: 'Vérifier la Santé de la Route',
      modelsRates: 'Voir le Catalogue des Routes',
    },
    routeVisualizer: {
      gatewayTitle: 'Passerelle Helstera',
      dataPolicyLabel: 'Politique de données du compte',
      rateLabel: 'Tarif :',
      healthLabel: 'Santé de la route :',
      callApi: 'Appeler l\'API',
      copySnippet: 'Copier le Code',
      snippetComment: '# Contrat de route compatible OpenAI',
    },
    bento: {
      tag: 'ROUTAGE DES MODÈLES & CONTRÔLES DES DONNÉES [02]',
      title: 'Routes actuelles, conditions claires',
      subtitle: 'Utilisez un contrat API stable pour l’accès aux modèles, le routage par compte et un traitement des données vérifiable.',
      unitEconomicsTitle: 'Utiliser le tarif actuel',
      unitEconomicsDesc: 'Les tarifs et la disponibilité changent. Confirmez le tarif du compte pour la route choisie avant le trafic de production.',
      sdkCompatTitle: 'Conserver votre contrat API',
      sdkCompatDesc: 'Pointez l’URL de base vers Helstera depuis Python, Node.js, LangChain ou votre client et sélectionnez la route par ID.',
      dpaTitle: 'Gouvernance prête pour les achats',
      dpaDesc: 'Examinez le traitement des données, le périmètre de service et les obligations du compte avec les équipes juridiques et achats.',
      dpaCta: 'Demander le Dossier Contractuel',
      dataPolicyTitle: 'Conditions de conservation vérifiables',
      dataPolicyDesc: 'Définissez les limites de conservation et d’entraînement du compte, puis rattachez la politique approuvée au contrat de production.',
      dataPolicyBadge: 'Routage orienté politique',
      slaTitle: 'Choisir avec les signaux de route en direct',
      slaDesc: 'Utilisez la télémétrie, l’état et la santé de la route du compte en gardant les preuves actuelles près de la décision de routage.',
      slaCta: 'Ouvrir la Console Développeur',
    },
    story: {
      title: 'Une route. Un catalogue qui continue d’évoluer.',
      subtitle: 'Découvrez les quatre décisions opérationnelles d’une passerelle IA actuelle et gouvernée.',
      act1Badge: 'Gouvernance',
      act1Title: 'Rendre la route vérifiable',
      act1Sub: 'Garder visibles l’accès aux modèles, le traitement des données et les obligations de service pour les approbateurs.',
      act1Desc: 'Helstera regroupe contrat de passerelle, périmètre de route et conditions de traitement dans une même vue opérationnelle.',
      act2Badge: 'Choix de modèle actuel',
      act2Title: 'Choisir par capacité, pas selon le classement d’hier',
      act2Sub: 'Router les modèles actuels généralistes, de raisonnement, multimodaux et à long contexte avec le même contrat API.',
      act2Desc: 'Le catalogue indique l’usage de chaque route et renvoie aux informations de tarif et de disponibilité au moment de la demande.',
      act3Badge: 'Contrôles des données',
      act3Title: 'Placer la conservation près de la route',
      act3Sub: 'Faire du traitement des données une décision d’intégration, pas une note ajoutée après le lancement.',
      act3Desc: 'Documenter les limites approuvées de conservation, d’entraînement et d’accès pour chaque compte de production.',
      act4Badge: 'Intégration',
      act4Title: 'Migrer sans réécrire le fournisseur',
      act4Sub: 'Conserver le format de requête et changer l’URL de la passerelle et l’ID du modèle.',
      act4Desc: 'Les clients compatibles OpenAI conservent leur gestion des messages et réponses pendant la validation du contrat de route.',
    },
    models: {
      title: 'Routes de modèles actuelles',
      subtitle: 'Choisissez par capacité et confirmez tarif, disponibilité et conditions de service au niveau du compte.',
      viewBento: 'Cartes',
      viewTable: 'Tableau',
      searchPlaceholder: 'Rechercher une route (ex. DeepSeek, Qwen)...',
      testModel: 'Tester la Route',
      category: 'Capacité',
      rate: 'Tarif',
      context: 'Contexte',
      health: 'Santé de la route',
      filterAll: 'Tous les Modèles',
      filterReasoning: 'Modèles de Raisonnement',
      filterChat: 'Chat Général',
      filterCoding: 'Code',
      filterMultimodal: 'Multimodal',
      filterLongContext: 'Long Contexte',
      noResults: 'Aucune route actuelle ne correspond à cette recherche.',
      copyModelId: 'Copier l’identifiant du modèle',
      copied: 'Copié',
      callApi: 'Appeler l’API',
    },
    calculator: {
      title: 'Planifier l’usage avant de confirmer le tarif',
      subtitle: 'Estimez le trafic mensuel puis confirmez le tarif actuel du compte pour la route sélectionnée.',
      volumeLabel: 'Volume mensuel de tokens',
      openaiCost: 'Répartition de l’usage',
      helsteraCost: 'Route actuelle',
      annualSavings: 'Conditions tarifaires du compte',
      liveTerms: 'Conditions actuelles du compte',
      selectRouteLabel: '1. Sélectionner une route de modèle actuelle',
      tokensUnit: 'M tokens',
      inputLabel: 'entrée',
      outputLabel: 'sortie',
      billingView: 'Vue de facturation',
      quotePrompt: 'Besoin d’un devis pour cette charge ? Partagez le volume, la région et les exigences de données pour revoir la route actuelle.',
      viewRateMatrix: 'Voir la matrice tarifaire actuelle',
    },
    onboarding: {
      title: 'De l’évaluation au trafic gouverné',
      subtitle: 'Conservez le format de requête, validez une route actuelle et rattachez les conditions de données et de service avant la production.',
      stepPrefix: 'ÉTAPE',
      step1Title: 'Créer un compte développeur',
      step1Desc: 'Commencez avec un espace de test et consultez le catalogue actuel des routes.',
      step2Title: 'Générer une clé API',
      step2Desc: 'Créez des clés de test ou de production avec limites et alertes d’usage.',
      step3Title: 'Sélectionner une route actuelle',
      step3Desc: 'Configurez l’URL de la passerelle et l’ID du modèle dans votre client.',
      step4Title: 'Vérifier les conditions opérationnelles',
      step4Desc: 'Confirmez tarif, conservation et périmètre de service avant le lancement.',
      step1Action: 'Créer un espace',
      step2Action: 'Générer la clé',
      step3Action: 'Voir la documentation',
      step4Action: 'Demander le dossier contractuel',
    },
    compliance: {
      title: 'Conformité avec une piste d’audit',
      subtitle: 'Offrez à l’ingénierie, à la sécurité et aux achats un dossier vérifiable sur l’accès aux modèles, les données et le service.',
      legalAssuranceTag: 'Revue Juridique et Achats',
      policyTitle: 'Périmètre de traitement des données du compte',
      policyDesc: 'Examinez le traitement transfrontalier, les limites d’accès et les exigences internes avec les documents applicables et le contrat du compte.',
      requestDocCta: 'Demander le Dossier de Gouvernance',
      contactCta: 'Contacter les Ventes',
      provideTitle: 'Ce que les équipes peuvent vérifier',
      provideItem1: 'Accord-cadre de services B2B (MSA)',
      provideItem2: 'Périmètre de l’accord de traitement des données (DPA)',
      provideItem3: 'Calendrier de service et conditions d’escalade',
      provideItem4: 'Contrôles de traitement, conservation et entraînement',
    },
    pricingView: {
      title: 'Tarifs liés à la route actuelle',
      subtitle: 'Choisissez un plan opérationnel et confirmez disponibilité, tarif, politique de données et périmètre de service avant la production.',
      tierRecommended: 'Recommandé',
      tierPopular: 'Le Plus Populaire',
      tierSelect: 'Choisir l\'Offre',
      customEnterprise: 'Offre Entreprise Sur Mesure',
      tierDeveloper: 'Construction',
      tierProduction: 'Production',
      tierContract: 'Contrat',
    },
    modals: {
      contractTitle: 'Demande d\'Accord de Traitement des Données (DPA)',
      contractDesc: 'Demandez le contrat de gouvernance B2B actuel pour la revue des achats.',
      apiKeysTitle: 'Gestion des Clés API et Identifiants',
      apiKeysDesc: 'Générez et gérez des clés API de production pour un contrat client compatible OpenAI.',
      pingTitle: 'Diagnostic en direct de la santé de la route',
      pingDesc: 'Inspectez la télémétrie de réponse d’une route de modèle depuis les régions de test disponibles.',
      runDiagnostic: 'Lancer le Diagnostic de Route',
      originLabel: 'Sélectionner la Région d\'Origine :',
      modelLabel: 'Sélectionner le Modèle Cible :',
      ttft: 'Temps Jusqu\'au Premier Token (TTFT)',
      totalLatency: 'Latence Totale Aller-Retour',
      tps: 'Vitesse de Streaming',
    },
    common: {
      testApiKey: 'Tester la Clé API',
      requestDpa: 'Demander un Contrat DPA',
      viewDocs: 'Voir la Documentation API',
      contactSales: 'Parler aux Ventes',
      copyCode: 'Copier le Code',
      copied: 'Copié !',
      close: 'Fermer',
      language: 'Langue',
      toggleNavigation: 'Afficher ou masquer le menu de navigation',
    },
    footer: {
      desc: 'Helstera est une passerelle IA compatible OpenAI pour les routes actuelles, les conditions opérationnelles par compte et les contrôles de données vérifiables.',
      colPlatform: 'Plateforme & Passerelle',
      colCompliance: 'Juridique & Conformité',
      colCompany: 'Entreprise',
      copyright: 'Helstera AI Gateway (helstera.com). Tous droits réservés.',
    }
  }
};
