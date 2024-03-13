import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Lecturer } from 'src/app/models/lecturer.model';
import { User } from 'src/app/models/user.model';
import { CourseService } from 'src/app/services/course.service';


@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent {

  courses: Course[];
  selectedCourse: Course;
  flag: boolean = false;
  constructor(private router: Router, private _courseService: CourseService) {
    this._courseService.getCourses().subscribe(data => {
      this.courses = data;
    })

    // const ch = sessionStorage.getItem("isLect");
    // const currentUserObject = JSON.parse(ch);
    // // set object to localstorage
    // const myObject = {
    //   key1: 'value1',
    //   key2: 'value2',
    // };

    // // Convert the object to a JSON string
    // const jsonString = JSON.stringify(myObject);
    // localStorage.setItem('myKey', jsonString);

    // //get object from localstorage

    // const storedJsonString = localStorage.getItem('myKey');
    // const storedObject = JSON.parse(storedJsonString);

  }

  selecteCourse(c: Course) {
    const jsonString = JSON.stringify(c);
    localStorage.setItem('currentCourse', jsonString);
    this.router.navigate(['/details']);
    // this.flag = true;
    // this.selectedCourse = c;
  }

}
