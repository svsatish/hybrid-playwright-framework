import { test, expect } from '@playwright/test';

test('Get all products', async ({ request }) => {
  test
    .info()
    .annotations.push({ type: 'feature', description: 'Get all Products' });
  const response = await request.get('/api/productsList');
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.products.length).toBeGreaterThan(0);
});
