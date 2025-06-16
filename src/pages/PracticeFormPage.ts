import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { IPracticeFormPage } from '../interfaces/IPracticeFormPage';

export class PracticeFormPage  extends BasePage implements IPracticeFormPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly genderMale: Locator;
  readonly mobile: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.email = page.locator('#userEmail');
    this.genderMale = page.locator('label[for="gender-radio-1"]');
    this.mobile = page.locator('#userNumber');
    this.submitButton = page.locator('#submit');
  }

  async fillBasicInfo(firstName: string, lastName: string, email: string, mobile: string): Promise<void> {
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.genderMale.click();
    await this.mobile.fill(mobile);
  }

  async submitForm(): Promise<void> {
    await this.submitButton.click();
  }

  getValidationError(): Locator {
    return this.page.locator('.was-validated');
  }
  getSuccessMessage(): Locator{
    return this.page.locator('#example-modal-sizes-title-lg');
  }
}