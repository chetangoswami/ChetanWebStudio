import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });
  page.on('pageerror', err => {
    errors.push(err.toString());
  });

  console.log('Navigating to http://localhost:5175/work/yourindiaholidays...');
  let response = await page.goto('http://localhost:5175/work/yourindiaholidays', { waitUntil: 'networkidle2' });
  
  if (!response.ok()) {
    console.error('Failed to load page. Status:', response.status());
  } else {
    console.log('Page loaded successfully.');
  }

  await page.setViewport({ width: 1920, height: 1080 });
  
  // Check text visibility
  const yihContent = await page.evaluate(() => {
    const text = document.body.innerText;
    const hasCloudflare = text.toLowerCase().includes('cloudflare');
    const hasLlama = text.toLowerCase().includes('llama 3');
    const hasGit = text.toLowerCase().includes('git history') || text.toLowerCase().includes('git');
    return { hasCloudflare, hasLlama, hasGit };
  });
  console.log('YIH case study content check:', yihContent);

  await page.screenshot({ path: 'public/qa-yih-case-study.png' });
  console.log('Screenshot saved to public/qa-yih-case-study.png');

  console.log('Navigating to http://localhost:5175/ ...');
  response = await page.goto('http://localhost:5175/', { waitUntil: 'networkidle2' });
  
  if (!response.ok()) {
    console.error('Failed to load Homepage. Status:', response.status());
  } else {
    console.log('Homepage loaded successfully.');
  }
  
  // Check for Your India Holidays card
  const homeCards = await page.evaluate(() => {
    const text = document.body.innerText;
    const hasIkoho = text.toLowerCase().includes('ikoho');
    const hasYih = text.toLowerCase().includes('your india holidays') || text.toLowerCase().includes('yourindiaholidays');
    return { hasIkoho, hasYih };
  });
  console.log('Homepage cards check:', homeCards);

  await page.screenshot({ path: 'public/qa-home-check.png' });
  console.log('Screenshot saved to public/qa-home-check.png');

  console.log('Console errors:', errors);

  await browser.close();
})();
