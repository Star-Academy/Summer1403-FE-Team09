import { range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const observable = range(1, 10);
const newObservable = observable.pipe(
    filter(x => x % 2 === 0),
    map(x => x * x)
)

newObservable.subscribe(x => console.log(x))