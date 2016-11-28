import {Component, Input} from '@angular/core';
import {AddExclamationPipe} from '../shared/add-exclamation.pipe';

@Component({
    selector: 'feature-cc',
    templateUrl: '/src/app/feature-cc/feature-cc.html',
})

export class FeatureCcComponent {
    featureName: string = "Feature Cc";
}
