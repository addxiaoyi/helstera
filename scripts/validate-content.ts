import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { MODELS_DATA } from '../src/data/modelsData';

const expectedModelIds = [
  'deepseek-v4-pro',
  'deepseek-v4-flash',
  'qwen3.7-max',
  'qwen3.5-omni-plus',
  'kimi-k3',
  'glm-5.2',
];

assert.deepEqual(
  MODELS_DATA.map((model) => model.id),
  expectedModelIds,
  'model catalog is still using an outdated route set',
);

const forbiddenPatterns = [
  /deepseek-v3/i,
  /deepseek-r1/i,
  /qwen-max/i,
  /qwen-2\.5/i,
  /glm-4-plus/i,
  /abab6\.5s/i,
  /80%/i,
  /99\.9%/i,
  /180ms/i,
  /phase ii/i,
  /\$0\.27/i,
  /\$0\.55/i,
  /\$1\.60/i,
  /\$1\.40/i,
  /<\s*5ms/i,
  /sub-180ms/i,
  /latency benchmark/i,
  /benchmark screenshot/i,
  /within \d+(?: business)? hours?/i,
  /Zero Data Retention/i,
  /\bZDR\b/i,
  /Pilot Zone Authorized/i,
  /compliant pilot zone infrastructure/i,
  /Generated official sample/i,
  /Status: Verified/i,
  /Official legal documents/i,
  /fileSize/i,
  /fileType/i,
];

const documentationPatterns = [
  /inputPrice/i,
  /outputPrice/i,
  /openAiInputPrice/i,
  /latencyLabel/i,
];

const legacySourcePatterns = [
  /statCost/i,
  /statLatency/i,
  /statUptime/i,
  /latencyLabel/i,
  /calculator-section/i,
  /scrollToCalculator/i,
];

const legacyInfrastructurePatterns = [
  /legacy public/i,
  /marine (?:line|gateway|conduit)/i,
  /optical (?:route|interconnect|conduit)/i,
  /IPLC|IEPL/i,
  /low-latency/i,
  /ram[- ]only/i,
  /ram enclave/i,
  /volatile RAM/i,
  /RAM (?:transient|purge|isolation)/i,
  /ZDR Volatile Memory/i,
  /ZDR RAM/i,
  /zero prompt logging/i,
  /authorized line routing/i,
  /authorized (?:cross-border|dedicated|encrypted) (?:data processing|fiber|route|channels?)/i,
  /direct connection via Shantou/i,
  /(?:official|government) .*Shantou .*?(?:authorization|contract|policy)/i,
  /benchmark snapshot/i,
  /Regulated Cross-Border/i,
  /End-to-End Compliant/i,
];

const sourceRoot = fileURLToPath(new URL('../src/', import.meta.url));

const localizedUiFiles = [
  join(sourceRoot, 'views/HomeView.tsx'),
  join(sourceRoot, 'components/ModelComparisonTable.tsx'),
  join(sourceRoot, 'components/SavingsCalculator.tsx'),
  join(sourceRoot, 'views/PricingView.tsx'),
];

const hardcodedUiPatterns = [
  /Ready to Upgrade Your AI Compute Infrastructure/i,
  /Request API Key/i,
  /Request Commercial DPA/i,
  /text="Current model routes"/i,
  /text="Plan usage before you price it"/i,
  /Model pricing is live and account-specific/i,
  /placeholder="Search route\.\.\."/i,
  />Cards<|>Table<|>Call API</i,
  /No model routes match this search/i,
  /Static benchmark prices/i,
  />Data policy first<|>Route health in context<|>Enterprise-ready terms</i,
  /Need a route and contract review/i,
  /View live rate matrix/i,
];

const collectSourceFiles = (directory: string): string[] => {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return collectSourceFiles(path);
    return /\.(ts|tsx)$/.test(entry.name) ? [path] : [];
  });
};

const offenders = collectSourceFiles(sourceRoot).flatMap((path) => {
  const content = readFileSync(path, 'utf8');
  return [...forbiddenPatterns, ...legacySourcePatterns, ...legacyInfrastructurePatterns]
    .filter((pattern) => pattern.test(content))
    .map((pattern) => `${path}: ${pattern}`);
});

assert.equal(
  offenders.length,
  0,
  `legacy model or metric copy remains:\n${offenders.join('\n')}`,
);

const hardcodedUiOffenders = localizedUiFiles.flatMap((path) => {
  const content = readFileSync(path, 'utf8');
  return hardcodedUiPatterns
    .filter((pattern) => pattern.test(content))
    .map((pattern) => `${path}: ${pattern}`);
});

assert.equal(
  hardcodedUiOffenders.length,
  0,
  `localized UI still contains hardcoded English copy:\n${hardcodedUiOffenders.join('\n')}`,
);

const readme = readFileSync(fileURLToPath(new URL('../README.md', import.meta.url)), 'utf8');
const documentationOffenders = [...forbiddenPatterns, ...documentationPatterns]
  .filter((pattern) => pattern.test(readme))
  .map((pattern) => `README.md: ${pattern}`);

assert.equal(
  documentationOffenders.length,
  0,
  `legacy model, metric, or field copy remains in documentation:\n${documentationOffenders.join('\n')}`,
);

console.log(`Content validation passed for ${MODELS_DATA.length} current model routes.`);
