import { Page } from '@playwright/test';

export class InventoryPage {

  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addFirstProductToCart() {
    await this.page.locator('.btn_inventory').first().click();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

}