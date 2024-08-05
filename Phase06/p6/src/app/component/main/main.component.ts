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
    this.api.subscribeBooks().subscribe((books) => {
      this.books = books;
    })
  }
  
  DeleteBook(book: Book) {
  }
}
