export interface WebTableData {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  salary: string;
  department: string;
}

export class WebTableDataGenerator {
  static validData(): WebTableData {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      age: "30",
      salary: "50000",
      department: "QA",
    };
  }
}
