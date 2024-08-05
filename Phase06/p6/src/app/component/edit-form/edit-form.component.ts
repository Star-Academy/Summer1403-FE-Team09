import { Component } from '@angular/core';
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
      name: new FormControl(this.book.name),
      image: new FormControl(this.book.image),
      genre: new FormControl(this.book.genre),
      author: new FormControl(this.book.author),
      publishData: new FormControl(this.book.publishData),
      price: new FormControl(this.book.price, [
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const new_book: Book = {
        name: this.formGroup.value.name || this.book.name,
        image: this.formGroup.value.image || this.book.image,
        genre: this.formGroup.value.genre?.split(',') || this.book.genre,
        author: this.formGroup.value.author || this.book.author,
        publishData: this.formGroup.value.publishData || this.book.publishData,
        price: this.formGroup.value.price ?? this.book.price,
      };
      this.api.editBook(new_book);
      this.location.back();
      console.log("Form Submitted!");
    }
  }

  close() {
    this.location.back();
  }
}
