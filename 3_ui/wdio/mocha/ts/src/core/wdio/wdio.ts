// @ts-ignore
import logger from '@wdio/logger';
import {WaitHelper} from '../../helpers/WaitHelper';

export type TRootEl = () => Promise<WebdriverIO.Element | WebdriverIO.ElementArray>;

export function _$(selector: string, parent?: TRootEl, index?: number): () => Promise<WebdriverIO.Element> {
    return async () => {
        if (parent) {
            const el = await parent();
            return '$' in el ? el.$(selector) : el[index!].$(selector);
        }
        return $(selector);
    };
}

export function _$$(selector: string, parent?: TRootEl, index?: number): () => Promise<WebdriverIO.ElementArray> {
    return async () => {
        if (parent) {
            const el = await parent();
            return '$$' in el ? el.$$(selector) : el[index!].$$(selector);
        }
        return $$(selector);
    };
}

export abstract class WDIO {

    public readonly wait: WaitHelper;

    protected readonly logger: {
        trace: (value: string) => void,
        debug: (value: string) => void,
        info: (value: string) => void,
        warn: (value: string) => void,
        error: (value: string) => void,
    };

    protected constructor(public readonly rootEl: TRootEl) {
        this.wait = new WaitHelper(this);
        this.logger = logger(this.constructor.name);
    }

    public $(selector: string, index?: number): () => Promise<WebdriverIO.Element> {
        return _$(selector, this.rootEl, index);
    }

    public $$(selector: string, index?: number): () => Promise<WebdriverIO.ElementArray> {
        return _$$(selector, this.rootEl, index);
    }

    public async click(params?: { options?: WebdriverIO.ClickOptions, index?: number }): Promise<void> {
        const el = await this.rootEl();
        return 'click' in el ? el.click() : el[params!.index!].click(params!.options!);
    }
}
