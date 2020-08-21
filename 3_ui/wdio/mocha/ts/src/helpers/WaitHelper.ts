import {WDIO} from '../core/wdio/wdio';
import {BasePage} from '../po/pages/BasePage';

export const TIMEOUT = {
    sec: 1000,
    xss: 2000,
    xs: 3000,
    s: 5000,
    m: 10000,
    l: 20000,
    xl: 30000,
    min: 60000,
};

export class WaitHelper {
    constructor(private readonly wdio: WDIO | BasePage) {
    }

    public async displayed(params?: { timeout?: number, reverse?: boolean, timeoutMsg?: string, interval?: number }, index?: number) {
        const el = await this.wdio.rootEl();
        return 'waitForDisplayed' in el ? el.waitForDisplayed(params) : el[index!].waitForDisplayed(params);
    }

    public url(params?: { url?: string, options?: WebdriverIO.WaitUntilOptions, isPositive?: boolean }) {
        if (this.wdio instanceof BasePage) {
            return this.until(
                async () => {
                    if (this.wdio instanceof BasePage) {
                        const currentUrl = await this.wdio.getUrl();

                        let comparison: boolean;

                        if (params!.isPositive) {
                            comparison = params!.url!
                                ? currentUrl === params!.url
                                : currentUrl === this.wdio.baseUrl + this.wdio.url;
                        } else {
                            comparison = params!.url!
                                ? currentUrl !== params!.url
                                : currentUrl !== this.wdio.baseUrl + this.wdio.url;
                        }

                        return comparison;
                    }
                    return false;
                },
                params!.options!,
            );
        }
    }

    public until(condition: () => Promise<boolean>, options?: WebdriverIO.WaitUntilOptions) {
        return browser.waitUntil(condition, options);
    }
}
