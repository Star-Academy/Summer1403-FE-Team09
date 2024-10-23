import { Injectable } from '@angular/core';
import Book from '../interface/book';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private obs = new BehaviorSubject<Book[]>([]);
  private books!: Book[];

  constructor(public http: HttpClient) {
    this.books = [];
  }

  subscribeBooks() {
    return this.obs.asObservable();
  }

  getBooks() {
    type response = {
      "books": Book[] 
    }
    this.http.get<response>(API_URL).subscribe((data) => {
      this.books = data.books;
      this.obs.next(this.books);
    });
  }

  getBookById(id: string) {
    return this.books.find((b) => b.id === id);
  }

  addBook(book: Book) {
    this.http.post(API_URL, book).subscribe(() => {
      this.books.push(book);
      this.obs.next(this.books);
    });
  }

  editBook(book: Book) {
    this.http.put(`${API_URL}/${book.id}`, book).subscribe(() => {

      this.books = this.books.map((b) => {
        if (b.id === book.id) {
          return book;
        }
        return b;
      });

      this.obs.next(this.books);
    });
  }

  deleteBook(book: Book) {
    this.http.delete(`${API_URL}/${book.id}`).subscribe(() => {
      const index = this.books.findIndex(b => b.id === book.id);
      if (index !== -1) {
        this.books.splice(index, 1);
        this.obs.next(this.books);
      }
    });
  }
}
