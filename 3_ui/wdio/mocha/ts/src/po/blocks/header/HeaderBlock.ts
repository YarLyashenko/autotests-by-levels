import {BaseBlock} from '../BaseBlock';
import {InputElement} from '../../elements/input/InputElement';
import {_$} from '../../../core/wdio/wdio';

export class HeaderBlock extends BaseBlock {
    constructor() {
        super(_$('mat-toolbar'));
    }

    get searchInput() {
        return new InputElement(this.$('.search-container input'));
    }

    public executeSearch(value: string) {
        return this.searchInput.setValue(value);
    }
}
