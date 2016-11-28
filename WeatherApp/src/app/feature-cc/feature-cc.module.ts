import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule }       from '../shared/shared.module';
import { FeatureCcComponent }  from './feature-cc.component';

@NgModule({
    imports: [BrowserModule, RouterModule, SharedModule],
    declarations: [FeatureCcComponent],
    exports: [FeatureCcComponent],
})

export class FeatureCcModule { }
