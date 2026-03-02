import { test } from '../fixtures/testFixture';

test('Add product using auto login fixture', async ({ inventoryPage, cartPage }) => {

  await inventoryPage.addFirstProductToCart();

  await inventoryPage.goToCart();

  await cartPage.verifyProductInCart();

});