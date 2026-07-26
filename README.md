# Helstera - Central Site Configuration & Content Guide / 站点配置与文案修改指南

---

## 📖 English Guide

### Overview
All site copy, brand information, model pricing, compliance documents, FAQs, blog articles, and onboarding steps are centralized in a single, well-structured configuration file:
📍 **`/src/config/siteConfig.ts`**

You can easily customize any text or data without touching any component logic.

---

### 📂 Section Index (`/src/config/siteConfig.ts`)

The configuration file is divided into **10 distinct indexed sections**:

| Section # | Section Name | Description | Key Fields |
| :--- | :--- | :--- | :--- |
| **01** | `brand` | Core brand metadata & contacts | `name`, `title`, `description`, `apiBaseUrl`, `contactEmail`, `address` |
| **02** | `hero` | Main homepage Hero banner copy | `eyebrowTag`, `mainTitle`, `subtitle`, `primaryCtaText`, `stats` |
| **03** | `bentoFeatures` | 5 Core feature cards & code snippets | `sectionTitle`, `sectionSubtitle`, `features` (unit economics, SDK, DPA, ZDR, SLA) |
| **04** | `scrollStory` | Keynote interactive scroll acts | `sectionTitle`, `acts` (Act I - IV titles, descriptions, badges, stats) |
| **05** | `models` | Supported AI Models & token pricing | `id`, `name`, `inputPrice`, `outputPrice`, `openAiInputPrice`, `contextWindow` |
| **06** | `pricingTiers` | Pricing plans & membership tiers | `name`, `price`, `minDeposit`, `features`, `ctaText` |
| **07** | `complianceDocs` | Enterprise compliance whitepapers | `title`, `category`, `description`, `fileSize`, `fileType` |
| **08** | `faqs` | Frequently asked questions | `category`, `question`, `answer` |
| **09** | `blogs` | Tech blog posts & updates | `id`, `title`, `summary`, `date`, `readTime`, `author` |
| **10** | `onboardingSteps` | 4-step onboarding flow | `number`, `title`, `tagline`, `description` |

---

### 🛠️ How to Edit Text or Model Pricing

1. Open **`/src/config/siteConfig.ts`**.
2. Locate the relevant section (e.g., `models` to change model prices or `hero` to change the main title).
3. Update the string values or numeric figures.
4. Save the file — the changes will instantly reflect across the entire website!

---

## 🇨🇳 中文指南

### 概览
全站的所有文案、品牌信息、AI 模型价格、合规法律条文、常见问题 (FAQ)、博客文章及 4 步注册流程，均已统一收录在以下单一配置文件中：
📍 **`/src/config/siteConfig.ts`**

无需修改任何前端组件代码，仅需修改此文件中的对应字段即可实时更新全站文案。

---

### 📂 配置文件分区索引说明 (`/src/config/siteConfig.ts`)

配置文件按逻辑划分为 **10 个独立区块**，方便快速定位与修改：

| 区块编号 | 区块名称 | 说明 | 核心可修改字段 |
| :--- | :--- | :--- | :--- |
| **01** | `brand` | 品牌基础信息与联系方式 | `name` (品牌名), `title` (网页标题), `apiBaseUrl` (API基址), `contactEmail` (联系邮箱) |
| **02** | `hero` | 首页 Hero 核心标语与统计 | `mainTitle` (主标题), `subtitle` (副标题), `stats` (数据面板) |
| **03** | `bentoFeatures` | 5 大核心合规与计算优势 | `sectionTitle`, `features` (包含单位经济学、SDK兼容、DPA、ZDR等) |
| **04** | `scrollStory` | Keynote 交互式滚动故事章节 | `acts` (第一幕至第四幕标题、描述、标签、比率数据) |
| **05** | `models` | AI 模型列表与 Token 价格 | `name` (模型名), `inputPrice` (输入价格), `openAiInputPrice` (对比原价) |
| **06** | `pricingTiers` | 订阅套餐与价格级别 | `name`, `price`, `minDeposit` (最低充值), `features` (权益列表) |
| **07** | `complianceDocs` | 企业合规与白皮书文件 | `title` (文档名), `category` (类别), `description` (概述) |
| **08** | `faqs` | 常见问题解答列表 | `category` (分类), `question` (问题), `answer` (回答) |
| **09** | `blogs` | 博客与技术文章列表 | `title` (文章标题), `summary` (摘要), `date`, `readTime` |
| **10** | `onboardingSteps` | 4 步接入与购买流程 | `number`, `title`, `tagline`, `description` |

---

### 🛠️ 如何修改文案与价格数据

1. 打开配置文件 **`/src/config/siteConfig.ts`**。
2. 查找您要修改的区块（例如：修改模型价格找 `models`，修改 Hero 主标题找 `hero`）。
3. 直接修改对应字段的文本字符串或数值。
4. 保存文件，更改将全自动应用至全站所有页面与弹窗。
