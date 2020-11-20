import { Component, OnInit } from '@angular/core';

import { EXAMS } from '../models/exams-data';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  exams = EXAMS;

  isHomeSelected: boolean;
  isExamsSelected: boolean;
  isQuestionsSelected: boolean;
  isSearchSelected: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isHomeSelected = true;
    this.isExamsSelected = false;
    this.isQuestionsSelected = false;
    this.isSearchSelected = false;
  }

  
  pageToShow(page: string) {
    this.isHomeSelected = false;
    this.isExamsSelected = false;
    this.isQuestionsSelected = false;
    this.isSearchSelected = false;
    
    switch(page) {
      case "home":
        this.isHomeSelected = true;
        break;
      case "exams":
        this.isExamsSelected = true;
        break;
      case "questions":
        this.isQuestionsSelected = true;
        break;
      case "search":
        this.isSearchSelected = true;
        break;
    }
  }
}
