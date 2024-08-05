import { of } from 'rxjs';

const observable = of(1, 2, 3, 4, 5);
const observer = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log("Stream complete.")
}

observable.subscribe(observer)