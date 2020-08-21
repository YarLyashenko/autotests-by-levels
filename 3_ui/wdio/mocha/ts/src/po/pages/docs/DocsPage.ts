import {BasePage} from '../BasePage';
import {_$} from '../../../core/wdio/wdio';

export class DocsPage extends BasePage {
    constructor() {
        super(_$('#docs'), '/docs');
    }
}
