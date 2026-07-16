import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set viewport for desktop
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to Work...');
  await page.goto('http://localhost:3001/work', { waitUntil: 'networkidle0', timeout: 90000 });
  await page.screenshot({ path: 'C:/Chetan/AgencyBuildWithChetan/AgencySite/work_screenshot.png', fullPage: true });

  await browser.close();
  console.log('Screenshots saved.');
})();
