import assert from 'node:assert/strict';
import { LOCALIZED_CONTENT } from '../src/i18n/localizedContent';
import { TRANSLATIONS, SUPPORTED_LANGUAGES, TranslationSchema } from '../src/i18n/translations';

const paths = (value: unknown, prefix = ''): string[] => {
  if (typeof value !== 'object' || value === null) return [prefix];

  return Object.entries(value).flatMap(([key, child]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return paths(child, path);
  });
};

const referencePaths = new Set(paths(TRANSLATIONS.en));
const requiredLocalizedPaths = [
  'ui.about.heroTitle',
  'ui.blog.heroTitle',
  'ui.compliance.heroTitle',
  'ui.contact.heroTitle',
  'ui.docs.heroTitle',
  'ui.faq.heroTitle',
  'ui.modals.apiKeys.title',
  'ui.modals.contract.title',
  'ui.modals.ping.traceButton',
  'ui.modals.tokenBuy.title',
  'content.models.deepseek-v4-pro.description',
  'content.pricing.developer.name',
  'content.complianceDocs.data-processing-scope.title',
  'content.faq.enterprise-compliance.question',
  'content.blog.deepseek-v4-routing-notes.title',
  'content.onboarding.01.title',
] as const;

const readPath = (value: unknown, path: string): unknown => {
  const segments = path.split('.');

  const visit = (current: unknown, index: number): unknown => {
    if (index === segments.length) return current;
    if (typeof current !== 'object' || current === null) return undefined;

    const record = current as Record<string, unknown>;
    for (let end = segments.length; end > index; end -= 1) {
      const key = segments.slice(index, end).join('.');
      if (!Object.prototype.hasOwnProperty.call(record, key)) continue;
      const resolved = visit(record[key], end);
      if (resolved !== undefined) return resolved;
    }

    return undefined;
  };

  return visit(value, 0);
};

const sharedTechnicalValues = new Set([
  'API',
  'API Key',
  'DPA',
  'SDK',
  'OpenAI',
  'DeepSeek',
  'Qwen',
  'Kimi',
  'GLM',
  'LangChain',
  'Node.js',
  'Python',
  'GitHub',
  'USD ($)',
  'EUR (€)',
  'JPY (¥)',
]);

const isNaturalLanguage = (value: string): boolean => {
  const normalized = value.trim();
  if (!normalized || sharedTechnicalValues.has(normalized)) return false;
  if (/^https?:\/\//i.test(normalized)) return false;
  if (/^[A-Z0-9_./:+()\- ]+$/.test(normalized) && !/[a-z]{3,}/.test(normalized)) return false;
  return /[a-z]{3,}/i.test(normalized) || /[\u3040-\u30ff\u3400-\u9fff]/.test(normalized);
};

const localizedContentPaths = new Set(paths(LOCALIZED_CONTENT.en));

for (const { code } of SUPPORTED_LANGUAGES) {
  const locale = TRANSLATIONS[code] as TranslationSchema;
  const localePaths = new Set(paths(locale));
  const missing = [...referencePaths].filter((path) => !localePaths.has(path));
  const extra = [...localePaths].filter((path) => !referencePaths.has(path));

  assert.deepEqual(missing, [], `${code} is missing translation keys: ${missing.join(', ')}`);
  assert.deepEqual(extra, [], `${code} has unexpected translation keys: ${extra.join(', ')}`);

  for (const path of referencePaths) {
    const value = readPath(locale, path);

    assert.equal(typeof value, 'string', `${code}.${path} must be a string`);
    assert.notEqual((value as string).trim(), '', `${code}.${path} must not be empty`);
  }

  for (const path of requiredLocalizedPaths) {
    const value = readPath(locale, path);

    assert.equal(typeof value, 'string', `${code}.${path} must be a localized string`);
    assert.notEqual((value as string).trim(), '', `${code}.${path} must not be empty`);
  }

  if (code !== 'en') {
    const untranslated = [...localizedContentPaths].filter((path) => {
      const source = readPath(LOCALIZED_CONTENT.en, path);
      const localized = readPath(LOCALIZED_CONTENT[code], path);
      return typeof source === 'string' && source === localized && isNaturalLanguage(source);
    });

    assert.deepEqual(
      untranslated,
      [],
      `${code} still falls back to English for localized content: ${untranslated.join(', ')}`,
    );
  }
}

console.log(`Translation coverage passed for ${SUPPORTED_LANGUAGES.length} locales and ${referencePaths.size} keys.`);
