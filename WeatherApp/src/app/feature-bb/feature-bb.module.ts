import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule }       from '../shared/shared.module';
import { FeatureBbComponent }  from './feature-bb.component';

@NgModule({
    imports: [BrowserModule, RouterModule, SharedModule],
    declarations: [FeatureBbComponent],
    exports: [FeatureBbComponent],
})
   
export class FeatureBbModule { }
