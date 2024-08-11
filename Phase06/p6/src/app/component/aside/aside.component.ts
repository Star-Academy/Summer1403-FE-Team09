import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import Book from '../../interface/book';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
})
export class AsideComponent {
  constructor(public api: ApiService) { }

  bookForm: FormGroup  = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    publishData: new FormControl('', Validators.required),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$'),
    ]),
  });

  onSubmit(): void {
    if (this.bookForm.valid) {
      const new_book: Book = {
        name: this.bookForm.value.name || 'name',
        image: this.bookForm.value.image || 'image',
        genre: this.bookForm.value.genre?.split(',') || [],
        author: this.bookForm.value.author || 'author',
        publishData: this.bookForm.value.publishData || 'publishData',
        price: Number(this.bookForm.value.price),
      };

      this.api.addBook(new_book);
      console.log("Form Submitted!");
      alert("Form Submitted!");
      this.bookForm.reset();

    }
    else {
      alert("Please fill all the fields!");
    }
  }
}
