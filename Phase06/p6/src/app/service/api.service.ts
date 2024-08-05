import { Injectable } from '@angular/core';
import Book from '../interface/book';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected obs = new Subject<Book[]>();
  protected books!: Book[];

  constructor(public http: HttpClient) {
    this.books = [];
  }

  subscribeBooks() {
    return this.obs.asObservable();
  }

  getBooks() {
    this.http.get<Book[]>(API_URL).subscribe((data) => {
      this.books = data;
      this.obs.next(this.books);
    });
  }

  addBook(book: Book) {
    
  }

  editBook(book:Book) {
    
  }

  deleteBook(book: Book) {
    this.http.delete(`${API_URL}/${book.id}`).subscribe(() => {
      this.getBooks();
    });
  }
}
