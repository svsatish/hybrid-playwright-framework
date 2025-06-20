import type { FullConfig } from '@playwright/test';
import fs from 'fs';
import path from 'path';

async function globalSetup(config: FullConfig) {
  const envProps = [
    'Environment=QA',
    `Browser=${config.projects[0].use?.browserName || 'chromium'}`,
    `BaseURL=${config.projects[0].use?.baseURL || 'https://automationexercise.com'}`,
    `Platform=${process.platform}`,
    'Executor=Satish',
  ].join('\n');

  const outputDir = path.join(__dirname, 'allure-results');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(path.join(outputDir, 'environment.properties'), envProps);
}

export default globalSetup;
