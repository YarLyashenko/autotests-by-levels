import {BaseAsserts} from './BaseAsserts';
import {BasePage} from '../po/pages/BasePage';
import {TIMEOUT} from '../helpers/WaitHelper';

export class PageAsserts extends BaseAsserts {

    constructor(private readonly page: BasePage) {
        super(page);
    }

    public async opened(): Promise<boolean> {
        await this.page.wait.url({
            options: {
                timeout: TIMEOUT.xss,
                timeoutMsg: '[assert::opened] TODO',
            },
            isPositive: this.isPositive,
        });
        return this.displayed();
    }
}
