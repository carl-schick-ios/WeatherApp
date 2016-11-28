import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import {routing}                from './app.routes';
import { AppComponent }       from './app.component';

import {FeatureAaModule}        from './feature-aa/feature-aa.module';
import {FeatureBbModule}        from './feature-bb/feature-bb.module';
import {FeatureCcModule}        from './feature-cc/feature-cc.module';
//import {WorkoutRunnerModule}    from '../workout-runner/workout-runner.module'; 
//import {WorkoutHistoryModule}   from '../workout-history/workout-history.module'; 
//import {FinishModule}           from '../finish/finish.module';
//import {ServicesModule}         from '../../services/services.module';


@NgModule({
  imports:      [ BrowserModule, routing, FeatureAaModule, FeatureBbModule, FeatureCcModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }