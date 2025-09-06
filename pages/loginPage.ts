import { Page } from '@playwright/test';

export default class LoginPage {
    // Fill username
    async enterUsername(page: Page, selector: string, username: string) {
        await page.fill(selector, username);
    }

    // Fill password
    async enterPassword(page: Page, selector: string, password: string) {
        await page.fill(selector, password);
    }

    // Click login button
    async clickLogin(page: Page, selector: string) {
        await page.click(selector);
    }

    // Get message text
    async getMessage(page: Page, selector: string) {
        return await page.textContent(selector);
    }
}
