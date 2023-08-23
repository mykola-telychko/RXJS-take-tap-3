import { fromEvent } from 'rxjs';
import { take, tap } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/take
// Example 3: Taking first click location
const oneClickEvent = fromEvent(document, 'click').pipe(
  take(1),
  tap((v) => {
    document.getElementById(
      'locationDisplay'
    ).innerHTML = `Your first click was on location ${v.screenX}:${v.screenY}`;
  })
);

const subscribe = oneClickEvent.subscribe();
