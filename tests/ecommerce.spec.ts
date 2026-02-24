import { test, expect } from '@playwright/test';

test('E-commerce login and add to cart test', async ({ page }) => {

  // 1. Siteye git
  await page.goto('https://www.saucedemo.com');

  // screenshot
  await page.screenshot({ path: 'screenshots/01-login-page.png' });

  // 2. Login ol
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  // login başarılı mı kontrol
  await expect(page).toHaveURL(/inventory/);

  await page.screenshot({ path: 'screenshots/02-after-login.png' });


  // 3. Ürün ekle
  await page.click('text=Add to cart');

  await page.screenshot({ path: 'screenshots/03-product-added.png' });


  // 4. Sepete git
  await page.click('.shopping_cart_link');

  await page.screenshot({ path: 'screenshots/04-cart.png' });


  // 5. Ürün var mı kontrol et
  await expect(page.locator('.cart_item')).toBeVisible();

});