import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/RegisterPage';
import { logger } from '../../utils/logger';
import { generateTestUser } from '../../utils/testUserGenerator';

test('UI registration + API validation', async ({ page, request }) => {
  test
    .info()
    .annotations.push({ type: 'feature', description: 'User Registration' });

  const user = generateTestUser(); // 🔥 dynamic fake user
  const register = new RegisterPage(page);

  logger.info(`Registering user: ${user.email}`);
  await page.goto('/');
  await register.navigateToSignup();
  await register.registerUser(user.name, user.email, user.password);

  const created = await register.isAccountCreated();
  expect(created).toBeTruthy();
  logger.info('User registration successful via UI');

  logger.info('Now verifying registration via API');
  const res = await request.get(
    `/api/getUserDetailByEmail?email=${'user.email'}`,
  );
  expect(res.status()).toBe(200);
  const data = await res.json();
  expect(data.user.email).toBe('user.email');
  logger.info('User details validated successfully via API');
});
