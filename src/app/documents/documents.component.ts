import { Component, OnInit } from '@angular/core';
import { DETAILS } from '../main-details';
import { Details } from '../details';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  someDetail = DETAILS;
  selectDetail : Details;
  constructor() { }

  ngOnInit() {
  }

}
