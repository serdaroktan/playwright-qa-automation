import { test, expect } from '@playwright/test';

test('User should login successfully', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');

  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  await expect(page.locator('.inventory_list')).toBeVisible();

  await page.screenshot({ path: 'test-results/login-success.png' });

});

test('User should NOT login with wrong password', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');

  await page.fill('#password', 'wrong_password');

  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toBeVisible();

});

test('User should add product to cart', async ({ page }) => {

  // login
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');

  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  // ürünü sepete ekle
  await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');

  // sepet sayısını doğrula
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // screenshot al
  await page.screenshot({ path: 'test-results/add-to-cart.png' });

});