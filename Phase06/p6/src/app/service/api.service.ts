import { Injectable } from '@angular/core';
import Book from '../interface/book';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.config';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL);
  }
}
