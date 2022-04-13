import { NgModule } from "@angular/core";
import { ReplacePipe } from "./replaceChars.pipe";

@NgModule({
    declarations: [
        ReplacePipe
    ],
    exports: [
        ReplacePipe
    ]
})
export class PipesModule { }