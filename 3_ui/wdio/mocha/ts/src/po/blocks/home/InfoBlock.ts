import {BaseBlock} from '../BaseBlock';
import {BaseElement} from '../../elements/BaseElement';
import {ButtonElement} from '../../elements/button/ButtonElement';
import {_$, TRootEl} from '../../../core/wdio/wdio';

export class InfoBlock extends BaseBlock {
    constructor(rootEl: TRootEl) {
        super(_$('#intro', rootEl));
    }

    get logo() {
        return new BaseElement(this.$('.hero-logo'));
    }

    get startedBtn() {
        return new ButtonElement(this.$('.button.hero-cta'));
    }
}
