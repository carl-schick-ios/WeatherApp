import {Component, Input} from '@angular/core';
import {AddExclamationPipe} from '../shared/add-exclamation.pipe';

@Component({
    selector: 'feature-aa',
    templateUrl: '/src/app/feature-aa/feature-aa.html',
})

export class FeatureAaComponent {
    featureName: string = "Feature Aa";
}
