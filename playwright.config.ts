import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  globalSetup: './global-setup',
  reporter: [['list'], ['allure-playwright']],
  use: {
    baseURL: 'https://automationexercise.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
