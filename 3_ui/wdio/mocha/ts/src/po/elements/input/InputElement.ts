import {BaseElement} from '../BaseElement';

export class InputElement extends BaseElement {

    public async clear(index?: number) {
        const el = await this.rootEl();
        return 'clearValue' in el ? el.clearValue() : el[index!].clearValue();
    }

    public async setValue(value: string | number, index?: number) {
        const el = await this.rootEl();
        return 'setValue' in el ? el.setValue(value) : el[index!].setValue(value);
    }
}
