import { Component } from '@angular/core'
import Course from './course'

@Component({
    selector: 'app-course-list',
    templateUrl: './course.list.component.html'
})

export class CourseListComponent {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular Basics',
                imageURL: '/assets/img/angular-icon.png',
                price: 99.99,
                code: 'ANG-101',
                duration: 240,
                rating: 4.5,
                releaseDate: '2022, December 21th'
            },
            {
                id: 2,
                name: 'ReactJS Basics',
                imageURL: '/assets/img/react-icon.png',
                price: 99.99,
                code: 'RCT-101',
                duration: 120,
                rating: 5,
                releaseDate: '2022, May 4th'
            },
        ]
    }
} 

