import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import Course from "./course";
import { CourseService } from "./course.service";


@Component({
    templateUrl: './course.info.component.html'
})
export class CourseInfoComponent implements OnInit {
    course: Course = new Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {
    }

    ngOnInit(): void {
        let id = +(this.activatedRoute.snapshot.paramMap.get('id') || 0);
    //    this.courseId = id // just getting the variable id
        //this.course = this.courseService.retrieveById(id) || new Course;

        this.courseService.retrieveById(id).subscribe({
            next: retrievedCourse => {         // when it is sucessful
                this.course = retrievedCourse;
            },
            error: err => {         // when it fails
                console.error("Error on retrieveById", err)
            }
        })
    }

    delete() : void {
        this.courseService.deleteById(this.course.id).subscribe({
            next: course => {         // when it is sucessful
                this.course = course;
                console.log(course);
            },
            error: err => {         // when it fails
                console.error("Error on delete", err);
            }
       })
    }

    save() : void {
       // this.courseService.save(this.course);
       this.courseService.save(this.course).subscribe({
            next: course => {         // when it is sucessful
                this.course = course;
                console.log(course);
            },
            error: err => {         // when it fails
                console.error("Error on save", err);
            }
       })
    }
}