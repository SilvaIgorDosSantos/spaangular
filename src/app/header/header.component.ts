import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'spa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() pageToShow = new EventEmitter<string>();

  changePage(value: string) {
    this.pageToShow.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

  showHome(): void {
    this.changePage('home');
  }

  showExams(): void {
    this.changePage('exams');
  }

  showQuestions(): void {
    this.changePage('questions');
  }

  showSearch(): void {
    this.changePage('search');
  }

}
