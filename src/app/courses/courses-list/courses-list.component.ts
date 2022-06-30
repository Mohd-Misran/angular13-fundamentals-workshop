import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/common/models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() courses: Course[] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  selectCourse(course: Course) {
    this.selected.emit(course);
  }

  deleteCourse(courseId: string) {
    this.deleted.emit(courseId);
  }
}
