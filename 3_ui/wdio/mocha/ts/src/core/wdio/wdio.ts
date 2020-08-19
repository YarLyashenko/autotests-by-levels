export abstract class WDIO {

    protected constructor(protected readonly rootEl: string) {
    }

    get $() {
        return $(this.rootEl);
    }


}
