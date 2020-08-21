import {BasePage} from '../BasePage';
import {InfoBlock} from '../../blocks/home/InfoBlock';
import {_$} from '../../../core/wdio/wdio';

export class HomePage extends BasePage {

    public readonly infoBlock: InfoBlock;

    constructor() {
        super(_$('#home'), '/');
        this.infoBlock = new InfoBlock(this.rootEl);
    }
}
