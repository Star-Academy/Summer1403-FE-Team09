import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import Book from '../../interface/book';
import { BookComponent } from './book/book.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  protected books!: Book[];

  constructor(protected api: ApiService) {
    this.books = [];
    api.getBooks().subscribe(book => {
      this.books.push(book);
      console.log(book);
    });
  }
  
  DeleteBook(book: Book) {
    this.books = this.books.filter(b => b !== book);
    this.api.deleteBook(book);
  }
}
