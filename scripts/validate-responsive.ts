import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const files = {
  css: await readFile('src/index.css', 'utf8'),
  app: await readFile('src/App.tsx', 'utf8'),
  home: await readFile('src/views/HomeView.tsx', 'utf8'),
  navbar: await readFile('src/components/Navbar.tsx', 'utf8'),
  route: await readFile('src/components/InteractiveRouteVisualizer.tsx', 'utf8'),
  comparison: await readFile('src/components/HorizontalComparisonSlider.tsx', 'utf8'),
  models: await readFile('src/components/ModelComparisonTable.tsx', 'utf8'),
  apiModal: await readFile('src/components/ApiKeysModal.tsx', 'utf8'),
};

const has = (source: string, fragment: string, message: string) => {
  assert.ok(source.replaceAll('\r\n', '\n').includes(fragment), message);
};

has(files.css, 'html,\n  body,\n  #root', 'Global layout must define a shared viewport boundary.');
has(files.css, 'overflow-x: clip', 'Global layout must clip transformed content horizontally.');
has(files.app, 'className="flex-1 relative z-0 min-w-0"', 'The main view must be allowed to shrink below intrinsic child widths.');
has(files.home, 'min-w-0 overflow-x-clip', 'The home view must isolate animated sections from page-level overflow.');
has(files.navbar, 'min-[360px]:grid-cols-2', 'Mobile navigation must collapse to one column on very narrow screens.');
has(files.navbar, 'hidden lg:flex', 'Desktop navigation must wait until the wide-screen breakpoint.');
has(files.route, 'overflow-x-auto', 'The route code sample must scroll inside its own panel.');
has(files.comparison, 'min-w-0', 'The comparison slider must not impose a fixed mobile content width.');
has(files.comparison, 'sm:hidden', 'The comparison slider must provide a readable stacked mobile view.');
has(files.models, 'min-w-[720px]', 'The model table must preserve readable columns inside a local scroller.');
has(files.apiModal, 'max-w-[calc(100vw-2rem)]', 'The API modal must size itself against the mobile viewport.');

console.log('Responsive layout contracts passed.');
