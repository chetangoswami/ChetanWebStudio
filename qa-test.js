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

  console.log('Navigating to http://localhost:5175/work/ikoho...');
  const response = await page.goto('http://localhost:5175/work/ikoho', { waitUntil: 'networkidle2' });
  
  if (!response.ok()) {
    console.error('Failed to load page. Status:', response.status());
  } else {
    console.log('Page loaded successfully.');
  }

  // Check for the image
  const imgExists = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    return imgs.some(img => img.src.includes('ikoho-hero.png'));
  });
  console.log('ikoho-hero.png rendered:', imgExists);

  // Check mobile responsiveness (no horizontal scroll)
  await page.setViewport({ width: 375, height: 800 });
  await new Promise(r => setTimeout(r, 500)); // wait for resize
  
  const hasHorizontalScroll = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  console.log('Has horizontal overflow on mobile:', hasHorizontalScroll);

  if (hasHorizontalScroll) {
    const overflowingElements = await page.evaluate(() => {
      const all = document.querySelectorAll('*');
      const overflowing = [];
      for (const el of all) {
        if (el.scrollWidth > el.clientWidth && el.tagName !== 'HTML' && el.tagName !== 'BODY') {
          overflowing.push({ tag: el.tagName, class: el.className });
        }
      }
      return overflowing;
    });
    console.log('Overflowing elements:', overflowingElements);
  }

  console.log('Console errors:', errors);

  await browser.close();
})();
