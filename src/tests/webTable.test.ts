import { test, expect } from '@playwright/test';
import { WebTablePage } from '../pages/WebTablePage';
import { WebTableDataGenerator } from '../utils/WebTableDataGenerator';

test.describe('Web Table CRUD operations', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/webtables');
  });

  test('Create: Should add a new user to the table', async ({ page }) => {
    const webTablePage = new WebTablePage(page);
    const data = WebTableDataGenerator.validData();

    await webTablePage.addNewUser(data);
    await expect(webTablePage.rows.getByText(data.email)).toBeVisible();
  });

  test('Update: Should update department of the first user', async ({ page }) => {
    const webTablePage = new WebTablePage(page);
    await webTablePage.updateFirstUser('DevOps');
    const updatedText = await webTablePage.getRowText(0);
    expect(updatedText).toContain('DevOps');
  });
  
  test('Delete: Should delete the first user from the table', async ({ page }) => {
    const webTablePage = new WebTablePage(page);
    const beforeDeleteRowText = await webTablePage.getRowText(0);
    await webTablePage.deleteFirstUser();
    const afterDeleteRowText = await webTablePage.getRowText(0);
    expect(beforeDeleteRowText).not.toEqual(afterDeleteRowText);
  });
});