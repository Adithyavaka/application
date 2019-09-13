import { Component, OnInit } from '@angular/core';
import { Details } from '../details';
import { DETAILS } from '../main-details';

@Component({
  selector: 'app-self-view',
  templateUrl: './self-view.component.html',
  styleUrls: ['./self-view.component.css']
})
export class SelfViewComponent implements OnInit {
  someDetail = DETAILS;
  selectDetail : Details;

  
  constructor() { }

  ngOnInit() {
  }
  onSelect(hero: Details): void {
    this.selectDetail = hero;
  }

}
