import puppeteer from 'puppeteer';

const delay = ms => new Promise(res => setTimeout(res, ms));

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set viewport for desktop
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to Home...');
  let success = false;
  for (let i = 0; i < 5; i++) {
    try {
      await page.goto('http://localhost:3003', { waitUntil: 'networkidle0', timeout: 30000 });
      success = true;
      break;
    } catch (e) {
      console.log(`Attempt ${i + 1} failed, waiting 5 seconds...`);
      await delay(5000);
    }
  }

  if (success) {
    // Scroll down multiple times to let GSAP load
    console.log('Scrolling down home page...');
    for (let i = 0; i < 5; i++) {
      await page.evaluate(() => { window.scrollBy(0, window.innerHeight); });
      await delay(500);
    }
    await page.evaluate(() => { window.scrollTo(0, document.body.scrollHeight); });
    await delay(1000);
    await page.screenshot({ path: 'C:/Chetan/AgencyBuildWithChetan/AgencySite/home_screenshot.png', fullPage: true });

    console.log('Navigating to Work/Ikoho...');
    await page.goto('http://localhost:3003/work/ikoho', { waitUntil: 'networkidle0', timeout: 30000 });
    await delay(2000);
    await page.screenshot({ path: 'C:/Chetan/AgencyBuildWithChetan/AgencySite/work_ikoho_screenshot.png', fullPage: true });

    console.log('Navigating to Invalid Route...');
    await page.goto('http://localhost:3003/invalid-route', { waitUntil: 'networkidle0', timeout: 30000 });
    await delay(1000);
    await page.screenshot({ path: 'C:/Chetan/AgencyBuildWithChetan/AgencySite/404_screenshot.png', fullPage: true });

    console.log('Screenshots saved.');
  } else {
    console.error('Failed to navigate to localhost:3003 after attempts');
    process.exit(1);
  }

  await browser.close();
})();
