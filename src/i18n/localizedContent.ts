import type { Language } from './translations';
import { LOCALIZED_CONTENT_OVERRIDES } from './localizedContentLocales';

export interface LocalizedContent {
  ui: {
    about: {
      heroTitle: string;
      heroSubtitle: string;
      missions: Record<string, { title: string; description: string }>;
      governanceTitle: string;
      governanceParagraph1: string;
      governanceParagraph2: string;
      governanceCapabilitiesTitle: string;
      governanceCapabilities: Record<string, string>;
      roadmapTitle: string;
      roadmapSubtitle: string;
      roadmap: Record<string, { phase: string; title: string; description: string }>;
    };
    blog: {
      eyebrow: string;
      heroTitle: string;
      heroSubtitle: string;
      searchPlaceholder: string;
      byPrefix: string;
      articleLead: string;
      articleBody: string;
      takeawaysTitle: string;
      takeaways: Record<string, string>;
      backToArticles: string;
      requestDpa: string;
      readArticle: string;
      noResults: string;
    };
    compliance: {
      heroTitle: string;
      heroSubtitle: string;
      legalTag: string;
      policyTitle: string;
      policyDescription: string;
      requestDocuments: string;
      contactUs: string;
      provideTitle: string;
      provideItems: Record<string, string>;
      securityTitle: string;
      securityItems: Record<string, string>;
      pillars: Record<string, { label: string; title: string; description: string }>;
      materialsTitle: string;
      materialsSubtitle: string;
      legalDocument: string;
      requestVersion: string;
    };
    contact: {
      eyebrow: string;
      heroTitle: string;
      heroSubtitle: string;
      inquiryReceived: string;
      receivedPrefix: string;
      receivedMiddle: string;
      receivedSuffix: string;
      sendAnother: string;
      formTitle: string;
      fullName: string;
      workEmail: string;
      company: string;
      topic: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      companyPlaceholder: string;
      topicOptions: Record<string, string>;
      volumeLabel: string;
      volumeOptions: Record<string, string>;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      directChannels: string;
      responseChannel: string;
      responseWindow: string;
      businessHours: string;
      directEmail: string;
      regionalOperations: string;
      regionalDescription: string;
      requestDpa: string;
    };
    docs: {
      heroTitle: string;
      heroSubtitle: string;
      migrationTitle: string;
      steps: Record<string, { label: string; title: string; description: string }>;
      quickstartTitle: string;
      getLiveApiKey: string;
      targetModel: string;
      copyCode: string;
      interactiveTag: string;
      playgroundTitle: string;
      simulatedResponse: string;
      selectModelRoute: string;
      temperature: string;
      promptMessage: string;
      processingQuery: string;
      executeRequest: string;
      responseOutput: string;
      tokenUnit: string;
      routing: string;
      clickExecute: string;
      simulationOnly: string;
      compatibleRoute: string;
    };
    faq: {
      eyebrow: string;
      heroTitle: string;
      title: string;
      subtitle: string;
      categories: Record<string, string>;
      searchPlaceholder: string;
      noResults: string;
    };
    modals: {
      apiKeys: {
        title: string;
        description: string;
        tabs: Record<string, string>;
        interactive: string;
        policyTitle: string;
        policyDescription: string;
        activeKeys: string;
        sampleKeyNames: Record<string, string>;
        sampleLastUsed: Record<string, string>;
        createKey: string;
        newKeyName: string;
        keyLabel: string;
        keyPlaceholder: string;
        generateKey: string;
        cancel: string;
        created: string;
        used: string;
        copyKey: string;
        revokeKey: string;
        fullDocs: string;
        targetLlm: string;
        promptPreset: string;
        defaultPrompt: string;
        presetA: string;
        presetB: string;
        reasoningAnalyzing: string;
        reasoningConstructing: string;
        reasoningPolicy: string;
        responseContent: string;
        userPrompt: string;
        promptPlaceholder: string;
        characters: string;
        routingSelected: string;
        runRequest: string;
        tracing: string;
        codeExport: string;
        generatedSnippet: string;
        copy: string;
        outputPayload: string;
        awaitingResponse: string;
        clickRun: string;
        selectedRoute: string;
        totalTokens: string;
        live: string;
        telemetry: string;
        accountBalance: string;
        monthlyUsage: string;
        routeHealth: string;
        checkTerms: string;
        dashboardSource: string;
        verifyRelease: string;
        quotaLimits: string;
        requestLimits: string;
        tokenLimits: string;
        accountConfigured: string;
        dataPolicy: string;
        contractScoped: string;
      };
      contract: {
        title: string;
        tabs: Record<string, string>;
        noticeSuffix: string;
        description: string;
        category: string;
        availability: string;
        requestCopy: string;
        submittedTitle: string;
        submittedDescription: string;
        fullName: string;
        company: string;
        email: string;
        documentType: string;
        requirements: string;
        namePlaceholder: string;
        companyPlaceholder: string;
        emailPlaceholder: string;
        requirementsPlaceholder: string;
        documentOptions: Record<string, string>;
        cancel: string;
        submit: string;
        requestPrepared: string;
        selectionRequirement: string;
      };
      ping: {
        origins: Record<string, string>;
        traceButton: string;
        tracing: string;
        terminalTitle: string;
        gateway: string;
        emptyLog: string;
        selectedRoute: string;
        origin: string;
        status: string;
        simulationComplete: string;
        policyAttached: string;
        getApiKey: string;
        logs: Record<string, string>;
      };
      tokenBuy: {
        title: string;
        description: string;
        successTitle: string;
        addedCredits: string;
        liveRateNotice: string;
        close: string;
        getApiKey: string;
        paymentMethod: string;
        creditCard: string;
        wire: string;
        crypto: string;
        depositAmount: string;
        onboardingTerms: string;
        currentRate: string;
        balanceTerms: string;
        serviceTerms: string;
        requestCredit: string;
        processing: string;
      };
    };
    community: {
      eyebrow: string;
      title: string;
      governanceName: string;
      partners: Record<string, { category: string; tag: string }>;
      joinTitle: string;
      joinDescription: string;
      joinCommunity: string;
      githubSdks: string;
    };
    enterprise: {
      title: string;
      subtitle: string;
      pathTitle: string;
      pathHint: string;
      stepPrefix: string;
      detailLabels: Record<string, string>;
      evidence: string;
      dpaTitle: string;
      dpaDescription: string;
      requestPack: string;
      nodes: Record<string, {
        title: string;
        tag: string;
        summary: string;
        details: Record<string, string>;
      }>;
      pillars: Record<string, { title: string; description: string; badge: string }>;
    };
    showcase: {
      eyebrow: string;
      title: string;
      subtitle: string;
      publicRoute: string;
      publicHops: string;
      publicTitle: string;
      publicDescription: string;
      rateSource: string;
      providerCard: string;
      termsChange: string;
      routeSignal: string;
      liveTelemetry: string;
      checkWorkload: string;
      reviewGap: string;
      providerTerms: string;
      governedRoute: string;
      currentTerms: string;
      governedTitle: string;
      governedDescription: string;
      routeCatalog: string;
      confirmAccount: string;
      networkHealth: string;
      validateAccount: string;
      retentionAttached: string;
      getCredentials: string;
      blocks: Record<string, { title: string; description: string }>;
    };
    comparison: {
      eyebrow: string;
      title: string;
      subtitle: string;
      publicRoute: string;
      publicTitle: string;
      publicDescription: string;
      dataLogging: string;
      providerPolicy: string;
      governedRoute: string;
      governedTitle: string;
      governedDescription: string;
      helsteraRate: string;
      accountSpecific: string;
      routeHealth: string;
      validateAccount: string;
      contractPolicy: string;
      dpaAvailable: string;
      dragHint: string;
    };
    carousel: {
      eyebrow: string;
      title: string;
      subtitle: string;
      scrollLeft: string;
      scrollRight: string;
      useCases: Record<string, { title: string; category: string; stats: string; description: string; cta: string }>;
    };
    marquee: {
      label: string;
      pauseHint: string;
      metrics: Record<string, { label: string; value: string; highlight: string }>;
    };
    story: {
      keyDetails: string;
      retentionAttached: string;
      requestKey: string;
      dpaContract: string;
      chapters: Record<string, { actNumber: string; title: string; subtitle: string; quote: string; badge: string; highlightStat: string; statLabel: string; detailPoints: Record<string, string> }>;
    };
    roadmap: {
      eyebrow: string;
      title: string;
      subtitle: string;
      currentPhase: string;
      completed: string;
      liveExecution: string;
      upcoming: string;
      phases: Record<string, { phase: string; quarter: string; title: string; items: Record<string, string> }>;
    };
    health: {
      eyebrow: string;
      title: string;
      complete: string;
      accountRequired: string;
      checking: string;
      awaitCheck: string;
      checked: string;
      configured: string;
      signal: string;
      checkComplete: string;
      runCheck: string;
      fallbackTitle: string;
      fallbackDescription: string;
      retentionTitle: string;
      retentionDescription: string;
      scopeTitle: string;
      scopeDescription: string;
      regions: Record<string, string>;
    };
    footer: {
      governanceScope: string;
      currentTerms: string;
      governanceDescription: string;
      retentionPolicy: string;
      serviceSchedule: string;
      privacy: string;
      terms: string;
      dpa: string;
    };
  };
  content: {
    models: Record<string, {
      badge: string;
      description: string;
      category: string;
      rateLabel: string;
      contextWindow: string;
      healthLabel: string;
      recommendedFor: Record<string, string>;
    }>;
    pricing: Record<string, {
      name: string;
      tagline: string;
      price: string;
      period?: string;
      minDeposit?: string;
      features: Record<string, string>;
      ctaText: string;
    }>;
    complianceDocs: Record<string, { title: string; category: string; description: string }>;
    faq: Record<string, { category: string; question: string; answer: string }>;
    blog: Record<string, { title: string; summary: string; readTime: string; category: string; authorRole: string }>;
    onboarding: Record<string, { title: string; tagline: string; description: string }>;
  };
}

const EN: LocalizedContent = {
  ui: {
    about: {
      heroTitle: 'Bridging Global AI Developers to World-Class Compute',
      heroSubtitle: 'Helstera was founded on a simple premise: high-performance LLM intelligence should be legally accessible, reliable, and cost-effective for developers anywhere in the world.',
      missions: {
        rates: { title: 'Rate visibility', description: 'Model rates change. We keep current route terms visible at account level so teams can compare a real quote instead of relying on a frozen headline number.' },
        policy: { title: 'Policy clarity', description: 'The selected account and contract give enterprise teams a documented path for reviewing processing scope, DPA terms, and commercial obligations.' },
        sdk: { title: 'OpenAI SDK Compatible', description: 'Keep the OpenAI-compatible request shape, change the gateway base URL, and select current routes such as DeepSeek V4 Pro, Qwen3.7-Max, and GLM-5.2.' },
      },
      governanceTitle: 'Why governance belongs in the route',
      governanceParagraph1: 'Cross-border AI workloads need a clear operating record: who can access the route, where processing occurs, and which terms apply.',
      governanceParagraph2: 'Helstera connects the model route, account policy, network path, and service terms so engineering, security, and procurement can review the same scope before launch.',
      governanceCapabilitiesTitle: 'Governance capabilities',
      governanceCapabilities: {
        processing: 'Documented processing scope and access boundaries',
        network: 'Account-specific network path and encryption controls',
        retention: 'Account retention and training controls documented in the contract',
        contracts: 'Formal B2B paper DPA and master commercial agreements',
      },
      roadmapTitle: 'Platform Roadmap',
      roadmapSubtitle: 'From a current route catalog to governed enterprise model operations.',
      roadmap: {
        now: { phase: 'Now', title: 'Current Model Gateway', description: 'Managed access to current DeepSeek, Qwen, Kimi, and GLM routes with an OpenAI-compatible API contract and account-level rate terms.' },
        review: { phase: 'Under review', title: 'Dedicated and Local Deployments', description: 'Evaluate single-tenant, dedicated, and local deployment patterns for workloads that need tighter isolation or predictable capacity.' },
        later: { phase: 'Longer term', title: 'Multi-Region Routing', description: 'Extend regional routing and failover options under the same Helstera API contract as demand and compliance requirements mature.' },
      },
    },
    blog: {
      eyebrow: 'Route & Compliance Resources [05]',
      heroTitle: 'Helstera Engineering & Compliance Insights',
      heroSubtitle: 'Current route notes, cross-border data-control guides, and practical migration material for engineering leaders.',
      searchPlaceholder: 'Search route notes, DPA guides, migration tutorials...',
      byPrefix: 'By',
      articleLead: 'When evaluating an LLM gateway for production, three dimensions matter over time: the current rate card, route health under your workload, and the contract boundary around data.',
      articleBody: "Helstera's unified gateway lets teams evaluate current DeepSeek, Qwen, Kimi, and GLM routes while retaining an OpenAI-compatible request contract. The live account rate card remains the source of truth for cost planning.",
      takeawaysTitle: 'Key Takeaways:',
      takeaways: {
        baseUrl: 'Swap base_url to "https://api.helstera.com/v1" without altering prompt templates.',
        dpa: 'Execute DPA contracts to comply with procurement audit requirements.',
        health: 'Validate route health and failover behavior against your own traffic before expanding production volume.',
      },
      backToArticles: 'Back to all articles',
      requestDpa: 'Request Compliance DPA',
      readArticle: 'Read Article',
      noResults: 'No matching articles found for',
    },
    compliance: {
      heroTitle: 'Compliance You Can Review',
      heroSubtitle: 'Helstera gives overseas teams a review path for processing scope, data controls, route operations, and commercial obligations. The selected account and contract define the service boundary for cross-border AI traffic.',
      legalTag: 'Legal & Procurement Assurance',
      policyTitle: 'Account data-processing policy and scope',
      policyDescription: 'This structure enables overseas enterprises to utilize premier LLM inference while meeting internal procurement, legal, and GDPR-aligned data governance requirements.',
      requestDocuments: 'Request Current Documents',
      contactUs: 'Contact Us',
      provideTitle: 'What We Provide',
      provideItems: {
        msa: 'Commercial services agreement for review',
        dpa: 'Data Processing Agreement (DPA) template for review',
        schedule: 'Service availability, support, and service-credit schedule',
        retention: 'Clear data handling and retention policy documentation',
      },
      securityTitle: 'Data Security Principles',
      securityItems: {
        payload: 'Payload handling follows the account policy and contract; confirm retention scope before rollout',
        logs: 'System logs contain strictly non-sensitive token billing metadata',
        path: 'Network path, processing location, and review evidence are documented per account',
      },
      pillars: {
        policy: { label: '[01] DATA POLICY', title: 'Retention and training controls', description: 'The account policy and service terms define retention, telemetry, and training boundaries for customer payloads.' },
        telemetry: { label: '[02] OBSERVABILITY', title: 'Metadata and route telemetry', description: 'Operational telemetry covers usage, status, and support signals; payload logging follows the account policy.' },
        network: { label: '[03] NETWORK EVIDENCE', title: 'Reviewable service path', description: 'The selected account defines the network path, processing location, and evidence available for legal and procurement review.' },
      },
      materialsTitle: 'Current Governance Materials',
      materialsSubtitle: 'Current policy and contract materials are available for review; the applicable scope is confirmed for your account and procurement path.',
      legalDocument: 'LEGAL DOCUMENT',
      requestVersion: 'Request Current Version',
    },
    contact: {
      eyebrow: 'Enterprise Support & Sales [06]',
      heroTitle: 'Talk to Our Enterprise Team',
      heroSubtitle: 'Whether you need an enterprise custom quote, legal DPA review, or dedicated high-QPS route allocation, our engineering and compliance leads are ready to assist.',
      inquiryReceived: 'Inquiry Received',
      receivedPrefix: 'Thank you,',
      receivedMiddle: 'Your inquiry has been routed to the relevant enterprise, legal, or engineering contact. We will follow up at',
      receivedSuffix: 'with the next step.',
      sendAnother: 'Send Another Message',
      formTitle: 'Send an Enterprise Inquiry',
      fullName: 'Your Full Name *',
      workEmail: 'Work Email *',
      company: 'Company / Project Name *',
      topic: 'Topic / Inquiry Area',
      namePlaceholder: 'e.g. Alex Rivera',
      emailPlaceholder: 'alex@company.com',
      companyPlaceholder: 'Nexus AI Inc.',
      topicOptions: {
        sales: 'Enterprise Volume Pricing',
        dpa: 'Legal DPA & Compliance Contract',
        qps: 'Dedicated High-QPS Route Allocation',
        custom: 'Custom Invoicing / NET30 PO',
      },
      volumeLabel: 'Estimated Monthly Token Volume',
      volumeOptions: {
        '10M': '10 Million - 50 Million Tokens',
        '50M': '50 Million - 250 Million Tokens',
        '1B': '250 Million - 1 Billion Tokens',
        '1B+': '1 Billion+ Tokens (Custom Compute Hub)',
      },
      messageLabel: 'Message or Specific Requirements',
      messagePlaceholder: 'Describe your current setup, target models, latency requirements, or legal compliance needs...',
      submit: 'Submit Enterprise Inquiry',
      directChannels: '[DIRECT CHANNELS]',
      responseChannel: 'Enterprise response channel',
      responseWindow: 'Response window confirmed during onboarding',
      businessHours: 'Business hours: 09:00 - 21:00 UTC+8 (Mon-Sun)',
      directEmail: 'Direct Email',
      regionalOperations: 'Regional service operations',
      regionalDescription: 'Account-specific service region and processing scope are confirmed during onboarding.',
      requestDpa: 'Request B2B DPA Contract',
    },
    docs: {
      heroTitle: 'Start Integration in Minutes',
      heroSubtitle: 'Helstera provides an OpenAI-compatible API. Change the base URL and key, select a current route, then validate the responses your application depends on.',
      migrationTitle: 'A controlled route migration',
      steps: {
        one: { label: 'STEP 01', title: 'Generate API Key', description: 'Create your production API key instantly from the Helstera dashboard.' },
        two: { label: 'STEP 02', title: 'Replace Base URL', description: 'Set https://api.helstera.com/v1 as your OpenAI baseURL.' },
        three: { label: 'STEP 03', title: 'Select Model', description: 'Pass a current route ID such as deepseek-v4-pro or qwen3.7-max.' },
        four: { label: 'STEP 04', title: 'Run Request', description: 'Run a controlled request, inspect the response shape, and confirm live route terms before production use.' },
      },
      quickstartTitle: 'Quickstart Code Generator',
      getLiveApiKey: 'Get Live API Key',
      targetModel: 'Target Model:',
      copyCode: 'Copy Code',
      interactiveTag: '[INTERACTIVE GATEWAY SIMULATOR]',
      playgroundTitle: 'Live API Gateway Playground',
      simulatedResponse: 'Simulated Instant Response',
      selectModelRoute: 'Select Model Route',
      temperature: 'Temperature',
      promptMessage: 'Prompt Message',
      processingQuery: 'Processing Query...',
      executeRequest: 'Execute Gateway Request',
      responseOutput: 'Response Output',
      tokenUnit: 'tokens',
      routing: 'Routing through the selected account service path...',
      clickExecute: 'Click "Execute Gateway Request" to inspect a simulated response for the selected route.',
      simulationOnly: 'Simulation only. Verify live status in your account.',
      compatibleRoute: 'OpenAI-compatible route',
    },
    faq: {
      eyebrow: 'Frequently Asked Questions [09]',
      heroTitle: 'Everything You Need to Know',
      title: 'Everything You Need to Know',
      subtitle: 'Common questions about cross-border compliance, account rates, route health, and data-processing terms.',
      categories: {
        all: 'All Questions',
        compliance: 'Compliance & DPA',
        billing: 'Pricing & Billing',
        technical: 'SDK Integration',
        models: 'Supported Models',
      },
      searchPlaceholder: 'Search FAQs...',
      noResults: 'No matching questions found for',
    },
    modals: {
      apiKeys: {
        title: 'Developer Console & API Sandbox',
        description: 'Manage credentials & test endpoints in real time',
        tabs: { keys: 'API Keys', playground: 'Live Playground', usage: 'Credits & Usage' },
        interactive: 'Interactive',
        policyTitle: 'Reviewable data policy',
        policyDescription: 'Requests authenticated with your Helstera API keys follow the retention, training, and access policy attached to the account contract.',
        activeKeys: 'Your Active API Keys',
        sampleKeyNames: { production: 'Production Gateway Key', staging: 'Staging Sandbox Key' },
        sampleLastUsed: { justNow: 'Just now', daysAgo: '2 days ago', never: 'Never' },
        createKey: 'Create New Key',
        newKeyName: 'New API Key',
        keyLabel: 'API Key Label / Purpose',
        keyPlaceholder: 'e.g. Production reasoning route',
        generateKey: 'Generate Key',
        cancel: 'Cancel',
        created: 'Created:',
        used: 'Used:',
        copyKey: 'Copy Key',
        revokeKey: 'Revoke Key',
        fullDocs: 'Full API Documentation',
        targetLlm: 'Select Target LLM',
        promptPreset: 'Prompt Preset',
        defaultPrompt: 'Write a high-performance Python script to query the Helstera OpenAI-compatible endpoint and stream reasoning tokens.',
        presetA: 'Compare the production trade-offs between a current reasoning route and a fast general route.',
        presetB: 'Write a Python async streaming client for the OpenAI-compatible Helstera API.',
        reasoningAnalyzing: 'Analyzing the prompt for Python streaming implementation...',
        reasoningConstructing: 'Constructing OpenAI client configuration pointing to https://api.helstera.com/v1...',
        reasoningPolicy: 'Applying the selected account data policy.',
        responseContent: 'Request processed through the selected route; retention and training behavior follow the account policy.',
        userPrompt: 'User Prompt',
        promptPlaceholder: 'Enter prompt...',
        characters: 'chars',
        routingSelected: 'Routing via selected model...',
        runRequest: 'Run API Test Request',
        tracing: 'Tracing selected route...',
        codeExport: 'Code Export:',
        generatedSnippet: 'Generated Code Snippet',
        copy: 'Copy',
        outputPayload: 'Live Output Payload',
        awaitingResponse: 'Awaiting simulated route response...',
        clickRun: 'Click "Run API Test Request" to inspect a simulated response and usage shape.',
        selectedRoute: 'Selected route',
        totalTokens: 'Total Tokens',
        live: 'Live',
        telemetry: 'Telemetry',
        accountBalance: 'Account balance',
        monthlyUsage: 'Monthly usage',
        routeHealth: 'Route health',
        checkTerms: 'Check current account terms',
        dashboardSource: 'Account dashboard source',
        verifyRelease: 'Verify before release',
        quotaLimits: 'Tier & Quota Limits',
        requestLimits: 'Request limits',
        tokenLimits: 'Token limits',
        accountConfigured: 'Account configured',
        dataPolicy: 'Data policy',
        contractScoped: 'Contract-scoped',
      },
      contract: {
        title: 'Compliance & Legal Center',
        tabs: { documents: 'Current Documents & Templates', request: 'Request Custom Enterprise Paper Contract' },
        noticeSuffix: '— confirm the current version with your account team.',
        description: 'Review the current governance templates for account processing scope, data controls, and service terms. Request the version that matches your account before circulation.',
        category: 'Category:',
        availability: 'Availability: Review on request',
        requestCopy: 'Request Current Copy',
        submittedTitle: 'Contract Request Submitted',
        submittedDescription: 'Our legal and compliance team will review your requirements and send a customized draft DPA / MSA to',
        fullName: 'Your Full Name *',
        company: 'Company / Organization *',
        email: 'Work Email *',
        documentType: 'Document Type *',
        requirements: 'Custom Compliance Notes or Legal Clauses',
        namePlaceholder: 'e.g. Sarah Jenkins',
        companyPlaceholder: 'e.g. Acme AI Systems LLC',
        emailPlaceholder: 'sarah@acme.com',
        requirementsPlaceholder: 'Specify required sub-processor terms, governing law preferences, or procurement constraints...',
        documentOptions: { DPA: 'Data Processing Agreement (DPA)', MSA: 'Master Commercial Services Agreement (MSA)', ServiceSchedule: 'Service Schedule & Escalation Terms', Enterprise: 'Enterprise Annual Paper Contract' },
        cancel: 'Cancel',
        submit: 'Submit Legal Request',
        requestPrepared: 'Request prepared for',
        selectionRequirement: 'Please provide the current version of',
      },
      ping: {
        origins: { sg: 'Singapore gateway', tokyo: 'Tokyo gateway', fra: 'Frankfurt gateway', sf: 'San Francisco gateway', london: 'London gateway' },
        traceButton: 'Run Real-Time Route Ping Diagnostic',
        tracing: 'Tracing selected route...',
        terminalTitle: 'ROUTE TERMINAL TRACE',
        gateway: 'GATEWAY: api.helstera.com',
        emptyLog: 'Click "Run Real-Time Route Ping Diagnostic" to initiate route trace...',
        selectedRoute: 'Selected route',
        origin: 'Origin',
        status: 'Status',
        simulationComplete: 'Simulation complete',
        policyAttached: 'Account policy scope attached',
        getApiKey: 'Get API Key',
        logs: { resolving: 'Resolving api.helstera.com through the configured gateway...', accepted: 'Gateway accepted the selected origin route.', tls: 'TLS boundary and account policy checked.', model: 'Selected model route:', prepared: 'Simulated request prepared for streaming.', complete: 'Complete. Verify live route health in your account.' },
      },
      tokenBuy: {
        title: 'Top Up API Gateway Credits',
        description: 'Instant Pay-as-you-go API balance top-up',
        successTitle: 'Top Up Successful!',
        addedCredits: 'Added',
        liveRateNotice: 'Current model routes are priced from the live account rate card.',
        close: 'Close',
        getApiKey: 'Get API Key',
        paymentMethod: 'Select Payment Method',
        creditCard: 'Credit Card (Stripe)',
        wire: 'SWIFT Wire / PO',
        crypto: 'USDT / USDC',
        depositAmount: 'Deposit Amount (USD)',
        onboardingTerms: 'Terms confirmed during onboarding',
        currentRate: 'Current route rate',
        balanceTerms: 'Balance terms: account-specific',
        serviceTerms: 'Service terms: contract-scoped',
        requestCredit: 'Request Account Credit',
        processing: 'Processing Payment...',
      },
    },
    community: {
      eyebrow: 'Current Model Routes & Operating Partners',
      title: 'A catalog built for current production decisions',
      governanceName: 'Account governance',
      partners: {
        deepseek: { category: 'Current reasoning and general routes', tag: 'V4 Pro / V4 Flash' },
        qwen: { category: 'General and multimodal routes', tag: 'Qwen3.7-Max / Omni-Plus' },
        moonshot: { category: 'Long-context route', tag: 'Kimi K3' },
        zhipu: { category: 'Reasoning and bilingual route', tag: 'GLM-5.2' },
        gateway: { category: 'OpenAI-compatible access', tag: 'One route contract' },
        governance: { category: 'Data-processing review', tag: 'Contract scope' },
      },
      joinTitle: 'Join the Helstera developer community',
      joinDescription: 'Get route updates, integration notes, operational status, and enterprise onboarding support.',
      joinCommunity: 'Join Community',
      githubSdks: 'GitHub SDKs',
    },
    enterprise: {
      title: 'Governed AI operations',
      subtitle: 'Helstera gives international enterprises and tech teams a reviewable package of commercial contracts, data-processing terms, and account controls.',
      pathTitle: 'Account-governed request path',
      pathHint: 'Click any node in the pipeline to inspect technical & legal specs',
      stepPrefix: 'Step',
      detailLabels: { routeSignal: 'Route Signal', security: 'Security Spec', compliance: 'Regulatory Policy', specs: 'Technical Specs' },
      evidence: 'Evidence available for review',
      dpaTitle: 'Need a Formal Paper DPA or Procurement Review?',
      dpaDescription: 'Our legal and compliance team can prepare a Data Processing Agreement and work with procurement on the scope, evidence, and service terms for review.',
      requestPack: 'Request Contract Pack',
      nodes: {
        client: { title: '1. Client / SDK', tag: 'TLS 1.3 / Authenticated API', summary: 'Applications and agents initiate requests through the OpenAI-compatible endpoint.', details: { routeSignal: 'Account route telemetry', security: 'TLS 1.3 transit encryption', compliance: 'Token and origin checks', policy: 'Payload handling follows account policy', specs: 'OpenAI Python, Node.js, LangChain, and compatible clients' } },
        network: { title: '2. Network and Service Path', tag: 'Account-specific interconnect', summary: 'The selected account defines the network path, region, and operational service scope.', details: { routeSignal: 'Live route telemetry', security: 'Encryption and path controls documented', compliance: 'Service terms defined in contract', policy: 'Network boundary available for review', specs: 'Region and interconnect details depend on the account' } },
        governance: { title: '3. Governance and Processing Boundary', tag: 'Contract and data policy scope', summary: 'The account contract defines processing scope, region, and review obligations for cross-border traffic.', details: { routeSignal: 'Account route telemetry', security: 'Retention controls documented', compliance: 'Processing scope available for review', policy: 'Custom B2B Data Processing Agreement (DPA)', specs: 'Account-specific evidence surface' } },
        routes: { title: '4. Current Model Routes', tag: 'DeepSeek V4 / Qwen3.7 / GLM-5.2', summary: 'Current model routes selected by capability, account policy, and live availability.', details: { routeSignal: 'Live route telemetry', security: 'Isolated Micro-VM Sandboxes', compliance: 'Account isolation controls', policy: 'Training boundary defined by contract', specs: 'Route-specific model and infrastructure details' } },
        retention: { title: '5. Retention Policy', tag: 'Account policy and contract', summary: 'Apply the approved retention and training boundaries to the production route.', details: { routeSignal: 'Policy verification', security: 'Retention controls documented', compliance: 'Processing scope available for review', policy: 'Training boundary defined by contract', specs: 'Account policy and contract lifecycle' } },
      },
      pillars: {
        governance: { title: 'Account governance and policy scope', description: 'The selected account and contract define processing scope, retention options, and the evidence available for cross-border review.', badge: 'Review scope' },
        retention: { title: 'Retention and training controls', description: 'Retention, telemetry, and training boundaries are configured through account policy and documented in the approved service terms.', badge: 'Policy attached' },
        contract: { title: 'Commercial Paper DPA & Contract', description: 'Custom enterprise legal paper with Data Processing Agreements (DPA), standard contractual clauses (SCC), and negotiated service terms.', badge: 'DPA Ready' },
        network: { title: 'Network and route evidence', description: 'Dedicated network paths, route telemetry, and negotiated service terms are documented for enterprise review.', badge: 'Route terms' },
      },
    },
    showcase: {
      eyebrow: 'ROUTE OPERATING VIEW • CURRENT DATA ONLY',
      title: 'REDEFINING CROSS-BORDER AI ROUTE OPERATIONS',
      subtitle: 'A governed gateway for current DeepSeek, Qwen, Kimi, and GLM routes, with live account terms and an OpenAI-compatible client contract.',
      publicRoute: 'PROVIDER-MANAGED PUBLIC ROUTE',
      publicHops: 'Public Internet Hops',
      publicTitle: 'Public routes with fragmented operating context',
      publicDescription: 'Standard public API paths can introduce changing transit conditions, provider-specific rate cards, and data handling assumptions that are difficult to review in one place.',
      rateSource: 'Rate source',
      providerCard: 'Provider card',
      termsChange: 'Terms can change',
      routeSignal: 'Route signal',
      liveTelemetry: 'Live telemetry',
      checkWorkload: 'Check your workload',
      reviewGap: 'Review gap: route and policy context split across providers',
      providerTerms: 'Terms vary by provider',
      governedRoute: 'HELSTERA GOVERNED ROUTE',
      currentTerms: 'Current route terms',
      governedTitle: 'Current routes with reviewable terms',
      governedDescription: 'Helstera puts the current route catalog, account rate terms, data policy, and service scope in one reviewable operating package.',
      routeCatalog: 'Helstera route catalog',
      confirmAccount: 'Confirm at account level',
      networkHealth: 'Network and route health',
      validateAccount: 'Validate in your account',
      retentionAttached: 'Account retention policy attached',
      getCredentials: 'Get API Credentials',
      blocks: {
        policy: { title: 'Account Policy and Contract Scope', description: "Keeps the selected account's processing scope, retention choices, and service terms available for legal and procurement review." },
        api: { title: 'OpenAI-Compatible API Contract', description: 'Point your baseURL to https://api.helstera.com/v1, then validate the selected route in a controlled account.' },
        commercial: { title: 'Formal B2B Commercial Contracts', description: 'Settlement options in HKD or USD where available, with corporate invoicing, data-processing terms, and service conditions documented for review.' },
      },
    },
    comparison: {
      eyebrow: 'Interactive Horizontal Split View',
      title: 'Slide to Compare Infrastructure',
      subtitle: "Drag the split handle to compare a provider-managed route with Helstera's account-governed route and review the operating context side by side.",
      publicRoute: 'Provider-managed public route',
      publicTitle: 'Public Internet Bottlenecks',
      publicDescription: 'A public route can combine provider rate limits, changing retail terms, and network conditions that are hard to evaluate against your own workload.',
      dataLogging: 'Data Logging',
      providerPolicy: 'Provider policy',
      governedRoute: 'Helstera governed route',
      governedTitle: 'Account-governed route with current terms',
      governedDescription: 'The selected account documents the network path, processing boundary, and retention policy for the route your team is evaluating.',
      helsteraRate: 'Helstera rate',
      accountSpecific: 'Account-specific',
      routeHealth: 'Route health',
      validateAccount: 'Validate in account',
      contractPolicy: 'Contract-scoped policy',
      dpaAvailable: 'DPA available',
      dragHint: 'Drag horizontally to explore difference',
    },
    carousel: {
      eyebrow: 'Interactive Horizontal Swipe Showcase',
      title: 'Proven Enterprise Deployment Scenarios',
      subtitle: "Swipe or drag horizontally to explore how global engineering teams use Helstera's governed cross-border gateway.",
      scrollLeft: 'Scroll left',
      scrollRight: 'Scroll right',
      useCases: {
        finance: { title: 'High-Frequency Algorithmic Trading Agents', category: 'Financial Engineering', stats: 'Reasoning routes • Account policy review', description: 'Run automated market analysis, financial report processing, and sentiment workflows with a current route and a documented account data policy.', cta: 'Deploy Finance Agent' },
        coding: { title: 'Autonomous Code Review & Refactoring Pipelines', category: 'Developer Operations', stats: 'Current reasoning routes • OpenAI-compatible API', description: 'Plug the OpenAI-compatible endpoint into CI/CD pipelines to generate tests, review changes, and improve code with a route ID your team can govern.', cta: 'Setup CI/CD Pipeline' },
        multimodal: { title: 'Real-Time Voice & Multimodal Customer Agents', category: 'Customer Experience', stats: 'Multimodal routes • Live route health', description: 'Power voice agents and image analysis workflows with current multimodal routes, then validate streaming behavior against your own traffic.', cta: 'Build Voice Agent' },
        legal: { title: 'Enterprise Legal Contract & DPA Audit Engine', category: 'Compliance & Legal Tech', stats: 'DPA and service schedule • Policy review', description: 'Analyze sensitive cross-border legal agreements, compliance reports, and patent filings with a documented processing scope and contract review path.', cta: 'Request Legal DPA' },
        med: { title: 'Medical Research & Biomedical Literature Summarization', category: 'Healthcare & Biotech', stats: 'Long-context route • Kimi K3', description: 'Process medical journals, clinical trials, and research papers with a current long-context route and a documented data policy.', cta: 'Access Medical LLMs' },
      },
    },
    marquee: {
      label: 'LIVE HORIZONTAL STREAM • CURRENT ROUTES & ACCOUNT TERMS',
      pauseHint: 'Hover to pause continuous horizontal scroll',
      metrics: {
        catalog: { label: 'Current route catalog', value: 'DeepSeek / Qwen / Kimi / GLM', highlight: 'Live IDs' },
        rates: { label: 'Rate card', value: 'Account-specific terms', highlight: 'Confirm at request' },
        data: { label: 'Data processing', value: 'Policy and contract scope', highlight: 'Reviewable' },
        health: { label: 'Route health', value: 'Account telemetry', highlight: 'Current signal' },
        compat: { label: 'OpenAI compatibility', value: 'baseURL="https://api.helstera.com/v1"', highlight: 'Keep request shape' },
        workflow: { label: 'Developer workflow', value: 'Model ID plus API key', highlight: 'Controlled rollout' },
        enterprise: { label: 'Enterprise review', value: 'DPA and service schedule', highlight: 'Procurement-ready' },
        retention: { label: 'Retention policy', value: 'Configured per account', highlight: 'Documented' },
      },
    },
    story: {
      keyDetails: 'Key Architecture Details',
      retentionAttached: 'Retention policy attached',
      requestKey: 'Request Key',
      dpaContract: 'DPA Contract',
      chapters: {
        dilemma: { actNumber: 'ACT I', title: 'The stale-data problem', subtitle: 'Production teams need current route terms, not a frozen launch deck disconnected from live evidence.', quote: '"A useful gateway makes model choice, data handling, and service terms reviewable before traffic moves."', badge: 'The Challenge', highlightStat: 'Review', statLabel: 'Current account terms', detailPoints: { geography: 'Geographical IP blocks and unstable proxy routes', privacy: 'Unclear enterprise data protection standards', access: 'Restrictive API access for non-local software teams' } },
        breakthrough: { actNumber: 'ACT II', title: 'The governed route', subtitle: 'A gateway where the network path, processing boundary, and contract terms are reviewed together.', quote: '"The route is part of the product: its data policy and service obligations travel with the integration."', badge: 'The Innovation', highlightStat: 'Policy', statLabel: 'Contract-scoped controls', detailPoints: { network: 'Account-specific network path and region', retention: 'Retention and training policy attached to the route', commercial: 'Commercial terms and DPA available for review' } },
        engine: { actNumber: 'ACT III', title: 'A current model catalog', subtitle: 'DeepSeek V4, Qwen3.7, Kimi K3, and GLM-5.2 routes in one OpenAI-compatible endpoint.', quote: '"Choose a route by capability and validate its live terms before you scale it."', badge: 'The Engine', highlightStat: 'Catalog', statLabel: 'Current model routes', detailPoints: { deepseek: 'DeepSeek V4 Pro and Flash routes', qwen: 'Qwen3.7-Max and Qwen3.5-Omni-Plus routes', kimi: 'Kimi K3 and GLM-5.2 routes' } },
        trust: { actNumber: 'ACT IV', title: 'Operational clarity', subtitle: 'Use the live rate card, route health, and policy evidence to make a production decision you can defend.', quote: '"Enterprise AI operations improve when the current model, current terms, and current evidence stay connected."', badge: 'The Result', highlightStat: 'Live', statLabel: 'Rate and route evidence', detailPoints: { rate: 'Current rate card at account level', testing: 'Controlled test account before production rollout', dpa: 'DPA and service schedule for procurement review' } },
      },
    },
    roadmap: {
      eyebrow: 'Strategic Product Execution',
      title: 'Helstera Development Roadmap',
      subtitle: 'From a current route catalog to governed, multi-region AI operations.',
      currentPhase: 'Current Phase',
      completed: 'Completed',
      liveExecution: 'Live Execution',
      upcoming: 'Upcoming',
      phases: {
        current: { phase: 'Current', quarter: 'Available now', title: 'Current model gateway', items: { api: 'OpenAI-compatible gateway contract', catalog: 'Current DeepSeek, Qwen, Kimi, and GLM route catalog', policy: 'Account-level rate and data policy review', console: 'Developer console and controlled route testing' } },
        next: { phase: 'Next', quarter: 'In progress', title: 'Route health and policy evidence', items: { telemetry: 'Account telemetry for route selection', boundaries: 'Clearer retention and training boundaries', rates: 'Current rate card surfaced in the developer flow', procurement: 'Procurement-ready DPA and service schedules' } },
        review: { phase: 'Under review', quarter: 'Roadmap candidate', title: 'Dedicated and private deployments', items: { tenant: 'Single-tenant route evaluation', capacity: 'Private deployment and capacity planning', integrations: 'More detailed client and agent integrations', failover: 'Regional failover requirements review' } },
        later: { phase: 'Longer term', quarter: 'Exploration', title: 'Policy-aware multi-region routing', items: { routing: 'Regional routing under one API contract', residency: 'Policy-aware failover and residency controls', mappings: 'Expanded enterprise compliance mappings', onboarding: 'Broader current-model onboarding process' } },
      },
    },
    health: {
      eyebrow: 'Global Route Health Signals',
      title: 'Route health and service status',
      complete: 'Route check complete',
      accountRequired: 'Account check required',
      checking: 'Checking routes...',
      awaitCheck: 'Awaiting account check',
      checked: 'Checked',
      configured: 'Configured',
      signal: 'Route signal',
      checkComplete: 'Check complete',
      runCheck: 'Run account check',
      fallbackTitle: 'Route fallback policy',
      fallbackDescription: 'Route fallback policy can be reviewed with your account team',
      retentionTitle: 'Retention policy boundary',
      retentionDescription: 'Processing and retention scope are documented for review',
      scopeTitle: 'Cross-border service scope',
      scopeDescription: 'Network path and region depend on the account',
      regions: { 'HK-01': 'Hong Kong Gateway', 'SG-01': 'Singapore Edge', 'TYO-02': 'Tokyo Hub', 'US-EAST': 'US East (N. Virginia)', 'FRA-01': 'Frankfurt Central' },
    },
    footer: {
      governanceScope: 'Reviewable governance scope',
      currentTerms: 'Current terms',
      governanceDescription: 'Commercial contracts and DPA materials are available for enterprise review.',
      retentionPolicy: 'Account retention policy',
      serviceSchedule: 'Service schedule',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      dpa: 'Data Processing Agreement (DPA)',
    },
  },
  content: {
    models: {
      'deepseek-v4-pro': { badge: 'Frontier reasoning', description: 'A current reasoning route for complex analysis, coding, and multi-step work. Confirm live availability and account terms before production use.', category: 'Reasoning', rateLabel: 'Live rate card', contextWindow: 'See provider model card', healthLabel: 'Live route telemetry', recommendedFor: { reasoning: 'Complex reasoning', coding: 'Code generation', planning: 'Planning', analysis: 'Technical analysis' } },
      'deepseek-v4-flash': { badge: 'Fast general', description: 'A current general-purpose route for assistants, extraction, and high-volume workflows that need a responsive default.', category: 'General', rateLabel: 'Live rate card', contextWindow: 'See provider model card', healthLabel: 'Live route telemetry', recommendedFor: { assistants: 'Assistants', extraction: 'Extraction', volume: 'High-volume workflows', multilingual: 'Multilingual tasks' } },
      'qwen3.7-max': { badge: 'Flagship general', description: 'A current flagship general route for multilingual instruction following, tool use, and structured enterprise output.', category: 'General', rateLabel: 'Live rate card', contextWindow: 'See provider model card', healthLabel: 'Live route telemetry', recommendedFor: { enterprise: 'Enterprise workflows', tools: 'Tool use', structured: 'Structured output', operations: 'Customer operations' } },
      'qwen3.5-omni-plus': { badge: 'Multimodal', description: 'A multimodal route for text, image, and audio workflows where one context needs multiple input types.', category: 'Multimodal', rateLabel: 'Live rate card', contextWindow: 'See provider model card', healthLabel: 'Live route telemetry', recommendedFor: { voice: 'Voice workflows', image: 'Image understanding', agents: 'Multimodal agents', content: 'Content operations' } },
      'kimi-k3': { badge: 'Long context', description: 'A current long-context route for large documents, research synthesis, and knowledge-heavy agent workflows.', category: 'Long Context', rateLabel: 'Live rate card', contextWindow: 'See provider model card', healthLabel: 'Live route telemetry', recommendedFor: { documents: 'Large documents', research: 'Research synthesis', knowledge: 'Knowledge agents', analysis: 'Long-form analysis' } },
      'glm-5.2': { badge: 'Reasoning and bilingual', description: 'A current route for planning, analysis, bilingual work, and tool-enabled enterprise applications.', category: 'Reasoning', rateLabel: 'Live rate card', contextWindow: 'See provider model card', healthLabel: 'Live route telemetry', recommendedFor: { planning: 'Planning', bilingual: 'Bilingual analysis', tools: 'Tool-enabled apps', reports: 'Report generation' } },
    },
    pricing: {
      developer: { name: 'Developer Plan', tagline: 'A clean path for prototyping, evaluation, and early production traffic.', price: 'Usage-based', minDeposit: 'Start with an account balance', features: { audience: 'For individual builders and small teams', catalog: 'Access the current supported route catalog', api: 'OpenAI-compatible request format', metering: 'Account-level usage metering', keys: 'Self-serve API key management', rates: 'Rate terms shown before production use' }, ctaText: 'Get Started with Developer Plan' },
      pro: { name: 'Pro Plan', tagline: 'More routing control, operational support, and room for growing production workloads.', price: 'Usage-based', period: 'with reserved capacity options', features: { audience: 'For SaaS teams moving into production', included: 'Everything in Developer Plan included', limits: 'Higher limits and priority routing options', support: 'Operational support for rollout', contract: 'Commercial contract and DPA review', terms: 'Route-specific service terms' }, ctaText: 'Get Started with Pro Plan' },
      enterprise: { name: 'Enterprise Plan', tagline: 'Custom model routing, dedicated account management, formal contracts, DPA, and negotiated service terms.', price: 'Custom', period: 'contract', features: { audience: 'For teams with compliance and volume requirements', routing: 'Custom model routing and private deployment review', support: 'Dedicated account and implementation support', contract: 'Commercial contract and custom DPA review', terms: 'Negotiated service, support, and data terms', billing: 'Invoicing and custom payment workflows' }, ctaText: 'Talk to Sales for Enterprise' },
    },
    complianceDocs: {
      'data-processing-scope': { title: 'Account Data-Processing Scope Pack', category: 'Governance Pack', description: 'Reviewable documents for processing scope, access boundaries, retention choices, and account obligations.' },
      'dpa-template': { title: 'Standard International Data Processing Agreement (DPA)', category: 'Legal Contract', description: 'Contract template covering account data-processing scope, access responsibilities, and applicable privacy obligations.' },
      'service-schedule': { title: 'Service Availability & Support Schedule', category: 'Service Level Agreement', description: 'Contract-specific availability, support, escalation, and service-credit terms for the selected route and account.' },
      'security-observability': { title: 'Helstera Security and Observability Notes', category: 'Technical Notes', description: 'Review route controls, TLS 1.3 transit encryption, telemetry fields, and evidence available to the account.' },
    },
    faq: {
      'enterprise-compliance': { category: 'compliance', question: 'What does enterprise compliance review cover?', answer: 'Helstera provides a contract and documentation path for enterprise review, including data-processing terms, service scope, and account-specific obligations. Ask our compliance team for the current package for your route and region.' },
      'privacy-handling': { category: 'security', question: 'How is data privacy handled? Is prompt data retained or used for training?', answer: 'Data handling is defined by the account policy and contract. Confirm retention, logging, training, and access scope with compliance before rollout.' },
      'formal-contract': { category: 'compliance', question: 'Can you provide a formal commercial contract and DPA?', answer: 'Yes. We can provide commercial contracts, Data Processing Agreements, and service schedules for procurement review. The final terms depend on the selected route, region, and account requirements.' },
      'network-path': { category: 'technical', question: 'Does the data pass through China\'s public internet?', answer: 'The route depends on your account and destination. Helstera documents the network path, encryption boundary, and processing location for the selected service so your team can review the actual deployment scope.' },
      'supported-models': { category: 'models', question: 'Which flagship models are supported through the unified gateway?', answer: 'The current catalog includes DeepSeek V4 Pro, DeepSeek V4 Flash, Qwen3.7-Max, Qwen3.5-Omni-Plus, Kimi K3, and GLM-5.2. Availability and rate terms are account-specific, so use the live route card before sending production traffic.' },
      'token-billing': { category: 'billing', question: 'How does token billing work and what payment options are supported?', answer: 'Usage is metered against the current account rate card. Payment and invoicing options are agreed during onboarding and can include card, wire, or enterprise purchase-order workflows where available.' },
      'sdk-migration': { category: 'technical', question: 'How fast is migration if we currently use the OpenAI SDK?', answer: 'Start with a controlled migration: change base_url to https://api.helstera.com/v1, update the key, and select one current model ID. Keep your existing request shape, then validate tool calls, streaming, and structured output before expanding traffic.' },
    },
    blog: {
      'deepseek-v4-routing-notes': { title: 'DeepSeek V4 Pro and Flash: Choosing a Current Production Route', summary: 'A practical guide to selecting a reasoning or general-purpose route by workload, operational constraints, and the current account rate card.', readTime: '6 min read', category: 'Route Intelligence', authorRole: 'Head of Infrastructure, Helstera' },
      'cross-border-ai-data-controls': { title: 'Cross-Border AI Data Controls: From Route Review to Contract', summary: 'How engineering, security, and procurement teams document processing scope, retention choices, network boundaries, and service terms before launch.', readTime: '8 min read', category: 'Legal & Compliance', authorRole: 'Chief Legal Counsel' },
      'openai-compatible-route-migration': { title: 'Migration Guide: Add a Current Model Route Without Rewriting Your Client', summary: 'A practical walkthrough for changing the base URL, selecting a current model ID, and validating responses in Python, Node.js, and LangChain.', readTime: '4 min read', category: 'Developer Guide', authorRole: 'Lead Developer Relations' },
    },
    onboarding: {
      '01': { title: 'Create Free Account', tagline: 'Start with a controlled test account', description: 'Register with email or GitHub OAuth, then create a scoped key for route evaluation before production onboarding.' },
      '02': { title: 'Generate API Key', tagline: 'Create a scoped credential', description: 'Create production or test API keys with custom rate limits and usage alerts directly in the dashboard.' },
      '03': { title: 'Update 1 Line in SDK', tagline: 'Keep the request shape', description: 'Point your existing OpenAI Python or Node client to https://api.helstera.com/v1, enter your Helstera key, and choose a current model ID.' },
      '04': { title: 'Confirm Rate Card & Terms', tagline: 'Production readiness review', description: 'Confirm the current rate card, route availability, data policy, and commercial terms with the people responsible for launch approval.' },
    },
  },
};

type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

const isRecord = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null && !Array.isArray(value);

const mergeLocale = (overrides: DeepPartial<LocalizedContent>): LocalizedContent => {
  const merge = (base: unknown, patch: unknown): unknown => {
    if (!isRecord(base)) return patch ?? base;

    const merged: Record<string, unknown> = Object.fromEntries(
      Object.entries(base).map(([key, value]) => [key, merge(value, undefined)]),
    );
    if (!isRecord(patch)) return patch ?? merged;

    for (const [key, value] of Object.entries(patch)) merged[key] = merge(base[key], value);
    return merged;
  };
  return merge(EN, overrides) as unknown as LocalizedContent;
};

const applyPathOverrides = (overrides: Record<string, string>): LocalizedContent => {
  const localized = mergeLocale({}) as unknown as Record<string, unknown>;

  for (const [path, value] of Object.entries(overrides)) {
    const parts = path.split('.');
    const matchPath = (current: unknown, index: number): string[] | undefined => {
      if (index === parts.length) return [];
      if (!isRecord(current)) return undefined;

      for (let end = parts.length; end > index; end -= 1) {
        const key = parts.slice(index, end).join('.');
        if (!Object.prototype.hasOwnProperty.call(current, key)) continue;

        const rest = matchPath(current[key], end);
        if (rest) return [key, ...rest];
      }

      return undefined;
    };

    const segments = matchPath(localized, 0);
    if (!segments || segments.length === 0) throw new Error(`Invalid localized content path: ${path}`);

    let current = localized;
    for (const segment of segments.slice(0, -1)) {
      const next = current[segment];
      if (!isRecord(next)) throw new Error(`Invalid localized content path: ${path}`);
      current = next;
    }

    current[segments[segments.length - 1]] = value;
  }

  return localized as unknown as LocalizedContent;
};

export const LOCALIZED_CONTENT: Record<Language, LocalizedContent> = {
  en: EN,
  zh: applyPathOverrides(LOCALIZED_CONTENT_OVERRIDES.zh),
  ja: applyPathOverrides(LOCALIZED_CONTENT_OVERRIDES.ja),
  es: applyPathOverrides(LOCALIZED_CONTENT_OVERRIDES.es),
  de: applyPathOverrides(LOCALIZED_CONTENT_OVERRIDES.de),
  fr: applyPathOverrides(LOCALIZED_CONTENT_OVERRIDES.fr),
};
