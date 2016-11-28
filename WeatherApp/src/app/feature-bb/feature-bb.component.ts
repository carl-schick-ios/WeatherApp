import {Component, Input} from '@angular/core';
import {AddExclamationPipe} from '../shared/add-exclamation.pipe';

@Component({
    selector: 'feature-bb',
    templateUrl: '/src/app/feature-bb/feature-bb.html',
})

export class FeatureBbComponent {
    featureName: string = "Feature Bb";
}
