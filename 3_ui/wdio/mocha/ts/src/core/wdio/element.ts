class LazyElement {
    constructor(private readonly selector: string, private readonly parent?: LazyElement) {
    }

    asProxy() {
        return new Proxy(this, {
            get(target, propName: PropertyKey) {
                if (propName in target) {
                    return target[propName];
                }
                return (args: any) => {
                    const resolved = target.fetch();
                    return resolved[propName](args);
                };
            },
        });
    }

    private fetch() {
        const searchContext = this.parent ? this.parent.fetch() : browser;
        return searchContext.$(this.selector);
    }

    $(selector: string) {
        return new LazyElement(selector, this).asProxy();
    }

    toString() {
        return this.parent
            ? `${this.parent.toString()} > ${this.selector}`
            : this.selector;
    }
}

export const $ = (selector: string) => new LazyElement(selector).asProxy();