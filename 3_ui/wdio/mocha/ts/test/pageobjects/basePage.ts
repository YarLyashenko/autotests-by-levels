export class BasePage {
    public open(path: string) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`);
    }
}
