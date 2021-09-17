const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const page = await browser.newPage();

  await page.goto(
    "https://www.w3schools.com/howto/howto_css_custom_checkbox.asp"
  );

  const check1 = await page.$(
    "#main > div.w3-row > div:nth-child(1) > input[type=checkbox]:nth-child(2)"
  );
  const check2 = await page.$(
    "#main > div.w3-row > div:nth-child(1) > input[type=checkbox]:nth-child(4)"
  );

  const checksArr = await [check1, check2];

  await checksArr[0].uncheck();
  await checksArr[1].check();

  const radio1 = await page.$(
    "#main > div.w3-row > div:nth-child(1) > input[type=radio]:nth-child(7)"
  );

  const radio2 = await page.$(
    "#main > div.w3-row > div:nth-child(1) > input[type=radio]:nth-child(9)"
  );

  const radiosArr = await [radio1, radio2];

  await radio2.check();
  await radio1.check();

  await page.close();
})();
