import { test } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test('Simple login demo', async ({ page }) => {
    const login = new LoginPage();

    await page.goto('file:///path/to/demo_login.html');

    await login.enterUsername(page, '#user-name', 'admin');
    await login.enterPassword(page, '#user-pass', 'admin');
    await login.clickLogin(page, '#loginBtn');

    const message = await login.getMessage(page, '#message');
    console.log('Login Result:', message);
});
