import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Book from '../../interface/book';
import { ApiService } from '../../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.scss'
})
export class EditFormComponent {
  formGroup!: FormGroup;
  protected book!: Book;

  constructor(public api: ApiService, public route: ActivatedRoute, private location: Location) {
    this.book = this.api.getBookById(this.route.snapshot.params['id']) as Book;

    if (!this.book) {
      this.location.back();
      alert('Book not found!');
      return;
    }

    this.formGroup = new FormGroup({
      title: new FormControl(this.book.book_title, Validators.required),
      image: new FormControl(this.book.image_url_l, Validators.required),
      publisher: new FormControl(this.book.publisher, Validators.required),
      isbn: new FormControl(this.book.isbn, Validators.required),
      year_of_publication: new FormControl(this.book.year_of_publication, Validators.required),
      book_author: new FormControl(this.book.book_author, Validators.required),
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const new_book: Book = {
        id: this.book.id,
        book_title: this.formGroup.value.book_title || this.book.book_title,
        image_url_l: this.formGroup.value.image_url_l || this.book.image_url_l,
        publisher: this.formGroup.value.publisher || this.book.publisher,
        book_author: this.formGroup.value.book_author || this.book.book_author,
        year_of_publication: this.formGroup.value.year || this.book.year_of_publication,
        isbn: this.formGroup.value.isbn ?? this.book.isbn,
        image_url_s: this.book.image_url_s,
        image_url_m: this.book.image_url_m
      };

      this.api.editBook(new_book);
      this.location.back();
    }
  }
  
  @HostListener('document:keydown.escape', ['$event'])
  close() {
    this.location.back();
  }
}
