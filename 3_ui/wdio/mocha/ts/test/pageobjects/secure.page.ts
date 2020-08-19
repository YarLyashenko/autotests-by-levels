import {BasePage} from './basePage';

export class SecurePage extends BasePage {
    get flashAlert() {
        return $('#flash');
    }
}
