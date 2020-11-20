import { Component, OnInit } from '@angular/core';

import { MatCheckboxChange } from '@angular/material/checkbox';

import { EXAMS } from '../models/exams-data';

@Component({
  selector: 'spa-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  exams = EXAMS;

  math: boolean;
  physics: boolean;
  chemistry: boolean;
  subjects: string[];

  constructor() { }

  ngOnInit(): void {
    this.subjects = ['math', 'physics', 'chemistry'];
    this.math = true;
    this.physics = true;
    this.chemistry = true;
  }

  updateQuestions(event:MatCheckboxChange): void {
    switch(event.source.id) {
      case '1':
        this.math = !this.math;
        if(this.math) {
          this.subjects.push('math');
        }
        else {
          this.subjects = this.subjects.filter((value) => value!=='math')
        }
        break;
      case '2':
        this.physics = !this.physics;
        if(this.physics) {
          this.subjects.push('physics');
        }
        else {
          this.subjects = this.subjects.filter((value) => value!=='physics')
        }
        break;
      case '3':
        this.chemistry = !this.chemistry;
        if(this.chemistry) {
          this.subjects.push('chemistry');
        }
        else {
          this.subjects = this.subjects.filter((value) => value!=='chemistry')
        }
        break;
    }
  }
}
