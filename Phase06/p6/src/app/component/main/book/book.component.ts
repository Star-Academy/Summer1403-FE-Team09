import { Component, EventEmitter, Input, Output } from '@angular/core';
import Book from '../../../interface/book';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  @Input() public book!: Book;
  @Output() public DeleteBook = new EventEmitter<Book>;

  deleteBook() {
    this.DeleteBook.emit(this.book);
  }
}
