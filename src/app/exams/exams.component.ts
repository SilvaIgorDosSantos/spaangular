import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { Exam, Question } from '../models/exam';
import { EXAMS } from '../models/exams-data';

@Component({
  selector: 'spa-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

  exams: Exam[];
  selectedExam: Exam;

  examSelected: boolean;

  constructor() { }

  ngOnInit(): void {
    this.exams = EXAMS;
  }

  onSelect(exam: Exam): void {
    this.selectedExam = exam;
    this.examSelected = true;
  }

  test(value: boolean, question: Question): void {
    question.done = true;
    question.correct = value;
  }
}
