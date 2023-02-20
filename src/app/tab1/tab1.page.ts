import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public segments = ['general', 'detail', 'versions', 'rulings', 'other'];
  public segment = 'detail';

  updateSegment(value: string | undefined){
    this.segment = value as string;
  }

}
