import { Injectable } from '@angular/core';
import Book from '../interface/book';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected obs = new ReplaySubject<Book[]>();
  protected Books!: Book[];

  constructor(public http: HttpClient) {
    
  }

  subscribeBooks() {
    return this.obs.asObservable();
  }

  getBooks() {
    
  }

  addBook(book: Book) {
    
  }

  editBook(book:Book) {
    
  }

  deleteBook(book: Book) {
    
  }
}
