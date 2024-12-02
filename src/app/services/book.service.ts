// src/app/services/book.service.ts
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [];
  private booksSubject = new BehaviorSubject<Book[]>(this.books);

  getBooks() {
    return this.booksSubject.asObservable();
  }

  addBook(book: Book) {
    this.books.push(book); 

  }

  deleteBook(id: number) {
    this.books = this.books.filter(b => b.id !== id);
    this.booksSubject.next(this.books);
  }

  updateBook(updatedBook: Book) {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook; // Mettez à jour le livre
      this.booksSubject.next(this.books); // Notifiez les abonnés
    }
  }
}
