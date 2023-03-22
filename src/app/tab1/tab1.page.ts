import { BehaviorSubject } from 'rxjs';

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public segments = ['general', 'detail', 'versions'];
  public segment$ = new BehaviorSubject<string>('general');


  updateSegment(value: string | null | undefined) {
    console.error('updating segment value', value)
    this.segment$.next(value as string);
  }

}
