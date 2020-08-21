import {TRootEl, WDIO} from '../../core/wdio/wdio';
import {ElementAsserts} from '../../asserts/ElementAsserts';

export class BaseElement extends WDIO {

    public readonly asserts: ElementAsserts;

    constructor(rootEl: TRootEl) {
        super(rootEl);
        this.asserts = new ElementAsserts(this);
    }

}
