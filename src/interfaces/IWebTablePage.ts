export interface IWebTablePage {
  addNewUser(user: any): Promise<void>;
  getRowText(rowIndex: number): Promise<string>;
  updateFirstUser(newDepartment: string): Promise<void>;
  deleteFirstUser(): Promise<void>;
  getRowCount(): Promise<number>;
}
