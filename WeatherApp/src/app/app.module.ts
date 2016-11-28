import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import {routing}                from './app.routes';
import { AppComponent }       from './app.component';

import {CityListModule}        from './city-list/city-list.module';
import {WeatherModule}        from './weather/weather.module';



@NgModule({
    imports: [BrowserModule, routing, CityListModule, WeatherModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }