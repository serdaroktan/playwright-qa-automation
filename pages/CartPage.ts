import { Page, expect } from '@playwright/test';

export class CartPage {

  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyProductInCart() {
    await expect(this.page.locator('.cart_item')).toBeVisible();
  }

}