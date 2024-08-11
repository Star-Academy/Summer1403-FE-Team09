import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import Book from '../interface/interface';
import { of } from 'rxjs';
import { BOOK_API_URL } from '../app.config';

describe('ApiService', () => {
  let service: ApiService;
  let mockBooks: Book[];
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'delete',
      'put',
    ]);

    TestBed.configureTestingModule({
      providers: [ApiService, { provide: HttpClient, useValue: spy }],
    });
    service = TestBed.inject(ApiService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;

    mockBooks = [
      {
        id: '1',
        name: 'Book 1',
        author: 'Author 1',
        genre: ['a'],
        image: '',
        price: 100,
        publishData: '2002-01-01',
      },
      {
        id: '2',
        name: 'Book 2',
        author: 'Author 2',
        genre: ['a'],
        image: '',
        price: 100,
        publishData: '2002-01-01',
      },
    ];

    httpClientSpy.get.and.returnValue(of(mockBooks));
    service.getBooks();
  });

  it('should be created When initial', () => {
    expect(service).toBeTruthy();
  });

  it('should get books from the spy API', () => {
    service.subscribeBooks().subscribe((books) => {
      expect(books).toEqual(mockBooks);
    });

    expect(httpClientSpy.get).toHaveBeenCalledOnceWith(BOOK_API_URL);
  });

  it('should find book by id when call the function', () => {
    const book = service.getBookById('1');
    expect(book).toEqual(mockBooks[0]);
  });

  it('should add book when call the function', () => {
    const mockBook: Book = {
      id: '3',
      name: 'Book 3',
      author: 'Author 3',
      genre: ['a'],
      image: '',
      price: 100,
      publishData: '2002-01-01',
    };

    httpClientSpy.post.and.returnValue(of(mockBook));

    service.addBook(mockBook);

    service.subscribeBooks().subscribe((books) => {
      expect(books).toEqual(mockBooks);
    });
  });

  it('should delete book when call the function', () => {
    httpClientSpy.delete.and.returnValue(of(true));

    service.deleteBook(mockBooks[0]);

    service.subscribeBooks().subscribe((books) => {
      expect(books).toEqual(mockBooks);
    });
  });

  it('should edit book when call the function', () => {
    const mockBook: Book = {
      id: '1',
      name: 'Book 1',
      author: 'Author 1',
      genre: ['a'],
      image: '',
      price: 100,
      publishData: '2002-01-01',
    };

    httpClientSpy.put.and.returnValue(of(mockBook));

    service.editBook(mockBook);

    service.subscribeBooks().subscribe((books) => {
      expect(books).toEqual(mockBooks);
    });
  });
});
