import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AddExclamationPipe} from './add-exclamation.pipe';

@NgModule({
    imports: [],
    declarations: [AddExclamationPipe],
    exports: [AddExclamationPipe],
})

export class SharedModule { }
