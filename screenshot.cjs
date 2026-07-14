const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4173/');
  await page.waitForTimeout(2000); // Wait for React to render
  await page.screenshot({ path: 'screenshot_final.png', fullPage: true });
  await browser.close();
})();
