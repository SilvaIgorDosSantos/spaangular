import { Component, OnInit } from '@angular/core';

import { Question } from '../models/exam';
import { EXAMS } from '../models/exams-data';

@Component({
  selector: 'spa-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  allQuestions: Question[] = [];

  allQuestionsFiltered: Question[] = [];
  questionFilter: string;

  constructor() { }

  ngOnInit(): void {
    this.allQuestions = EXAMS.map((value) => value.questions).reduce((previous, current) => {
      return previous.concat(current);
    });

    this.questionFilter = '';
    this.allQuestionsFiltered = this.allQuestions.filter((value) => {
      return (value.description.includes(this.questionFilter));
    });
  }
  
  filterUpdate(event): void {
    this.questionFilter = event.target.value;
    this.allQuestionsFiltered = this.allQuestions.filter((value) => {
      return (value.description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
      .includes(this.questionFilter.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")));
    });
  }
}
