import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../service/api.service';
import {BookComponent} from './book/book.component';
import Book from '../../interface/book';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  protected books!: Book[];

  constructor(protected api: ApiService) {}

  ngOnInit() {
    this.api.subscribeBooks().subscribe((books) => {
      this.books = books;
    });
    this.api.getBooks();
  }

  DeleteBook(book: Book) {
    this.api.deleteBook(book);
  }
}
