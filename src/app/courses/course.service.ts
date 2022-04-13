import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Course from "./course";

@Injectable({
    providedIn: 'root'  // using dependency injection for the root 
})
export class CourseService {

    private _courseUrl: string = 'http://localhost:3100/api/courses';

    constructor(private httpClient: HttpClient) { }

    retrieveAll(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this._courseUrl);
    }

    retrieveById(id: number): Observable<Course> {
        //        return COURSES.find((course: Course) => course.id === id);
        return this.httpClient.get<Course>(`${this._courseUrl}/${id}`);
    }


    deleteById(id: number): Observable<any> {
        //        return COURSES.find((course: Course) => course.id === id);
        return this.httpClient.delete<any>(`${this._courseUrl}/${id}`);
    }

    save(updatedCourse: Course): Observable<Course> {
        if (updatedCourse.id) {
            //    const index = COURSES.findIndex((c: Course) => c.id === updatedCourse.id);
            //    COURSES[index] = updatedCourse;
            return this.httpClient.put<Course>(`${this._courseUrl}/${updatedCourse.id}`, updatedCourse);
        }
        else
            return this.httpClient.post<Course>(`${this._courseUrl}`, updatedCourse);

    }
}

var COURSES: Course[] = [   // emulating the return of an api.
    {
        id: 1,
        name: 'Angular Basics',
        description: 'Basic fundamentals about Angular',
        imageUrl: '/assets/images/angular-icon.png',
        price: 99.99,
        code: 'ANG-101',
        duration: 240,
        rating: 4.5,
        releaseDate: '2022, December 21'
    },
    {
        id: 2,
        name: 'ReactJS Basics',
        description: 'Basic fundamentals about React',
        imageUrl: '/assets/images/react-icon.png',
        price: 149.90,
        code: 'RCT-101',
        duration: 120,
        rating: 5,
        releaseDate: '2022, May 4'
    },
    {
        id: 3,
        name: 'Phython Basics',
        description: 'Basic fundamentals about Python',
        imageUrl: '/assets/images/python-icon.webp',
        price: 89.90,
        code: 'PTH-101',
        duration: 240,
        rating: 4,
        releaseDate: '2022, April 25'
    },
    {
        id: 4,
        name: 'Azure Basics',
        description: 'Basic fundamentals about Azure Cloud',
        imageUrl: '/assets/images/azure-icon.png',
        price: 179.99,
        code: 'AZR-101',
        duration: 360,
        rating: 3.5,
        releaseDate: '2022, December 25'
    },
]