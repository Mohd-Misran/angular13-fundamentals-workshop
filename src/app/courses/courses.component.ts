import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // 1. Render courses in a list
  // 2. Select a course
  // 3. Render selected course
  /* FIXME: Change type of courses to Observable<Course[]>  */
  courses: any = [];
  selectedCourse: Course = emptyCourse;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  selectCourse(course: Course) {
    // Pass copy of course because when you mutate the selectedCourse
    // the original object does not change
    this.selectedCourse = course;
  }

  fetchCourses() {
    // this.coursesService.getAllCourses().subscribe((result: Course[]) => {
    //   this.courses = result;
    // });
    this.courses = this.coursesService.getAllCourses();
  }

  createCourse(course: Course) {
    this.coursesService
      .createCourse(course)
      .subscribe((result) => this.fetchCourses());
  }

  updateCourse(course: Course) {
    this.coursesService
      .updateCourse(course)
      .subscribe((result) => this.fetchCourses());
  }

  saveCourse(course: Course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  deleteCourse(id: string) {
    this.coursesService.deleteCourse(id).subscribe(() => this.fetchCourses());
  }

  reset() {
    this.selectCourse({ ...emptyCourse });
  }
}
