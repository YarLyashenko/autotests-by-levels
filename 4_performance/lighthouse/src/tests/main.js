const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse');
const config = require('lighthouse/lighthouse-core/config/lr-desktop-config.js');
const {writeFileSync} = require('fs');
const {URL} = require('url');
const {resolve, join} = require('path');

(async () => {

    const loginURL = 'https://reactjs.org/';

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: {
            width: 1366,
            height: 768,
        },
        args: ['--window-size=1366,768'],
        timeout: 120000
    });
    const target = await browser.waitForTarget(t => t.type() === 'page');
    const page = await target.page();
    await page.goto(loginURL, {waitUntil: 'networkidle0'});

    const {port} = new URL(browser.wsEndpoint());

    const {report} = await lighthouse(
        page.url(),
        {
            port,
            logLevel: 'info',
            output: ['html', 'json']
        },
        config
    );

    await browser.close();

    report.forEach((r, i) => writeFileSync(resolve(join(process.cwd(), 'artifacts', `report.${i === 0 ? 'html' : 'json'}`)), r));
})();
