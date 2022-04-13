import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replaceChars'
})
export class ReplacePipe implements PipeTransform {
    transform(originalValue: string, charReplaced: string, valueToReplace: string) {
        return originalValue.replace(charReplaced, valueToReplace);
    }
}