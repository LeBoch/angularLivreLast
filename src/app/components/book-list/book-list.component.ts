import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  editingBook: Book | null = null;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id);
  }

  editBook(book: Book) {
    this.editingBook = { ...book };
  }

  updateBook() {
    if (this.editingBook) {
      this.bookService.updateBook(this.editingBook);
      this.editingBook = null;
    }
  }

  cancelEdit() {
    this.editingBook = null;
  }
}
