const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 300 });
  const page = await browser.newPage();

  await page.goto("https://www.demoqa.com/frames");

  const frame1 = await page.frame({ url: /\/sample/ });
  const h1frame1 = await frame1.$("h1");
  console.log(await h1frame1.innerText());

  await page.close();
})();
