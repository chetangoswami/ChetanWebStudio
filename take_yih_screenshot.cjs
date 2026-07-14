const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://yourindiaholidays.com', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.screenshot({ path: 'public/yourindiaholidays-hero.png' });
  await browser.close();
})();
