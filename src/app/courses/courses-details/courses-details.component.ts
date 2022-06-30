import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/common/models/course';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss'],
})
export class CoursesDetailsComponent {
  course: Course;
  originalTitle: string = '';

  @Input() set selectedCourse(value: Course) {
    this.course = { ...value };
    this.originalTitle = value.title;
  }

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  saveCourse(course: Course) {
    this.saved.emit(course);
  }

  reset() {
    this.cancelled.emit();
  }
}
