import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { loginData } from '../test-data/loginData';

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
};

export const test = base.extend<MyFixtures>({

  loginPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await use(loginPage);

  },
  inventoryPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(loginData.validUser.username, loginData.validUser.password);

    const inventoryPage = new InventoryPage(page);

    await use(inventoryPage);

  },
  cartPage: async ({ page, inventoryPage }, use) => {
    const cartPage = new CartPage(page);

    await use(cartPage);
  },

});

export { expect } from '@playwright/test';
