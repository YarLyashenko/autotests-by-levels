import {WDIO} from '../core/wdio/wdio';
import {TIMEOUT} from '../helpers/WaitHelper';

export abstract class BaseAsserts {

    protected isPositive = true;

    protected constructor(private readonly wdio: WDIO) {
    }

    get not() {
        this.isPositive = false;
        return this;
    }

    async displayed() {
        return this.wdio.wait.displayed({
            reverse: !this.isPositive,
            timeout: TIMEOUT.xss,
            timeoutMsg: '[assert::isDisplayed] TODO',
        });
    }
}
