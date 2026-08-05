import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome' });
const c = await b.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
const p = await c.newPage();
await p.goto(process.argv[2], { waitUntil: 'networkidle' });
await p.waitForTimeout(1200);
await p.screenshot({ path: process.argv[3] });
await b.close();
console.log('og rendered');
