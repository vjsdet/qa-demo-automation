import { test, expect } from '@playwright/test';
import { PracticeFormPage } from '../pages/PracticeFormPage';
import { FormDataGenerator } from '../utils/FormDataGenerator';

test.describe('DemoQA Practice Form', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/automation-practice-form');
  });

  test('Positive Test - Valid Form Submission', async ({ page }) => {
    const formPage = new PracticeFormPage(page);
    const data = FormDataGenerator.validData();

    await formPage.fillBasicInfo(data.firstName, data.lastName, data.email, data.mobile);
    await formPage.submitForm();

    await expect(formPage.getSuccessMessage()).toBeVisible();
    await expect(formPage.getSuccessMessage()).toContainText('Thanks for submitting the form');
  });

  test('Negative Test - Invalid Email', async ({ page }) => {
    const formPage = new PracticeFormPage(page);
    const data = FormDataGenerator.invalidEmailData();

    await formPage.fillBasicInfo(data.firstName, data.lastName, data.email, data.mobile);
    await formPage.submitForm();

    await expect(formPage.getSuccessMessage()).toHaveCount(0);
  });

  test('Negative Test - Missing Mobile Number', async ({ page }) => {
    const formPage = new PracticeFormPage(page);
    const data = FormDataGenerator.missingMobileData();

    await formPage.fillBasicInfo(data.firstName, data.lastName, data.email, data.mobile);
    await formPage.submitForm();

    await expect(formPage.mobile).toHaveAttribute('required', '');
  });

});