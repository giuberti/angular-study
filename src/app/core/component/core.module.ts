import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./error404/404.component";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
    declarations: [
        MenuComponent,
        Error404Component
    ],
    imports: [
        RouterModule
    ],
    exports: [
        MenuComponent
    ]
})
export class CoreModule { }