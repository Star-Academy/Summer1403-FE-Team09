import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import Book from '../../interface/book';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {

  protected books?: Book[];
  constructor(protected api: ApiService) {
    api.getBooks().subscribe(books => {
      this.books = books;
    });
  }

}
