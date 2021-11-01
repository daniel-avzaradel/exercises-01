const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  await page.goto("https://www.apronus.com/music/lessons/unit01.htm");

  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(5)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(5)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(6)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(8)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(8)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(6)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(5)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(3)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(1)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(1)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(3)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(5)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(5)", {
    delay: 400,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(3)", {
    delay: 50,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(3)", {
    delay: 1000,
  });

  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(5)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(5)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(6)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(8)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(8)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(6)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(5)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(3)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(1)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(1)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(3)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(5)", {
    delay: 200,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(3)", {
    delay: 400,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(1)", {
    delay: 50,
  });
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(1)", {
    delay: 1000,
  });

  await page.close();
})();
