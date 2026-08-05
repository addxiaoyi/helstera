import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { SITE_CONFIG } from '../src/config/siteConfig';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const appSource = readFileSync(fileURLToPath(new URL('../src/App.tsx', import.meta.url)), 'utf8');
const nginxSource = readFileSync(fileURLToPath(new URL('../helstera.com.conf', import.meta.url)), 'utf8');

assert.equal(SITE_CONFIG.brand.applicationUrl, 'https://ai.0st.top');
assert.match(appSource, /const navigateToAiSite/);
assert.match(appSource, /openApiKeyModal=\{navigateToAiSite\}/);
assert.match(appSource, /openContractModal=\{navigateToAiSite\}/);
assert.match(nginxSource, /return 301 https:\/\/\$host\$request_uri;/);
assert.doesNotMatch(nginxSource, /return 301 https:\/\/ai\.0st\.top/);

console.log(`Navigation validation passed for ${projectRoot}`);
