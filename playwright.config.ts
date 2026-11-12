import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: 'tests/browser',
  workers: 1,
  timeout: 45000,
  use: {
    baseURL: 'http://localhost:5174',
    headless: true,
    channel: 'chrome',
    trace: 'retain-on-failure',
  },
  reporter: [['list'], ['html', { open: 'never' }]],
});
