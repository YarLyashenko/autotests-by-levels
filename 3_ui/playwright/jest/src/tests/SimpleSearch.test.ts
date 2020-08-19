import {describe, test} from '@jest/globals';
import {page, run, stop} from '../core/playwright/Runner';

describe('qwe', () => {
    beforeAll(async () => {
        await run();
    });

    afterAll(async () => {
        await stop();
    });

    test('name', async () => {
        await page.goto('https://www.onliner.by/');
        await page.waitForTimeout(5000);
    });
});
