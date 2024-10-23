import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isbn',
  standalone: true
})
export class IsbnPipe implements PipeTransform {

  transform(value: string): unknown {
    if (!value) {
      return;
    }

    const cleanedIsbn = value.replace(/[^0-9Xx]/g, '');

    if (cleanedIsbn.length === 10) {
      return `${cleanedIsbn.slice(0, 1)}-${cleanedIsbn.slice(1, 4)}-${cleanedIsbn.slice(4, 9)}-${cleanedIsbn.slice(9)}`;
    } else if (cleanedIsbn.length === 13) {
      return `${cleanedIsbn.slice(0, 3)}-${cleanedIsbn.slice(3, 4)}-${cleanedIsbn.slice(4, 7)}-${cleanedIsbn.slice(7, 12)}-${cleanedIsbn.slice(12)}`;
    }

    return value;
  }

}
