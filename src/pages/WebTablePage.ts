import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
import { IWebTablePage } from "../interfaces/IWebTablePage";
import { WebTableData } from "../utils/WebTableDataGenerator";

export class WebTablePage extends BasePage implements IWebTablePage {
  readonly page: Page;
  readonly addButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly ageInput: Locator;
  readonly salaryInput: Locator;
  readonly departmentInput: Locator;
  readonly submitButton: Locator;
  readonly editButtons: Locator;
  readonly deleteButtons: Locator;
  readonly rows: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.addButton = page.locator("#addNewRecordButton");
    this.firstNameInput = page.locator("#firstName");
    this.lastNameInput = page.locator("#lastName");
    this.emailInput = page.locator("#userEmail");
    this.ageInput = page.locator("#age");
    this.salaryInput = page.locator("#salary");
    this.departmentInput = page.locator("#department");
    this.submitButton = page.locator("#submit");
    this.editButtons = page.locator('[title="Edit"]');
    this.deleteButtons = page.locator('[title="Delete"]');
    this.rows = page.locator(".rt-tbody .rt-tr-group");
  }

  async addNewUser(user:WebTableData) {
    await this.addButton.click();
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.emailInput.fill(user.email);
    await this.ageInput.fill(user.age);
    await this.salaryInput.fill(user.salary);
    await this.departmentInput.fill(user.department);
    await this.submitButton.click();
  }

  async getRowText(rowIndex: number) {
    return await this.rows.nth(rowIndex).innerText();
  }

  async updateFirstUser(newDepartment: string) {
    await this.editButtons.first().click();
    await this.departmentInput.fill(newDepartment);
    await this.submitButton.click();
  }

  async deleteFirstUser() {
    await this.deleteButtons.first().click();
  }

  async getRowCount(): Promise<number> {
    return await this.rows.count();
  }
}
