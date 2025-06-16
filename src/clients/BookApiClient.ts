
import { APIRequestContext } from '@playwright/test';

export class BookApiClient {
  constructor(private request: APIRequestContext, private token: string) {}

  async getBooks() {
    return this.request.get('/BookStore/v1/Books');
  }

  async addBook(userId: string, isbn: string) {
    return this.request.post('/BookStore/v1/Books', {
      data: {
        userId,
        collectionOfIsbns: [{ isbn }],
      },
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  async updateBook(userId: string, oldIsbn: string, newIsbn: string) {
    return this.request.put('/BookStore/v1/Books', {
      data: {
        userId,
        isbn: oldIsbn,
        newIsbn,
      },
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  async deleteBook(userId: string, isbn: string) {
    return this.request.delete('/BookStore/v1/Book', {
      data: { userId, isbn },
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }
}
