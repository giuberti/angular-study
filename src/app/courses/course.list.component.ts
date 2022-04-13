import { Component } from '@angular/core'
import Course from './course'
import { CourseService } from './course.service';

@Component({
    //selector: 'app-course-list',      // removed after using Routes
    templateUrl: './course.list.component.html'
})
export class CourseListComponent {
    
    _courses: Course[] = [];
    _filterBy: string = '';
    filteredCourses: Course[] = [];

    constructor(private courseService: CourseService) {
    }

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: retrievedCourses => {         // when it is sucessful
                this._courses = retrievedCourses;
                this.filteredCourses = this._courses;
            },
            error: err => {         // when it fails
                console.error("Error on retrieveAll", err)
            }
        })
    }

    deleteById(courseId: number) : void {
        this.courseService.deleteById(courseId).subscribe({
            next: evt => {         // when it is sucessful
                console.log("Deleted with sucess", evt);
                this.retrieveAll();
            },
            error: err => {         // when it fails
                console.error("Error on delete", err);
            }
       })
    }


    set filterCourseByName(value: string) {
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filterCourseByName() { 
        return this._filterBy; 
    }
} 

