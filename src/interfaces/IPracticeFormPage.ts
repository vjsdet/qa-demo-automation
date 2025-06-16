import { Locator } from "@playwright/test";

export interface IPracticeFormPage {
  fillBasicInfo(firstName: string, lastName: string, email: string, mobile: string): Promise<void>;
  submitForm(): Promise<void>;
  getValidationError():Locator;
  getSuccessMessage(): Locator;
}
