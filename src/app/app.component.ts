import { Component } from '@angular/core';
import { DETAILS } from './main-details';
import { Details } from './details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welocome to HR self service portal';
  someDetail = DETAILS;
  selectDetail : Details;
  data:[]
}
