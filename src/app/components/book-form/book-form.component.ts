// src/app/components/book-form/book-form.component.ts
import { Component, Input } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  @Input() book: Book = {
    id: 0,
    title: '',
    price: 0,
    author: '',
    publicationDate: new Date()
  };
  @Input() isEdit = false;

  constructor(private bookService: BookService) {}

  onSubmit() {
    console.log('onSubmit called', this.book);

    if (this.isEdit) {
      this.bookService.updateBook(this.book);
    } else {
      this.bookService.addBook(this.book);
      this.book = { id: 0, title: '', price: 0, author: '', publicationDate: new Date() };
    }
  }
}
