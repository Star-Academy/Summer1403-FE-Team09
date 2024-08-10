import { Component, EventEmitter, Input, Output } from '@angular/core';
import Book from '../../../interface/book';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  @Input({ required: true }) public book!: Book;
  @Output() public DeleteBook = new EventEmitter<Book>;

  deleteBook() {
    this.DeleteBook.emit(this.book);
  }
}
