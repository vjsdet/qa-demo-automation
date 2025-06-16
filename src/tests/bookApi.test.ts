
import { test, expect, request } from '@playwright/test';
import { BookApiClient } from '../clients/BookApiClient';
import { BookService } from '../services/BookService';
import { getToken } from '../utils/Auth';

test.describe('BookStore API CRUD Tests', () => {
  let service: BookService;
  const userId = 'vijay'; 
  const initialIsbn = '9781449325862'; // Git Pocket Guide
  const newIsbn = '9781449331818'; // Learning JavaScript Design Patterns

  test.beforeAll(async () => {
    const token = await getToken();
    const context = await request.newContext();
    const client = new BookApiClient(context, token);
    service = new BookService(client);
  });

  test('Read Books', async () => {
    const res = await service.getAllBooks();
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(body.books.length).toBeGreaterThan(0);
  });

  test('Create (Add Book)', async () => {
    const res = await service.addBook(userId, initialIsbn);
    expect(res.status()).toBe(201);
  });

  test('Update Book', async () => {
    const res = await service.updateBook(userId, initialIsbn, newIsbn);
    expect(res.status()).toBe(200);
  });

  test('Delete Book', async () => {
    const res = await service.deleteBook(userId, newIsbn);
    expect(res.status()).toBe(204);
  });
});
