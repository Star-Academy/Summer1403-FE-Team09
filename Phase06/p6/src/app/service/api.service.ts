import { Injectable, OnInit } from '@angular/core';
import Book from '../interface/interface';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BOOK_API_URL } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements OnInit {
  private obs = new BehaviorSubject<Book[]>([]);
  private books!: Book[];

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.books = [];
    this.getBooks(); // fisrt api call ti inilial books
  }

  subscribeBooks() {
    return this.obs.asObservable();
  }

  getBooks() {
    this.http.get<Book[]>(BOOK_API_URL).subscribe((data) => {
      this.books = data;
      this.obs.next(this.books);
    });
  }

  addBook(book: Book) {
    this.http.post(BOOK_API_URL, book).subscribe(() => {
      this.books.push(book);
      this.obs.next(this.books);
    });
  }

  editBook(book: Book) {
    this.http.put(`${BOOK_API_URL}/${book.id}`, book).subscribe(() => {
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
    this.http.delete(`${BOOK_API_URL}/${book.id}`).subscribe(() => {
      const index = this.books.findIndex((b) => b.id === book.id);
      if (index !== -1) {
        this.books.splice(index, 1);
        this.obs.next(this.books);
      }
    });
  }

  getBookById(id: string) {
    return this.books.find((b) => b.id === id);
  }
}
