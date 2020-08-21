import {Browser, BrowserContext, chromium, firefox, Page, webkit} from 'playwright';
import {config} from '../../../playwright.conf';

export declare let browser: Browser;
export declare let page: Page;
export declare let context: BrowserContext;

export const BROWSERS = {
    chrome: chromium,
    safari: webkit,
    firefox,
};

export async function run() {
    browser = await BROWSERS[config.browser].launch({headless: false});
    context = await browser.newContext();
    page = await context.newPage();
}

export function stop() {
    return browser.close();
}
