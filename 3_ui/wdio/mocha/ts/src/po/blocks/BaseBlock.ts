import {BaseElement} from '../elements/BaseElement';
import {TRootEl} from '../../core/wdio/wdio';

export abstract class BaseBlock extends BaseElement {

    protected constructor(rootEl: TRootEl) {
        super(rootEl);
    }

}
