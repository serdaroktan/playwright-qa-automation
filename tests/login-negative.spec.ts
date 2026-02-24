import { test, expect } from '@playwright/test';

test('Login with wrong password', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'wrong_password');

  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toBeVisible();

});