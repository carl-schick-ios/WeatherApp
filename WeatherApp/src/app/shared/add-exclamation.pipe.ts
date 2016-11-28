import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'addExclamation'
})

export class AddExclamationPipe implements PipeTransform {
    private exclamations: string[] = [
        "is the best feature!",
        "is awesome!",
        "content goes here!",
        "is not used very much!",
        "is your favorite feature!",
    ];
    private randomIndex: number;

    constructor() {
        this.randomIndex = Math.floor(Math.random() * this.exclamations.length);
    }

    transform(origText: string): string {
        return origText + " " + this.exclamations[this.randomIndex];
    }
}
