import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('Navigating to http://localhost:5175/work/yourindiaholidays...');
  await page.goto('http://localhost:5175/work/yourindiaholidays', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'public/qa-yih-full.png', fullPage: true });

  console.log('Navigating to http://localhost:5175/ ...');
  await page.goto('http://localhost:5175/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'public/qa-home-full.png', fullPage: true });

  await browser.close();
})();
