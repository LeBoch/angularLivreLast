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

  addBook(newBook: Book) {
    const maxId = this.books.length > 0 ? Math.max(...this.books.map(book => book.id)) : 0;
    newBook.id = maxId + 1;
    this.books.push(newBook);
    this.booksSubject.next(this.books);
  }

  deleteBook(id: number) {
    this.books = this.books.filter(book => book.id !== id);
    this.booksSubject.next(this.books);
  }

  updateBook(updatedBook: Book) {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
      this.booksSubject.next(this.books); 
    }
  }
}
