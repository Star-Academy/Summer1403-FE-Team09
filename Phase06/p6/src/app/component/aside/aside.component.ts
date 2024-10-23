import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule, Validators} from '@angular/forms';
import {ApiService} from '../../service/api.service';
import Book from '../../interface/book';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
})
export class AsideComponent {
  constructor(public api: ApiService) {}


//   bookForm: FormGroup = new FormGroup({
//     name: new FormControl('', Validators.required),
//     image: new FormControl('', Validators.required),
//     genre: new FormControl('', Validators.required),
//     author: new FormControl('', Validators.required),
//     publishData: new FormControl('', Validators.required),
//     price: new FormControl('', [
//       Validators.required,
//       Validators.pattern('^[0-9]+(.[0-9]{1,2})?$'),
//     ]),

  // id: string;
  // isbn: string;

  // book_title: string;
  // book_author: string;
  // year_of_publication: number;
  // publisher: string;

  // image_url_s: string;
  // image_url_m: string;
  // image_url_l: string;

  bookForm = new FormGroup({
    
    book_title: new FormControl('', Validators.required),
    book_author: new FormControl('', Validators.required),
   
    year_of_publication: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{4}$')]),
    isbn: new FormControl('', Validators.required),
    publisher: new FormControl('', Validators.required),

    image_url_s: new FormControl('', Validators.required),
    image_url_m: new FormControl('', Validators.required),
    image_url_l: new FormControl('', Validators.required),
  });

  onSubmit(): void {
    if (this.bookForm.valid) {
      const new_book: Book = {
        book_title: this.bookForm.value.book_title || 'book_title',
        
        year_of_publication: Number(this.bookForm.value.year_of_publication) || 1000,
        book_author: this.bookForm.value.book_author || 'book_author',
        isbn: this.bookForm.value.isbn || 'isbn',
        
        publisher: this.bookForm.value.publisher || 'publisher',
        
        image_url_s: this.bookForm.value.image_url_s || 'image_url_s',
        image_url_m: this.bookForm.value.image_url_m || 'image_url_m',
        image_url_l: this.bookForm.value.image_url_l || 'image_url_l',
      };

      this.api.addBook(new_book);
      console.log('Form Submitted!');
      alert('Form Submitted!');
      this.bookForm.reset();
    } else {
      alert('Please fill all the fields!');
    }
  }
}
