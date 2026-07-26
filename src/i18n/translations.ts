export type Language = 'en' | 'zh' | 'ja' | 'es' | 'de' | 'fr';

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
    statCost: string;
    statLatency: string;
    statUptime: string;
    testPing: string;
    modelsRates: string;
  };
  routeVisualizer: {
    gatewayTitle: string;
    zeroDataRetention: string;
    rateLabel: string;
    latencyLabel: string;
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
    zdrTitle: string;
    zdrDesc: string;
    zdrBadge: string;
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
    savings: string;
    context: string;
    sla: string;
    filterAll: string;
    filterReasoning: string;
    filterChat: string;
    inputPrice: string;
    outputPrice: string;
  };
  calculator: {
    title: string;
    subtitle: string;
    volumeLabel: string;
    openaiCost: string;
    helsteraCost: string;
    annualSavings: string;
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
      eyebrowTag: 'PILOT ZONE APPROVED • CROSS-BORDER COMPUTE GATEWAY [01]',
      mainTitle: 'Enterprise Cloud Compute. Global Reach.',
      subtitle: 'Managed enterprise cloud compute from Pilot Zone hubs (Local edge compute nodes in Phase II roadmap). Save 80% with 99.9% uptime SLA.',
      primaryCta: 'Get Started with $5 Credit',
      secondaryCta: 'View Enterprise Compliance',
      statCost: 'COST SAVINGS VS OPENAI',
      statLatency: 'LATENCY SLA GUARANTEE',
      statUptime: 'ENTERPRISE UPTIME SLA',
      testPing: 'Test Gateway Ping',
      modelsRates: 'Models & Rates',
    },
    routeVisualizer: {
      gatewayTitle: 'Helstera Gateway',
      zeroDataRetention: 'Zero Data Retention',
      rateLabel: 'Rate:',
      latencyLabel: 'Latency:',
      callApi: 'Call API',
      copySnippet: 'Copy Code Snippet',
      snippetComment: '# 100% OpenAI Drop-In Replacement',
    },
    bento: {
      tag: 'REGULATED INFRASTRUCTURE ARCHITECTURE [02]',
      title: 'Engineered for Enterprise Compliance & Speed',
      subtitle: 'Direct optical connectivity and pilot zone regulatory protections yield unmatched unit economics and legal safety.',
      unitEconomicsTitle: 'Up to 80% Cost Advantage vs OpenAI',
      unitEconomicsDesc: 'By aggregating compute directly within Shantou Pilot Zone data center hubs, we pass favorable electricity and open-weights MoE efficiencies straight to developers.',
      sdkCompatTitle: '1-Line OpenAI Drop-in',
      sdkCompatDesc: 'Zero code rewrites. Point baseURL to Helstera in Python, Node.js, LangChain, or AutoGPT.',
      dpaTitle: 'Shantou Pilot Zone DPA',
      dpaDesc: 'Authorized legal framework under Shantou Overseas Chinese Pilot Zone Data Processing policy, backed by formal B2B contracts.',
      dpaCta: 'Request DPA Contract',
      zdrTitle: 'Zero Data Retention (ZDR)',
      zdrDesc: 'Prompts are processed strictly in volatile RAM and purged instantly upon response completion. Zero disk logging, zero model training.',
      zdrBadge: 'RAM-Only Volatile Execution',
      slaTitle: 'Sub-180ms SLA & Marine Optic',
      slaDesc: 'Dedicated marine optical cables bypass public Internet hops with guaranteed 99.9% uptime SLA for mission-critical enterprise apps.',
      slaCta: 'Get API Key ($5 Trial)',
    },
    story: {
      title: 'One Gateway. Infinite Compute Potential.',
      subtitle: 'Scroll or click through the 4 acts of Helstera’s cross-border infrastructure.',
      act1Badge: 'Regulatory Framework',
      act1Title: 'Shantou Pilot Zone Legal Framework',
      act1Sub: 'Government-sanctioned cross-border "Data Processing" (来数加工) pilot zone.',
      act1Desc: 'Under Guangdong provincial policy, customer prompt data enters dedicated offshore compute nodes without legal ambiguity. Fully compliant with international data export laws.',
      act2Badge: 'Cost Efficiency',
      act2Title: '80% Token Price Reduction',
      act2Sub: 'Run DeepSeek-V3 & R1 reasoning models at fraction of Western API costs.',
      act2Desc: 'Leveraging green energy grid advantages and native open-weights optimizations in Shantou hubs to deliver top-tier inference at $0.14 - $0.55 per million input tokens.',
      act3Badge: 'RAM Volatile Security',
      act3Title: 'Zero-Retention RAM Processing',
      act3Sub: 'Ephemeral volatile execution with zero disk logging or LLM retraining.',
      act3Desc: 'Requests are buffered in encrypted volatile memory and erased the exact millisecond the last token streams to your app client.',
      act4Badge: 'Instant Migration',
      act4Title: 'OpenAI SDK 1-Line Drop-in',
      act4Sub: 'No complex migration engineering or prompt modifications required.',
      act4Desc: 'Works out-of-the-box with existing OpenAI client libraries across Python, TypeScript, Go, LangChain, and LlamaIndex.',
    },
    models: {
      title: 'Supported LLM Models & Live Benchmark',
      subtitle: 'Direct access to leading open-weights models at transparent per-token prices.',
      viewBento: 'Bento Grid',
      viewTable: 'Compact Table',
      searchPlaceholder: 'Search models (e.g. DeepSeek, Qwen)...',
      testModel: 'Test Model',
      savings: 'SAVINGS',
      context: 'Context',
      sla: 'SLA',
      filterAll: 'All Models',
      filterReasoning: 'Reasoning Models',
      filterChat: 'General Chat',
      inputPrice: 'Input / 1M',
      outputPrice: 'Output / 1M',
    },
    calculator: {
      title: 'Estimate Your Monthly Cost Savings',
      subtitle: 'Compare Helstera token pricing directly against standard OpenAI baseline rates.',
      volumeLabel: 'Monthly Token Usage',
      openaiCost: 'Standard OpenAI Benchmark',
      helsteraCost: 'Helstera Gateway Cost',
      annualSavings: 'Net Annual Savings',
    },
    onboarding: {
      title: 'Start Calling Models in 4 Simple Steps',
      subtitle: 'Transition your existing AI pipelines to Helstera in under 60 seconds with 100% OpenAI SDK drop-in compatibility.',
      stepPrefix: 'STEP',
      step1Title: 'Create Free Account',
      step1Desc: 'Register with email or GitHub OAuth. Get instant $5 test balance.',
      step1Action: 'Create Account',
      step2Title: 'Generate API Key',
      step2Desc: 'Create production keys with custom rate limits directly in the dashboard.',
      step2Action: 'Get Free API Key',
      step3Title: 'Update 1 Line in SDK',
      step3Desc: 'Point base_url to https://api.helstera.com/v1 in Python, TS, or AutoGPT.',
      step3Action: 'View Docs & Code',
      step4Title: 'Top Up & Formal DPA',
      step4Desc: 'Pay via Stripe, SWIFT wire, or request enterprise custom DPA & contracts.',
      step4Action: 'Request Enterprise DPA',
    },
    compliance: {
      title: 'Compliance You Can Trust',
      subtitle: 'Helstera is designed from the ground up to meet the needs of overseas companies that require legal clarity and data protection.',
      legalAssuranceTag: 'Legal & Procurement Assurance',
      policyTitle: 'Shantou Pilot Zone "Data Processing" Policy',
      policyDesc: 'Enables overseas enterprises to utilize premier LLM inference while meeting internal procurement, legal, and GDPR-aligned data governance requirements.',
      requestDocCta: 'Request Compliance Documents',
      contactCta: 'Contact Us',
      provideTitle: 'What We Provide',
      provideItem1: 'Formal Commercial B2B Master Service Agreement',
      provideItem2: 'Legally binding Data Processing Agreement (DPA)',
      provideItem3: '99.9% Service Level Agreement (SLA) Guarantee',
      provideItem4: 'Clear data handling and zero-retention security documentation',
    },
    pricingView: {
      title: 'Transparent Pricing for Developers & Enterprise',
      subtitle: 'Pay-as-you-go per 1M tokens. Access DeepSeek, Qwen, GLM, MiniMax, and Doubao with formal DPA legal compliance guarantees and 99.9% uptime SLA.',
      tierRecommended: 'Recommended',
      tierPopular: 'Most Popular',
      tierSelect: 'Select Tier',
      customEnterprise: 'Custom Enterprise Plan',
    },
    modals: {
      contractTitle: 'Enterprise Data Processing Agreement (DPA)',
      contractDesc: 'Request an official Shantou Pilot Zone B2B compliance contract for corporate procurement.',
      apiKeysTitle: 'API Key Management & Credentials',
      apiKeysDesc: 'Generate and manage production API keys with 100% OpenAI SDK compatibility.',
      pingTitle: 'Live Cross-Border Gateway Ping Diagnostic',
      pingDesc: 'Test real-time optical latency and RAM execution from global edge origins.',
      runDiagnostic: 'Run Gateway Diagnostic',
      originLabel: 'Select Test Origin Region:',
      modelLabel: 'Select Target Model:',
      ttft: 'Time To First Token (TTFT)',
      totalLatency: 'Total Roundtrip Latency',
      tps: 'Streaming Speed',
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
    },
    footer: {
      desc: 'Helstera is the premier compliant cross-border AI compute gateway, bridging global developers with flagship LLMs through authorized cross-border legal frameworks.',
      colPlatform: 'Platform & Gateway',
      colCompliance: 'Legal & Compliance',
      colCompany: 'Company',
      copyright: 'Helstera AI Gateway (helstera.com). All rights reserved.',
    }
  },
  zh: {
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
      eyebrowTag: '试验区合规批准 • 跨境 AI 算力网关 [01]',
      mainTitle: '企业级云端算力。全球触达。',
      subtitle: '当前上线提供企业级云端/试点区托管算力（本地/边缘算力节点将在 Phase II 阶段开发上线）。节省 80% Token 成本并提供 99.9% 企业级 SLA 保障。',
      primaryCta: '领 $5 赠款即刻体验',
      secondaryCta: '查看企业合规资质',
      statCost: '对比 OPENAI 节省成本',
      statLatency: '延迟 SLA 保障',
      statUptime: '企业级可用性 SLA',
      testPing: '测试网关延迟 Ping',
      modelsRates: '模型与费率',
    },
    routeVisualizer: {
      gatewayTitle: 'Helstera 网关',
      zeroDataRetention: '零数据留存 (ZDR)',
      rateLabel: '费率：',
      latencyLabel: '延迟：',
      callApi: '调用 API',
      copySnippet: '复制示例代码',
      snippetComment: '# 100% 兼容 OpenAI SDK 无缝无感替换',
    },
    bento: {
      tag: '合规基础设施架构 [02]',
      title: '专为企业合规与高并发速度打造',
      subtitle: '光纤直连通道与华侨试验区政策保障，带来无与伦比的性价比与法律安全性。',
      unitEconomicsTitle: '对比 OpenAI 节省高达 80% 成本',
      unitEconomicsDesc: '通过将算力直接聚合在汕头华侨试验区数据中心，我们把清洁能源与开源 MoE 模型的高效性能直接让利给全球开发者。',
      sdkCompatTitle: '一行代码无缝无感替换 OpenAI',
      sdkCompatDesc: '零代码改造成本。只需在 Python、Node.js、LangChain 或 AutoGPT 中将 baseURL 指向 Helstera。',
      dpaTitle: '汕头试验区官方 DPA 合规协议',
      dpaDesc: '依托汕头华侨试验区“来数加工”合规框架，提供正式企业 B2B 数据处理合同（DPA）保障。',
      dpaCta: '申请 DPA 合规合同',
      zdrTitle: '零数据留存 (Zero Data Retention)',
      zdrDesc: '提示词仅在 RAM 挥发性内存中瞬态运行，响应完成后即刻销毁。零磁盘日志，零模型二次训练。',
      zdrBadge: '纯 RAM 内存挥发执行',
      slaTitle: '低于 180ms 延迟与海底光纤专线',
      slaDesc: '专有海底光纤绕过公共互联网拥堵，提供 99.9% 连通性 SLA，保障核心企业应用稳定运行。',
      slaCta: '获取 API Key ($5 试用)',
    },
    story: {
      title: '统一网关，释放无限算力潜能。',
      subtitle: '滑动或点击浏览 Helstera 跨境 AI 算力网关的 4 大核心模块。',
      act1Badge: '政策合规框架',
      act1Title: '汕头华侨试验区“来数加工”合规机制',
      act1Sub: '政府批准的跨境数据处理专项政策试验区。',
      act1Desc: '依据广东省华侨试验区专项政策，海外客户提示词数据依法进入专用离岸算力节点，无法律模糊地带。',
      act2Badge: '极致成本优势',
      act2Title: 'Token 结算价格立降 80%',
      act2Sub: '以西方 API 零头的价格运行 DeepSeek-V3 及 R1 深度推理模型。',
      act2Desc: '充分利用汕头数据中心的清洁能源与原生开源模型优化，提供 $0.14 - $0.55 / 1M Token 的极致性价比。',
      act3Badge: 'RAM 内存安全隔离',
      act3Title: '零留存内存挥发处理',
      act3Sub: '瞬态内存执行，零磁盘日志，零模型二次训练。',
      act3Desc: '请求在加密瞬态内存中缓冲，当最后一个 Token 传输给客户端的毫秒级时间内被完全彻底擦除。',
      act4Badge: '无缝平滑迁移',
      act4Title: 'OpenAI SDK 一行代码无缝替换',
      act4Sub: '无须复杂的迁移工程或调整 Prompt 提示词结构。',
      act4Desc: '开箱即用支持现有的 OpenAI Python、TypeScript、Go、LangChain 和 LlamaIndex 官方客户端。',
    },
    models: {
      title: '支持的 LLM 模型与实时基准测速',
      subtitle: '直接调用业界顶尖开源大模型，透明计费，按 Token 实时结算。',
      viewBento: '网关卡片',
      viewTable: '紧凑表格',
      searchPlaceholder: '搜索模型 (例如 DeepSeek, Qwen)...',
      testModel: '测试模型',
      savings: '省钱比例',
      context: '上下文',
      sla: 'SLA 保障',
      filterAll: '全部模型',
      filterReasoning: '深度推理模型',
      filterChat: '通用对话模型',
      inputPrice: '输入 / 1M',
      outputPrice: '输出 / 1M',
    },
    calculator: {
      title: '评估您的月度 Token 成本节省',
      subtitle: '对比 Helstera 算力网关与西方 API 的标准费用。',
      volumeLabel: '预计月度 Token 用量',
      openaiCost: '标准西方 API 基准费用',
      helsteraCost: 'Helstera 算力网关费用',
      annualSavings: '预估年度净节省金额',
    },
    onboarding: {
      title: '只需 4 步，轻松开启算力调用',
      subtitle: '支持 100% 兼容 OpenAI SDK，60 秒内将现有的 AI 管线平滑无缝迁移至 Helstera。',
      stepPrefix: '步骤',
      step1Title: '注册免费账户',
      step1Desc: '使用邮箱或 GitHub 一键登录，即刻获赠 $5 体验算力金。',
      step2Title: '生成 API 密钥',
      step2Desc: '在控制台中轻松创建具有自定义速率限制的生产级 API Key。',
      step3Title: '修改 1 行 SDK 代码',
      step3Desc: '在 Python、TS 或 AutoGPT 中将 base_url 指向 https://api.helstera.com/v1。',
      step4Title: '充值与签署 DPA',
      step4Desc: '支持信用卡、 Stripe、电汇充值，或申请企业专属 DPA 合规协议。',
      step1Action: '创建账户',
      step2Action: '免费获取 Key',
      step3Action: '查看文档代码',
      step4Action: '申请企业 DPA',
    },
    compliance: {
      title: '值得信赖的企业级合规保障',
      subtitle: 'Helstera 专为海外企业打造，满足对法律透明度、采购合规和数据安全隐私的严格要求。',
      legalAssuranceTag: '法律与采购安全保障',
      policyTitle: '汕头华侨试验区“来数加工”政策',
      policyDesc: '让海外企业在合法合规使用顶尖大模型推理的同时，满足内部法务审评、采购准入及 GDPR 数据治理标准。',
      requestDocCta: '索取合规文件与资质',
      contactCta: '联系商务团队',
      provideTitle: '我们提供的保障',
      provideItem1: '正式的商业 B2B 主服务协议 (MSA)',
      provideItem2: '具有法律效力的数据处理协议 (DPA)',
      provideItem3: '99.9% 服务可用性协议 (SLA) 保障',
      provideItem4: '清晰的数据流转与零数据留存 (ZDR) 安全白皮书',
    },
    pricingView: {
      title: '开发者与企业透明计费方案',
      subtitle: '按需付费，按 1M Token 结算。调用 DeepSeek、Qwen、GLM、MiniMax、Doubao，附带官方 DPA 合规保障与 99.9% SLA。',
      tierRecommended: '推荐选择',
      tierPopular: '最受欢迎',
      tierSelect: '选择方案',
      customEnterprise: '定制企业方案',
    },
    modals: {
      contractTitle: '企业级数据处理协议 (DPA) 申请',
      contractDesc: '申请汕头华侨试验区官方 B2B 合规采购合同及企业审计资质。',
      apiKeysTitle: 'API 密钥管理与凭证',
      apiKeysDesc: '生成并管理兼容 100% OpenAI SDK 的生产级 API Key。',
      pingTitle: '实时跨境网关延迟 Ping 诊断',
      pingDesc: '测试全球边缘节点连接汕头算力网关的实时光纤延迟与 RAM 响应速度。',
      runDiagnostic: '运行网关延迟诊断',
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
    },
    footer: {
      desc: 'Helstera 是领先的合规跨境 AI 算力网关，通过合法跨境数据处理框架，连接全球开发者与顶级大语言模型。',
      colPlatform: '平台与网关',
      colCompliance: '合规与法务',
      colCompany: '关于公司',
      copyright: 'Helstera AI Gateway (helstera.com)。保留所有权利。',
    }
  },
  ja: {
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
      eyebrowTag: '特区認定 • クロスボーダー AI 計算ゲートウェイ [01]',
      mainTitle: 'エンタープライズクラウド計算。グローバルアクセス。',
      subtitle: 'パイロットゾーンから提供されるクラウド計算（ローカル・エッジ計算ノードはフェーズIIで開発予定）。80%のコスト削減と99.9%のSLA保証を提供。',
      primaryCta: '$5クレジットで無料開始',
      secondaryCta: 'エンタープライズ合规を見る',
      statCost: '対OPENAI コスト削減率',
      statLatency: 'レイテンシ SLA 保証',
      statUptime: '稼働率 SLA 保証',
      testPing: 'ゲートウェイ Ping テスト',
      modelsRates: 'モデルと料金',
    },
    routeVisualizer: {
      gatewayTitle: 'Helstera ゲートウェイ',
      zeroDataRetention: 'データ保持ゼロ (ZDR)',
      rateLabel: '料金：',
      latencyLabel: 'レイテンシ：',
      callApi: 'API呼び出し',
      copySnippet: 'コードをコピー',
      snippetComment: '# 100% OpenAI SDK 互換コード',
    },
    bento: {
      tag: '規制準拠インフラストラクチャ [02]',
      title: 'エンタープライズのコンプライアンスと速度のために設計',
      subtitle: '直接光ファイバー接続と特別区の法的保護により、最高の費用対効果と安全性を実現。',
      unitEconomicsTitle: 'OpenAIと比べて最大80%のコスト削減',
      unitEconomicsDesc: '汕頭パイロットゾーンデータセンターで計算資源を統合し、クリーンエネルギーとMoEモデルの効率性を開発者に直接還元。',
      sdkCompatTitle: '1行のコードでOpenAIと完全互換',
      sdkCompatDesc: 'Python, Node.js, LangChain, AutoGPTでbaseURLを変更するだけで導入完了。',
      dpaTitle: '汕頭パイロットゾーン公式DPA契約',
      dpaDesc: '「来数加工」政策に基づく正式なB2Bデータ処理合意書（DPA）を提供。',
      dpaCta: 'DPA契約を申請',
      zdrTitle: 'ゼロデータ保持 (Zero Data Retention)',
      zdrDesc: 'プロンプトはRAM上で短時間のみ実行され、応答完了と同時に即座に消去されます。ディスクログ・二次学習なし。',
      zdrBadge: 'RAMのみの揮発性実行',
      slaTitle: '180ms未満の遅延と海底光ファイバー专线',
      slaDesc: '専用海底ケーブルでパブリックインターネットの遅延を回避し、99.9%のSLAを保証。',
      slaCta: 'API Keyを入手 ($5お試し)',
    },
    story: {
      title: '統合ゲートウェイ。無限の計算ポテンシャル。',
      subtitle: 'HelsteraクロスボーダーAIインフラの4つの章をスクロールまたはクリックして確認。',
      act1Badge: '規制・法的枠組み',
      act1Title: '汕頭パイロットゾーン法的枠組み',
      act1Sub: '政府が承認した「データ加工（来数加工）」特別特区。',
      act1Desc: '広東省の政策に基づき、プロンプトデータは法的リスクなくオフショア計算ノードに処理されます。',
      act2Badge: 'コスト効率性',
      act2Title: 'Token料金を80%削減',
      act2Sub: 'DeepSeek-V3およびR1推理モデルを格安コストで実行。',
      act2Desc: 'クリーンエネルギーとオープンウェイト最適化を活用し、100万トークンあたり$0.14 - $0.55の圧倒的コスパを実現。',
      act3Badge: 'RAM揮発性セキュリティ',
      act3Title: 'ゼロ保持RAM処理',
      act3Sub: 'ディスク書き込みゼロ、二次学習なしの完全揮発実行。',
      act3Desc: 'リクエストは暗号化されたメモリ上で保持され、トークン出力完了と同時にミリ秒単位で完全に消去されます。',
      act4Badge: '即時移行',
      act4Title: 'OpenAI SDK 1行置換',
      act4Sub: '複雑な移行作業やPrompt構文の変更は一切不要。',
      act4Desc: '既存のOpenAI Python, TypeScript, Go, LangChain, LlamaIndexクライアントで即座に使用可能。',
    },
    models: {
      title: '対応LLMモデルとリアルタイムベンチマーク',
      subtitle: '最高峰のオープンウェイトモデルに透明なトークン単位料金でアクセス。',
      viewBento: 'グリッド表示',
      viewTable: 'コンパクトテーブル',
      searchPlaceholder: 'モデルを検索 (例: DeepSeek, Qwen)...',
      testModel: 'モデルテスト',
      savings: '削減率',
      context: 'コンテキスト',
      sla: 'SLA保証',
      filterAll: '全モデル',
      filterReasoning: '推論モデル',
      filterChat: '対話モデル',
      inputPrice: '入力 / 1M',
      outputPrice: '出力 / 1M',
    },
    calculator: {
      title: '月間コスト削減額のシミュレーション',
      subtitle: '標準的なOpenAIの価格とHelsteraの利用料金を直接比較。',
      volumeLabel: '月間推定トークン使用量',
      openaiCost: '標準OpenAI費用',
      helsteraCost: 'Helsteraゲートウェイ費用',
      annualSavings: '年間見込み節約額',
    },
    onboarding: {
      title: 'わずか4ステップで呼び出し開始',
      subtitle: '100% OpenAI SDK互換。60秒以内に既存のAIパイプラインをスムーズに移行。',
      stepPrefix: 'ステップ',
      step1Title: '無料アカウント作成',
      step1Desc: 'メールまたはGitHubで即座に登録。$5のテスト残高を進呈。',
      step2Title: 'API Keyの生成',
      step2Desc: 'ダッシュボードでレート制限付きの商用API Keyを発行。',
      step3Title: 'SDKの1行を修正',
      step3Desc: 'Python, TS, AutoGPTでbase_urlをhttps://api.helstera.com/v1に変更。',
      step4Title: 'チャージ & DPA契約',
      step4Desc: 'クレジットカード、Stripe、送金対応。企業向けDPA合意書の発行も可能。',
      step1Action: 'アカウント作成',
      step2Action: '無料Key入手',
      step3Action: 'ドキュメント確認',
      step4Action: 'DPA契約申請',
    },
    compliance: {
      title: '信頼できるエンタープライズコンプライアンス',
      subtitle: '法的透明性、調達コンプライアンス、データ保護の要件を満たすよう設計されています。',
      legalAssuranceTag: '法的・調達安全性保証',
      policyTitle: '汕頭パイロットゾーン「来数加工」政策',
      policyDesc: '海外企業が最先端LLM推論を利用しながら、社内法務監査やGDPRのデータガバナンス基準を満たすことを可能にします。',
      requestDocCta: 'コンプライアンス書類を請求',
      contactCta: 'お問い合わせ',
      provideTitle: '当社が提供するもの',
      provideItem1: '正式なB2Bマスターサービス合意書 (MSA)',
      provideItem2: '法的に拘束力のあるデータ処理合意書 (DPA)',
      provideItem3: '99.9% 稼働率保証 (SLA)',
      provideItem4: '透明性の高いデータ処理およびZDRセキュリティホワイトペーパー',
    },
    pricingView: {
      title: '開発者および企業向け透明料金プラン',
      subtitle: '1Mトークンごとの従量課金。DeepSeek, Qwen, GLM, MiniMax, Doubaoにアクセス可能。正式DPAと99.9% SLAを完備。',
      tierRecommended: '推奨プラン',
      tierPopular: '一番人気',
      tierSelect: 'プランを選択',
      customEnterprise: 'エンタープライズカスタム',
    },
    modals: {
      contractTitle: 'エンタープライズデータ処理合意書 (DPA) 申請',
      contractDesc: '汕頭パイロットゾーン公式B2Bコンプライアンス契約および企業監査資格を申請。',
      apiKeysTitle: 'APIキー管理と資格情報',
      apiKeysDesc: '100% OpenAI SDK互換の商用APIキーを生成・管理。',
      pingTitle: 'リアルタイムクロスボーダーゲートウェイPing診断',
      pingDesc: '世界各地のノードから汕頭計算ゲートウェイへのリアルタイム光レイテンシとRAMレスポンスを測定。',
      runDiagnostic: 'Ping診断を実行',
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
    },
    footer: {
      desc: 'Helsteraは、合法的なクロスボーダーデータ処理枠組みを通じて世界中の開発者とフラグシップLLMを接続する、業界をリードするクロスボーダーAI計算ゲートウェイです。',
      colPlatform: 'プラットフォーム',
      colCompliance: 'コンプライアンス',
      colCompany: '会社情報',
      copyright: 'Helstera AI Gateway (helstera.com). All rights reserved.',
    }
  },
  es: {
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
      eyebrowTag: 'APROBADO ZONA PILOTO • PASARELA DE CÓMPUTO TRANSFRONTERIZO [01]',
      mainTitle: 'Cómputo empresarial en la nube. Alcance global.',
      subtitle: 'Cómputo en la nube empresarial gestionado (nodos locales en desarrollo para la Fase II). Ahorra 80% con 99.9% de SLA.',
      primaryCta: 'Empezar con $5 Gratis',
      secondaryCta: 'Ver Cumplimiento Empresarial',
      statCost: 'AHORRO VS OPENAI',
      statLatency: 'GARANTÍA SLA LATENCIA',
      statUptime: 'SLA DISPONIBILIDAD',
      testPing: 'Probar Ping Pasarela',
      modelsRates: 'Modelos y Tarifas',
    },
    routeVisualizer: {
      gatewayTitle: 'Pasarela Helstera',
      zeroDataRetention: 'Cero Retención de Datos',
      rateLabel: 'Tarifa:',
      latencyLabel: 'Latencia:',
      callApi: 'Llamar API',
      copySnippet: 'Copiar Código',
      snippetComment: '# Reemplazo 100% Compatible con OpenAI SDK',
    },
    bento: {
      tag: 'ARQUITECTURA DE INFRAESTRUCTURA REGULADA [02]',
      title: 'Diseñado para Cumplimiento Empresarial y Velocidad',
      subtitle: 'Conectividad óptica directa y protecciones regulatorias de zona piloto para máxima economía y seguridad.',
      unitEconomicsTitle: 'Hasta 80% de Ahorro en Costes vs OpenAI',
      unitEconomicsDesc: 'Al agregar cómputo en centros de datos de la Zona Piloto de Shantou, trasladamos la máxima eficiencia de costos a los desarrolladores.',
      sdkCompatTitle: 'Reemplazo de 1 Línea para OpenAI',
      sdkCompatDesc: 'Sin reescritura de código. Apunta baseURL a Helstera en Python, Node.js, LangChain o AutoGPT.',
      dpaTitle: 'Acuerdo DPA Zona Piloto Shantou',
      dpaDesc: 'Marco legal autorizado para el procesamiento de datos transfronterizo con contratos B2B formales.',
      dpaCta: 'Solicitar Contrato DPA',
      zdrTitle: 'Cero Retención de Datos (ZDR)',
      zdrDesc: 'Los prompts se ejecutan en memoria RAM volátil y se eliminan al instante. Cero almacenamiento en disco.',
      zdrBadge: 'Ejecución Volátil Solo en RAM',
      slaTitle: 'SLA Menor a 180ms y Fibra Marina',
      slaDesc: 'Cables ópticos marinos dedicados garantizan 99.9% de disponibilidad para aplicaciones críticas.',
      slaCta: 'Obtener API Key ($5 Prueba)',
    },
    story: {
      title: 'Una Pasarela. Potencial de Cómputo Infinito.',
      subtitle: 'Explora las 4 etapas de la infraestructura transfronteriza de Helstera.',
      act1Badge: 'Marco Regulatorio',
      act1Title: 'Marco Legal Zona Piloto Shantou',
      act1Sub: 'Zona piloto de "Procesamiento de Datos" autorizada por el gobierno.',
      act1Desc: 'Los datos de prompts ingresan a nodos de cómputo dedicados en el extranjero con total claridad legal.',
      act2Badge: 'Eficiencia de Coste',
      act2Title: 'Reducción del 80% en Precio de Tokens',
      act2Sub: 'Ejecuta modelos DeepSeek-V3 y R1 a una fracción del coste habitual.',
      act2Desc: 'Aprovechando energía limpia y optimizaciones de código abierto a $0.14 - $0.55 por millón de tokens.',
      act3Badge: 'Seguridad RAM Volátil',
      act3Title: 'Procesamiento RAM sin Retención',
      act3Sub: 'Ejecución efímera sin registros en disco ni reentrenamiento de modelos.',
      act3Desc: 'Las peticiones se borran exactamente en el milisegundo en que se transmite el último token.',
      act4Badge: 'Migración Inmediata',
      act4Title: 'Reemplazo de 1 Línea en OpenAI SDK',
      act4Sub: 'Sin ingeniería compleja de migración ni cambios en prompts.',
      act4Desc: 'Funciona desde el primer momento con librerías oficiales de Python, TypeScript, Go y LangChain.',
    },
    models: {
      title: 'Modelos LLM Compatibles y Benchmarks',
      subtitle: 'Acceso directo a los mejores modelos de código abierto con tarifas transparentes por token.',
      viewBento: 'Vista Cuadrícula',
      viewTable: 'Tabla Compacta',
      searchPlaceholder: 'Buscar modelos (ej. DeepSeek, Qwen)...',
      testModel: 'Probar Modelo',
      savings: 'AHORRO',
      context: 'Contexto',
      sla: 'SLA',
      filterAll: 'Todos los Modelos',
      filterReasoning: 'Modelos de Razonamiento',
      filterChat: 'Chat General',
      inputPrice: 'Entrada / 1M',
      outputPrice: 'Salida / 1M',
    },
    calculator: {
      title: 'Estima tu Ahorro Mensual de Costes',
      subtitle: 'Compara los precios de tokens de Helstera con las tarifas estándar de OpenAI.',
      volumeLabel: 'Uso Mensual Estimado de Tokens',
      openaiCost: 'Coste Estándar OpenAI Benchmark',
      helsteraCost: 'Coste Pasarela Helstera',
      annualSavings: 'Ahorro Anual Neto Estimado',
    },
    onboarding: {
      title: 'Comienza en 4 Sencillos Pasos',
      subtitle: 'Migra tus pipelines de IA a Helstera en menos de 60 segundos con 100% compatibilidad OpenAI SDK.',
      stepPrefix: 'PASO',
      step1Title: 'Crear Cuenta Gratuita',
      step1Desc: 'Regístrate con email o GitHub. Recibe $5 de saldo de prueba de inmediato.',
      step2Title: 'Generar Clave API',
      step2Desc: 'Crea claves de producción con límites de velocidad personalizados.',
      step3Title: 'Cambiar 1 Línea en SDK',
      step3Desc: 'Apunta base_url a https://api.helstera.com/v1 en Python, TS o AutoGPT.',
      step4Title: 'Recargar y Firmar DPA',
      step4Desc: 'Paga con tarjeta, Stripe, transferencia o solicita un contrato DPA personalizado.',
      step1Action: 'Crear Cuenta',
      step2Action: 'Obtener Key Gratis',
      step3Action: 'Ver Código y Docs',
      step4Action: 'Solicitar DPA',
    },
    compliance: {
      title: 'Cumplimiento en el que Puedes Confiar',
      subtitle: 'Diseñado para satisfacer las necesidades de empresas globales que requieren claridad legal y protección de datos.',
      legalAssuranceTag: 'Garantía Legal y de Compras',
      policyTitle: 'Política de "Procesamiento de Datos" Zona Piloto Shantou',
      policyDesc: 'Permite a las empresas utilizar la mejor inferencia LLM cumpliendo con sus requisitos legales y de GDPR.',
      requestDocCta: 'Solicitar Documentos de Cumplimiento',
      contactCta: 'Contactar Ventas',
      provideTitle: 'Lo Que Ofrecemos',
      provideItem1: 'Acuerdo Marco de Servicios Comercial B2B (MSA)',
      provideItem2: 'Acuerdo de Procesamiento de Datos Legálmente Vinculante (DPA)',
      provideItem3: 'Garantía de Nivel de Servicio del 99.9% (SLA)',
      provideItem4: 'Documentación de seguridad y Cero Retención de Datos (ZDR)',
    },
    pricingView: {
      title: 'Precios Transparentes para Desarrolladores y Empresas',
      subtitle: 'Pago por uso por millón de tokens. Acceso a DeepSeek, Qwen, GLM, MiniMax y Doubao con garantía DPA y SLA del 99.9%.',
      tierRecommended: 'Recomendado',
      tierPopular: 'Más Popular',
      tierSelect: 'Seleccionar Plan',
      customEnterprise: 'Plan Personalizado Empresa',
    },
    modals: {
      contractTitle: 'Solicitud de Acuerdo de Procesamiento de Datos (DPA)',
      contractDesc: 'Solicita un contrato de cumplimiento B2B oficial de la Zona Piloto de Shantou.',
      apiKeysTitle: 'Gestión de Claves API y Credenciales',
      apiKeysDesc: 'Genera y gestiona claves API de producción 100% compatibles con OpenAI SDK.',
      pingTitle: 'Diagnóstico de Latencia Ping de Pasarela Transfronteriza',
      pingDesc: 'Mide la latencia de fibra óptica en tiempo real y la velocidad de RAM desde nodos globales.',
      runDiagnostic: 'Ejecutar Diagnóstico Ping',
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
    },
    footer: {
      desc: 'Helstera es la pasarela de cómputo IA transfronteriza líder y en cumplimiento, conectando desarrolladores globales con LLMs a través de marcos legales autorizados.',
      colPlatform: 'Plataforma y Pasarela',
      colCompliance: 'Legal y Cumplimiento',
      colCompany: 'Compañía',
      copyright: 'Helstera AI Gateway (helstera.com). Todos los derechos reservados.',
    }
  },
  de: {
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
      eyebrowTag: 'PILOTZONE GENEHMIGT • GRENZÜBERSCHREITENDES KI-GATEWAY [01]',
      mainTitle: 'Enterprise Cloud-Compute. Globale Reichweite.',
      subtitle: 'Gemanagte Enterprise-Cloud-Rechenleistung aus der Pilotzone (lokale Edge-Knoten in Phase II geplant). Sparen Sie 80% mit 99,9% SLA.',
      primaryCta: 'Mit $5 Gratis-Guthaben starten',
      secondaryCta: 'Enterprise Compliance ansehen',
      statCost: 'ERSPARNIS VS OPENAI',
      statLatency: 'LATENZ SLA GARANTIE',
      statUptime: 'ENTERPRISE UPTIME SLA',
      testPing: 'Gateway Ping Testen',
      modelsRates: 'Modelle & Tarife',
    },
    routeVisualizer: {
      gatewayTitle: 'Helstera Gateway',
      zeroDataRetention: 'Null Datenspeicherung (ZDR)',
      rateLabel: 'Tarif:',
      latencyLabel: 'Latenz:',
      callApi: 'API Aufrufen',
      copySnippet: 'Code Kopieren',
      snippetComment: '# 100% OpenAI SDK Kompatibler Ersatz',
    },
    bento: {
      tag: 'REGULIERTE INFRASTRUKTUR-ARCHITEKTUR [02]',
      title: 'Entwickelt für Enterprise Compliance & Geschwindigkeit',
      subtitle: 'Direkte Glasfaseranbindung und gesetzlicher Schutz der Pilotzone bieten Höchstmaß an Effizienz und Rechtssicherheit.',
      unitEconomicsTitle: 'Bis zu 80% Kostenvorteil gegenüber OpenAI',
      unitEconomicsDesc: 'Durch Bündelung der Rechenleistung in den Rechenzentren der Shantou Pilotzone geben wir Preisvorteile direkt an Entwickler weiter.',
      sdkCompatTitle: '1-Zeilen-Ersatz für OpenAI',
      sdkCompatDesc: 'Kein Code-Umschreiben. Ändern Sie einfach die baseURL auf Helstera in Python, Node.js, LangChain oder AutoGPT.',
      dpaTitle: 'Shantou Pilotzone DPA-Vertrag',
      dpaDesc: 'Autorisierter rechtlicher Rahmen für grenzüberschreitende Datenverarbeitung mit formellen B2B-Verträgen.',
      dpaCta: 'DPA-Vertrag Anfordern',
      zdrTitle: 'Null Datenspeicherung (Zero Data Retention)',
      zdrDesc: 'Prompts werden ausschließlich im flüchtigen RAM ausgeführt und nach der Antwort sofort gelöscht.',
      zdrBadge: 'Reine RAM-Flüchtige Ausführung',
      slaTitle: 'Unter 180ms Latenz & Seekabel-Glasfaser',
      slaDesc: 'Dedizierte Seekabel garantieren 99,9% Verfügbarkeit für kritische Unternehmensanwendungen.',
      slaCta: 'API Key Holen ($5 Test)',
    },
    story: {
      title: 'Ein Gateway. Unendliches Rechenpotenzial.',
      subtitle: 'Erkunden Sie die 4 Phasen der grenzüberschreitenden Infrastruktur von Helstera.',
      act1Badge: 'Rechtlicher Rahmen',
      act1Title: 'Rechtlicher Rahmen der Shantou Pilotzone',
      act1Sub: 'Staatlich genehmigte Pilotzone für "Datenverarbeitung".',
      act1Desc: 'Prompt-Daten gelangen ohne rechtliche Unsicherheit in dedizierte Offshore-Rechenknoten.',
      act2Badge: 'Kosteneffizienz',
      act2Title: '80% Reduzierung der Token-Preise',
      act2Sub: 'Führen Sie DeepSeek-V3 und R1 zu einem Bruchteil westlicher API-Kosten aus.',
      act2Desc: 'Nutzung von Ökostrom und Open-Source-Optimierungen ab $0,14 - $0,55 pro 1M Tokens.',
      act3Badge: 'RAM-Sicherheit',
      act3Title: 'Keine Speicherung im RAM',
      act3Sub: 'Flüchtige Ausführung ohne Festplatten-Logs oder Modell-Re-Training.',
      act3Desc: 'Anfragen werden exakt in dem Millisekunden-Moment gelöscht, in dem der letzte Token gestreamt wird.',
      act4Badge: 'Sofortige Migration',
      act4Title: 'OpenAI SDK 1-Zeilen-Wechsel',
      act4Sub: 'Keine komplexe Migration oder Prompt-Anpassung erforderlich.',
      act4Desc: 'Funktioniert direkt mit bestehenden OpenAI-Bibliotheken für Python, TypeScript, Go und LangChain.',
    },
    models: {
      title: 'Unterstützte LLM-Modelle & Live-Benchmarks',
      subtitle: 'Direkter Zugriff auf führende Open-Source-Modelle zu transparenten Preisen pro Token.',
      viewBento: 'Rasteransicht',
      viewTable: 'Kompakt-Tabelle',
      searchPlaceholder: 'Modell suchen (z. B. DeepSeek, Qwen)...',
      testModel: 'Modell Testen',
      savings: 'ERSPARNIS',
      context: 'Kontext',
      sla: 'SLA',
      filterAll: 'Alle Modelle',
      filterReasoning: 'Inferenz-Modelle',
      filterChat: 'Allgemeiner Chat',
      inputPrice: 'Eingabe / 1M',
      outputPrice: 'Ausgabe / 1M',
    },
    calculator: {
      title: 'Schätzen Sie Ihre Monatlichen Ersparnisse',
      subtitle: 'Vergleichen Sie die Helstera Token-Preise direkt mit den Standard-Tarifen von OpenAI.',
      volumeLabel: 'Geschätzte Monatliche Token-Nutzung',
      openaiCost: 'Standard OpenAI Benchmark-Kosten',
      helsteraCost: 'Helstera Gateway Kosten',
      annualSavings: 'Geschätzte Jährliche Nettoersparnis',
    },
    onboarding: {
      title: 'In 4 Einfachen Schritten Starten',
      subtitle: 'Migrieren Sie Ihre KI-Pipelines in unter 60 Sekunden zu Helstera mit 100% OpenAI SDK Kompatibilität.',
      stepPrefix: 'SCHRITT',
      step1Title: 'Kostenloses Konto Erstellen',
      step1Desc: 'Registrieren Sie sich mit E-Mail oder GitHub. Sie erhalten sofort $5 Testguthaben.',
      step2Title: 'API-Schlüssel Generieren',
      step2Desc: 'Erstellen Sie Produktionsschlüssel mit individuellen Rate-Limits direkt im Dashboard.',
      step3Title: '1 Zeile im SDK Anpassen',
      step3Desc: 'Ändern Sie base_url auf https://api.helstera.com/v1 in Python, TS oder AutoGPT.',
      step4Title: 'Aufladen & DPA Unterzeichnen',
      step4Desc: 'Zahlen Sie per Kreditkarte, Stripe oder Überweisung oder fordern Sie einen DPA-Vertrag an.',
      step1Action: 'Konto Erstellen',
      step2Action: 'Gratis Key Holen',
      step3Action: 'Code & Docs Ansehen',
      step4Action: 'DPA Anfordern',
    },
    compliance: {
      title: 'Compliance, der Sie Vertrauen Können',
      subtitle: 'Entwickelt für globale Unternehmen, die rechtliche Klarheit und Datenschutz benötigen.',
      legalAssuranceTag: 'Rechts- & Beschaffungssicherheit',
      policyTitle: 'Shantou Pilotzone "Datenverarbeitungs"-Richtlinie',
      policyDesc: 'Ermöglicht Unternehmen die Nutzung führender LLM-Inferenz unter Einhaltung von DSGVO und internen Richtlinien.',
      requestDocCta: 'Compliance-Dokumente Anfordern',
      contactCta: 'Vertrieb Kontaktieren',
      provideTitle: 'Was Wir Bieten',
      provideItem1: 'Formeller Kommerzieller B2B Hauptdienstleistungsvertrag (MSA)',
      provideItem2: 'Rechtsverbindlicher Datenverarbeitungsvertrag (DPA)',
      provideItem3: '99,9% Service-Level-Agreement (SLA) Garantie',
      provideItem4: 'Klare Sicherheitsdokumentation zur Null-Datenspeicherung (ZDR)',
    },
    pricingView: {
      title: 'Transparente Preise für Entwickler & Unternehmen',
      subtitle: 'Nutzungsbasierte Abrechnung pro 1M Tokens. Zugriff auf DeepSeek, Qwen, GLM, MiniMax und Doubao mit DPA und 99,9% SLA.',
      tierRecommended: 'Empfohlen',
      tierPopular: 'Am Beliebtesten',
      tierSelect: 'Tarif Wählen',
      customEnterprise: 'Individueller Enterprise-Plan',
    },
    modals: {
      contractTitle: 'Antrag auf Datenverarbeitungsvertrag (DPA)',
      contractDesc: 'Fordern Sie einen offiziellen B2B-Compliance-Vertrag der Shantou Pilotzone an.',
      apiKeysTitle: 'API-Schlüssel-Verwaltung & Anmeldedaten',
      apiKeysDesc: 'Erstellen und verwalten Sie Produktions-API-Schlüssel mit 100% OpenAI SDK Kompatibilität.',
      pingTitle: 'Live-Diagnose für Grenzüberschreitenden Gateway-Ping',
      pingDesc: 'Messen Sie die Echtzeit-Latenz und RAM-Ausführungsgeschwindigkeit von globalen Edge-Knoten.',
      runDiagnostic: 'Ping-Diagnose Starten',
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
    },
    footer: {
      desc: 'Helstera ist das führende konforme grenzüberschreitende KI-Rechen-Gateway, das globale Entwickler über autorisierte rechtliche Rahmenbedingungen mit Flaggschiff-LLMs verbindet.',
      colPlatform: 'Plattform & Gateway',
      colCompliance: 'Recht & Compliance',
      colCompany: 'Unternehmen',
      copyright: 'Helstera AI Gateway (helstera.com). Alle Rechte vorbehalten.',
    }
  },
  fr: {
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
      eyebrowTag: 'ZONE PILOTE APPROUVÉE • PASSERELLE DE CALCUL TRANSFRONTALIÈRE [01]',
      mainTitle: 'Calcul cloud entreprise. Portée mondiale.',
      subtitle: 'Calcul cloud d\'entreprise géré en zone pilote (nœuds locaux en développement pour la Phase II). Économisez 80% avec SLA de 99,9%.',
      primaryCta: 'Commencer avec 5$ Gratuits',
      secondaryCta: 'Voir la Conformité Entreprise',
      statCost: 'ÉCONOMIES VS OPENAI',
      statLatency: 'GARANTIE SLA LATENCE',
      statUptime: 'DISPONIBILITÉ SLA',
      testPing: 'Tester le Ping Passerelle',
      modelsRates: 'Modèles & Tarifs',
    },
    routeVisualizer: {
      gatewayTitle: 'Passerelle Helstera',
      zeroDataRetention: 'Zéro Rétention de Données',
      rateLabel: 'Tarif :',
      latencyLabel: 'Latence :',
      callApi: 'Appeler l\'API',
      copySnippet: 'Copier le Code',
      snippetComment: '# Remplacement 100% Compatible OpenAI SDK',
    },
    bento: {
      tag: 'ARCHITECTURE D\'INFRASTRUCTURE RÉGLEMENTÉE [02]',
      title: 'Conçu pour la Conformité Entreprise et la Vitesse',
      subtitle: 'Connectivité optique directe et protections réglementaires en zone pilote pour un coût-efficacité et une sécurité inégalés.',
      unitEconomicsTitle: 'Jusqu\'à 80% d\'Économies vs OpenAI',
      unitEconomicsDesc: 'En regroupant le calcul dans les centres de données de la Zone Pilote de Shantou, nous répercutons l\'efficacité énergétique directement aux développeurs.',
      sdkCompatTitle: 'Remplacement en 1 Ligne pour OpenAI',
      sdkCompatDesc: 'Aucune réécriture de code. Modifiez la baseURL vers Helstera dans Python, Node.js, LangChain ou AutoGPT.',
      dpaTitle: 'Accord DPA Zone Pilote Shantou',
      dpaDesc: 'Cadre juridique autorisé pour le traitement transfrontalier des données soutenu par des contrats B2B officiels.',
      dpaCta: 'Demander un Contrat DPA',
      zdrTitle: 'Zéro Rétention de Données (ZDR)',
      zdrDesc: 'Les prompts sont exécutés en mémoire RAM volatile et immédiatement supprimés. Aucun stockage sur disque.',
      zdrBadge: 'Exécution Volatile en RAM Uniquement',
      slaTitle: 'SLA Inférieur à 180ms & Fibre Marine',
      slaDesc: 'Câbles optiques marins dédiés garantissant 99,9% de disponibilité pour les applications d\'entreprise critiques.',
      slaCta: 'Obtenir la Clé API (Essai 5$)',
    },
    story: {
      title: 'Une Passerelle. Un Potentiel de Calcul Infini.',
      subtitle: 'Parcourez les 4 étapes de l\'infrastructure transfrontalière de Helstera.',
      act1Badge: 'Cadre Réglementaire',
      act1Title: 'Cadre Juridique Zone Pilote Shantou',
      act1Sub: 'Zone pilote de "Traitement de Données" approuvée par le gouvernement.',
      act1Desc: 'Les données de prompts entrent dans des nœuds de calcul offshore dédiés en toute clarté juridique.',
      act2Badge: 'Efficacité Coût',
      act2Title: 'Réduction de 80% du Prix des Tokens',
      act2Sub: 'Exécutez DeepSeek-V3 et R1 à une fraction des coûts habituels.',
      act2Desc: 'Exploitation d\'énergie propre et d\'optimisations open-source entre 0,14$ et 0,55$ par million de tokens.',
      act3Badge: 'Sécurité RAM Volatile',
      act3Title: 'Traitement RAM sans Rétention',
      act3Sub: 'Exécution éphémère sans journaux disque ni relecture de modèle.',
      act3Desc: 'Les requêtes sont effacées exactement à la milliseconde où le dernier token est transmis.',
      act4Badge: 'Migration Immédiate',
      act4Title: 'Remplacement en 1 Ligne dans OpenAI SDK',
      act4Sub: 'Pas d\'ingénierie complexe ni de modification de prompts.',
      act4Desc: 'Fonctionne immédiatement avec les bibliothèques officielles Python, TypeScript, Go et LangChain.',
    },
    models: {
      title: 'Modèles LLM Pris en Charge & Benchmarks',
      subtitle: 'Accès direct aux meilleurs modèles open-source avec des tarifs transparents par token.',
      viewBento: 'Grille Bento',
      viewTable: 'Tableau Compact',
      searchPlaceholder: 'Rechercher un modèle (ex. DeepSeek, Qwen)...',
      testModel: 'Tester le Modèle',
      savings: 'ÉCONOMIES',
      context: 'Contexte',
      sla: 'SLA',
      filterAll: 'Tous les Modèles',
      filterReasoning: 'Modèles de Raisonnement',
      filterChat: 'Chat Général',
      inputPrice: 'Entrée / 1M',
      outputPrice: 'Sortie / 1M',
    },
    calculator: {
      title: 'Estimez vos Économies Mensuelles',
      subtitle: 'Comparez directement les prix des tokens Helstera aux tarifs standards d\'OpenAI.',
      volumeLabel: 'Utilisation Mensuelle Estimée de Tokens',
      openaiCost: 'Coût Standard OpenAI Benchmark',
      helsteraCost: 'Coût Passerelle Helstera',
      annualSavings: 'Économies Annuelles Nettes Estimées',
    },
    onboarding: {
      title: 'Commencez en 4 Étapes Simples',
      subtitle: 'Migrez vos pipelines IA vers Helstera en moins de 60 secondes avec 100% de compatibilité OpenAI SDK.',
      stepPrefix: 'ÉTAPE',
      step1Title: 'Créer un Compte Gratuit',
      step1Desc: 'Inscrivez-vous avec votre email ou GitHub. Recevez immédiatement 5$ de crédit d\'essai.',
      step2Title: 'Générer une Clé API',
      step2Desc: 'Créez des clés de production avec des limites de débit personnalisées.',
      step3Title: 'Modifier 1 Ligne dans le SDK',
      step3Desc: 'Pointez base_url vers https://api.helstera.com/v1 dans Python, TS ou AutoGPT.',
      step4Title: 'Recharger & Signer le DPA',
      step4Desc: 'Payez par carte, Stripe, virement ou demandez un contrat DPA personnalisé.',
      step1Action: 'Créer un Compte',
      step2Action: 'Obtenir Clé Gratuite',
      step3Action: 'Voir le Code et Docs',
      step4Action: 'Demander un DPA',
    },
    compliance: {
      title: 'Une Conformité en Laquelle Vous Pouvez Avoir Confiance',
      subtitle: 'Conçu pour répondre aux besoins des entreprises internationales exigeant une clarté juridique et la protection des données.',
      legalAssuranceTag: 'Assurance Juridique & Achats',
      policyTitle: 'Politique de "Traitement de Données" Zone Pilote Shantou',
      policyDesc: 'Permet aux entreprises d\'utiliser l\'inférence LLM de pointe tout en respectant leurs exigences RGPD et juridiques.',
      requestDocCta: 'Demander les Documents de Conformité',
      contactCta: 'Contacter les Ventes',
      provideTitle: 'Ce que Nous Fournissons',
      provideItem1: 'Accord-Cadre de Services Commercial B2B (MSA)',
      provideItem2: 'Accord de Traitement des Données Juridiquement Contraignant (DPA)',
      provideItem3: 'Garantie de Niveau de Service de 99,9% (SLA)',
      provideItem4: 'Documentation de sécurité et Zéro Rétention de Données (ZDR)',
    },
    pricingView: {
      title: 'Tarification Transparente pour Développeurs & Entreprises',
      subtitle: 'Paiement à l\'usage par million de tokens. Accès à DeepSeek, Qwen, GLM, MiniMax et Doubao avec DPA et SLA de 99,9%.',
      tierRecommended: 'Recommandé',
      tierPopular: 'Le Plus Populaire',
      tierSelect: 'Choisir l\'Offre',
      customEnterprise: 'Offre Entreprise Sur Mesure',
    },
    modals: {
      contractTitle: 'Demande d\'Accord de Traitement des Données (DPA)',
      contractDesc: 'Demandez un contrat officiel B2B de conformité de la Zone Pilote de Shantou.',
      apiKeysTitle: 'Gestion des Clés API et Identifiants',
      apiKeysDesc: 'Générez et gérez des clés API de production 100% compatibles OpenAI SDK.',
      pingTitle: 'Diagnostic de Ping Passerelle Transfrontalière en Direct',
      pingDesc: 'Testez la latence optique en temps réel et la vitesse d\'exécution RAM depuis des nœuds mondiaux.',
      runDiagnostic: 'Lancer le Diagnostic Ping',
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
    },
    footer: {
      desc: 'Helstera est la passerelle de calcul IA transfrontalière leader et conforme, reliant les développeurs mondiaux aux LLMs via des cadres juridiques autorisés.',
      colPlatform: 'Plateforme & Passerelle',
      colCompliance: 'Juridique & Conformité',
      colCompany: 'Entreprise',
      copyright: 'Helstera AI Gateway (helstera.com). Tous droits réservés.',
    }
  }
};
