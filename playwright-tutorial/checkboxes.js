const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const page = await browser.newPage();

  await page.goto(
    "https://www.w3schools.com/howto/how_to_css_custom_checkbox.asp"
  );
})();
