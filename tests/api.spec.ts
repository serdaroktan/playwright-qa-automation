import { test, expect } from '@playwright/test';

test('GET products list', async ({ request }) => {

  const response = await request.get('https://fakestoreapi.com/products');

  console.log("Status Code:", response.status());

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(Array.isArray(body)).toBeTruthy();
  expect(body.length).toBeGreaterThan(0);

});