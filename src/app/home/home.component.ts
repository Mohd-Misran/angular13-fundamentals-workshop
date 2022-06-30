import { Component, OnInit } from '@angular/core';
import { Lesson } from '../common/models/lesson';
import { LessonsService } from '../common/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courseLessons: Lesson[] = [];
  selectedLesson = null;

  constructor(private lessonsService: LessonsService) {}

  ngOnInit() {
    this.courseLessons = this.lessonsService.lessons;
  }

  selectLesson(lesson) {
    this.selectedLesson = lesson;
  }
}
