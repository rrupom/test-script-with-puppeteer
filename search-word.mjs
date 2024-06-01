import puppeteer from "puppeteer";

const browser = await puppeteer.launch()

const page = await browser.newPage();
await page.goto("https://duckduckgo.com/", {
    waitUntil: "networkidle0"
})

const searchBarHandler = await page.waitForSelector("#searchbox_input");

await searchBarHandler.type("rafah");

const searchButtonHandle = await page.waitForSelector(".searchbox_searchButton__F5Bwq")

await searchButtonHandle.click();

await page.waitForNavigation();

const titles = await page.evaluate(() => {
    return [...document.querySelectorAll('[data-testid="result-title-a"]')].map((ele) => ele.textContent)
})

console.log(titles);

await browser.close();
