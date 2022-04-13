import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PipesModule } from "../shared/components/pipes/pipes.module";
import { ReplacePipe } from "../shared/components/pipes/replaceChars.pipe";
import { StarModule } from "../shared/components/stars/star.module";
import { CourseInfoComponent } from "./course.info.component";
import { CourseListComponent } from "./course.list.component";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        PipesModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent 
            },
            {
            path: 'courses/info/:id', component: CourseInfoComponent 
            }
        ])
    ]
})
export class CourseModule {

}