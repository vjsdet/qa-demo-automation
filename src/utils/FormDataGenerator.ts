export interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
}

export class FormDataGenerator {
  static validData(): UserFormData {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      mobile: '9999999999',
    };
  }

  static invalidEmailData(): UserFormData {
    return {
      ...this.validData(),
      email: 'invalid-email',
    };
  }

  static missingMobileData(): UserFormData {
    return {
      ...this.validData(),
      mobile: '',
    };
  }
}