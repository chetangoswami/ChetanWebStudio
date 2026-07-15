import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:5174/', { waitUntil: 'load', timeout: 15000 });
  } catch (err) {
    console.log("Caught navigation err:", err.message);
  }
  
  // Wait a moment for Framer Motion and React to mount
  await new Promise(r => setTimeout(r, 4000));
  await page.screenshot({path: 'screenshot.png', fullPage: true});
  
  // check if tailwind generated classes exist by evaluating
  const isTailwindLoaded = await page.evaluate(() => {
    // Check if the body has a specific tailwind background class
    return document.querySelector('.bg-slate-900') !== null;
  });
  console.log("Tailwind Classes Loaded:", isTailwindLoaded);
  
  await browser.close();
})();
