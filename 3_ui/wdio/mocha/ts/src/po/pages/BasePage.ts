import {TRootEl, WDIO} from '../../core/wdio/wdio';
import {HeaderBlock} from '../blocks/header/HeaderBlock';
import {PageAsserts} from '../../asserts/PageAsserts';

export abstract class BasePage extends WDIO {

    public readonly header: HeaderBlock;
    public readonly asserts: PageAsserts;

    public readonly baseUrl: string;

    protected constructor(rootEl: TRootEl, public readonly url: string) {
        super(rootEl);
        this.baseUrl = browser.options.baseUrl!;

        this.header = new HeaderBlock();
        this.asserts = new PageAsserts(this);
    }

    public open(url = this.url) {
        return browser.url(url);
    }

    public getUrl() {
        return browser.getUrl();
    }

}
