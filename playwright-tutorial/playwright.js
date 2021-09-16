const { chromium } = require("playwright");

(async () => {
  // function code
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  await page.goto("http://google.com");

  const search = await page.$(
    "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input"
  );
  await search.type("YouTube", { delay: 50 });

  await page.keyboard.press("Enter", { delay: 3000 });

  await page.close();
})();
