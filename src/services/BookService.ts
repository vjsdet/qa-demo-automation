
import { BookApiClient } from '../clients/BookApiClient';

export class BookService {
  constructor(private client: BookApiClient) {}

  async getAllBooks() {
    return this.client.getBooks();
  }

  async addBook(userId: string, isbn: string) {
    return this.client.addBook(userId, isbn);
  }

  async updateBook(userId: string, oldIsbn: string, newIsbn: string) {
    return this.client.updateBook(userId, oldIsbn, newIsbn);
  }

  async deleteBook(userId: string, isbn: string) {
    return this.client.deleteBook(userId, isbn);
  }
}
