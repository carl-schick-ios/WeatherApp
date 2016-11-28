import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { RouterModule }     from '@angular/router';
import { SharedModule }       from '../shared/shared.module';
import { FeatureAaComponent }  from './feature-aa.component';

@NgModule({
    imports: [BrowserModule, RouterModule, SharedModule],
    declarations: [FeatureAaComponent],
    exports: [FeatureAaComponent],
})

export class FeatureAaModule { }
