import {HomePage} from '../../po/pages/home/HomePage';

const homePage = new HomePage();

describe('Simple search.', () => {

    beforeEach(async () => {
        await homePage.open();
    });

    it('Executing simple search', async () => {
        await homePage.header.asserts.displayed();
        await homePage.header.executeSearch('protractor');
    });
});
