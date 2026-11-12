import { test, expect } from '@playwright/test';
import path from 'node:path';
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('vsafe.locale', 'es_419'));
});
test('landing loads and points to the application', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('http://localhost:5174');
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('.app-link').first()).toHaveAttribute('href', 'http://localhost:5173');
  await page.locator('#language').click();
  await expect(page.locator('h1')).toContainText('Before you leave');
  await expect(page.locator('.lead')).toContainText('Time does not tell the whole story');
  await page.locator('#language').click();
  await expect(page.locator('h1')).toContainText('Antes de salir');
  await page.screenshot({
    path: path.resolve('test-results/screenshots/landing-desktop.png'),
    fullPage: true,
  });
  await page.setViewportSize({ width: 375, height: 812 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
