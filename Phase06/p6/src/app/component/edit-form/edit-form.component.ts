import {Component, HostListener} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Book from '../../interface/book';
import {ApiService} from '../../service/api.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.scss',
})
export class EditFormComponent {
  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    publishData: new FormControl('', Validators.required),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+(.[0-9]{1,2})?$'),
    ]),
  });
  protected book!: Book;

  constructor(
    public api: ApiService,
    public route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.book = this.api.getBookById(this.route.snapshot.params['id']) as Book;

    if (!this.book) {
      this.location.back();
      alert('Book not found!');
      return;
    }

    this.formGroup = new FormGroup({
      name: new FormControl(this.book.name, Validators.required),
      image: new FormControl(this.book.image, Validators.required),
      genre: new FormControl(this.book.genre.join(', '), Validators.required),
      author: new FormControl(this.book.author, Validators.required),
      publishData: new FormControl(this.book.publishData, Validators.required),
      price: new FormControl(this.book.price, [
        Validators.required,
        Validators.pattern('^[0-9]+(.[0-9]{1,2})?$'),
      ]),
    });
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      const new_book: Book = {
        id: this.book.id,
        name: this.formGroup.value.name || this.book.name,
        image: this.formGroup.value.image || this.book.image,
        genre: this.formGroup.value.genre?.split(',') || this.book.genre,
        author: this.formGroup.value.author || this.book.author,
        publishData: this.formGroup.value.publishData || this.book.publishData,
        price: this.formGroup.value.price ?? this.book.price,
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
