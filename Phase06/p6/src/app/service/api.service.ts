import { Injectable } from '@angular/core';
import Book from '../interface/book';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.config';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public obs: ReplaySubject<Book>;
  constructor(public http: HttpClient) {
    this.obs = new ReplaySubject<Book>();
    this.http.get<Book[]>(API_URL).subscribe((books: Book[]) => {
      books.forEach(book => {
        this.obs.next(book);
      });
    });
  }

  getBooks(): Observable<Book> {
    return this.obs.asObservable();
  }

  addBook(book: Book) {
    this.obs.next(book);
  }
}
