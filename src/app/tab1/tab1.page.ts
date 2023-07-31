

import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  backHref = "/tabs/tab2?param=anything" 
  optionsEnabled = true;

  items: number[] | null = null;
  constructor(private _cdr: ChangeDetectorRef) {
    this._cdr.detach();
  }

  ngAfterViewInit() {
    this.reload(true);
  }

  toggle() {
    this.optionsEnabled = !this.optionsEnabled;
    this._cdr.detectChanges();
  }

  reload(detect?: boolean) {
    this.items = null;
    if (detect) {
      this._cdr.detectChanges();
    }

    window.setTimeout(() => {
      this.items = new Array(1000);
      for (var i = 0; i < this.items.length; i++) {
        this.items[i] = i;
      }
      if (detect) {
        this._cdr.detectChanges();
      }
    });
  }
}
