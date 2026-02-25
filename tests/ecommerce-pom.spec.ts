import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test('Ecommerce test using POM', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();

  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addFirstProductToCart();

  await inventoryPage.goToCart();

  await cartPage.verifyProductInCart();

});