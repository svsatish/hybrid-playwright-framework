import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { logger } from '../../utils/logger';

test('Home page should load with correct title', async ({ page }) => {
  test.info().annotations.push({ type: 'feature', description: 'HomePage' });
  const home = new HomePage(page);
  await home.open();
  const title = await home.getTitle();
  logger.info(`Page title is: ${title}`);
  expect(title).toContain('Automation');
});
