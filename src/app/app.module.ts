import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/component/core.module';
import { Error404Component } from './core/component/error404/404.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    CourseModule,
    FormsModule,            // for use of forms
    RouterModule.forRoot([  // for use of routes
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'    // path empty direct automatically to /courses
      },
      {
        path: '**', component: Error404Component      // path ** any route not fount
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
