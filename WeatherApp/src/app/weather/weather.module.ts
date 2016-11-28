import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule }       from '../shared/shared.module';
import { WeatherComponent }  from './weather.component';

@NgModule({
    imports: [BrowserModule, RouterModule, SharedModule],
    declarations: [WeatherComponent],
    exports: [WeatherComponent],
})
   
export class WeatherModule { }
