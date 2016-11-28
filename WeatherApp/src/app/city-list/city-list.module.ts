import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { RouterModule }     from '@angular/router';
import { SharedModule }       from '../shared/shared.module';
import { CityListComponent }  from './city-list.component';

@NgModule({
    imports: [BrowserModule, RouterModule, SharedModule],
    declarations: [CityListComponent],
    exports: [CityListComponent],
})

export class CityListModule { }
