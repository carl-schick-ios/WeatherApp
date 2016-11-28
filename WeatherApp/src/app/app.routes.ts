import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureAaComponent }  from './feature-aa/feature-aa.component';
import { FeatureBbComponent }  from './feature-bb/feature-bb.component';
import { FeatureCcComponent }  from './feature-cc/feature-cc.component';
//import {WorkoutRunnerComponent} from '../workout-runner/workout-runner.component';
//import {WorkoutHistoryComponent} from '../workout-history/workout-history.component';
//import {FinishComponent} from '../finish/finish.component';

export const routes: Routes = [
    { path: 'feature-aa', component: FeatureAaComponent },
    { path: 'feature-bb', component: FeatureBbComponent },
    { path: 'feature-cc', component: FeatureCcComponent },
    //{ path: 'workout', component: WorkoutRunnerComponent },
    //{ path: 'finish', component: FinishComponent },
    //{ path: 'history', component: WorkoutHistoryComponent },
    { path: '**', redirectTo: '/feature-aa' }
];

// Export this route setup as a module called "routing"
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
