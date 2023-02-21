import { BehaviorSubject, delayWhen, from, interval, tap } from 'rxjs';

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public ui$ = from([{ '1': null }, { '1': undefined }, { '1': 2 }, { '1': 3 }])
    .pipe(delayWhen(ui => ui[1] ? interval(Math.random() * 1000) : interval(10)))
    .pipe(tap(c => console.warn('ui', c)));

  public segments$ = from([['general', 'detail', 'versions'], ['general', 'versions', 'rulings', 'other']])
    .pipe(delayWhen(() => interval(Math.random() * 50)))
    .pipe(tap(c => console.warn('segments', c)));

  public _segment$ = new BehaviorSubject<string>('general');

  public segment$ = this._segment$
    .pipe(delayWhen(() => interval(Math.random() * 50)))
    .pipe(tap(c => console.warn('segment', c)));

  updateSegment2(value: string | null | undefined) {
    this._segment$.next(value as string);
  }

}
