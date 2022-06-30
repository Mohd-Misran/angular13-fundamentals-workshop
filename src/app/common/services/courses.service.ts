import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  model: string = 'courses';

  constructor(private http: HttpClient) {}

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }

  /*
  ----------------------------------------
  CRUD OPERATIONS
  ----------------------------------------
  */
  getAllCourses() {
    return this.http.get(this.getUrl());
  }

  findCourse(id: string) {
    return this.http.get(this.getUrlWithId(id));
  }

  createCourse(course: Course) {
    return this.http.post(this.getUrl(), course);
  }

  updateCourse(course: Course) {
    return this.http.put(this.getUrlWithId(course.id), course);
  }

  deleteCourse(id: string) {
    return this.http.delete(this.getUrlWithId(id));
  }
}
