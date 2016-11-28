System.register(['@angular/router', './feature-aa/feature-aa.component', './feature-bb/feature-bb.component', './feature-cc/feature-cc.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, feature_aa_component_1, feature_bb_component_1, feature_cc_component_1;
    var routes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (feature_aa_component_1_1) {
                feature_aa_component_1 = feature_aa_component_1_1;
            },
            function (feature_bb_component_1_1) {
                feature_bb_component_1 = feature_bb_component_1_1;
            },
            function (feature_cc_component_1_1) {
                feature_cc_component_1 = feature_cc_component_1_1;
            }],
        execute: function() {
            //import {WorkoutRunnerComponent} from '../workout-runner/workout-runner.component';
            //import {WorkoutHistoryComponent} from '../workout-history/workout-history.component';
            //import {FinishComponent} from '../finish/finish.component';
            exports_1("routes", routes = [
                { path: 'feature-aa', component: feature_aa_component_1.FeatureAaComponent },
                { path: 'feature-bb', component: feature_bb_component_1.FeatureBbComponent },
                { path: 'feature-cc', component: feature_cc_component_1.FeatureCcComponent },
                //{ path: 'workout', component: WorkoutRunnerComponent },
                //{ path: 'finish', component: FinishComponent },
                //{ path: 'history', component: WorkoutHistoryComponent },
                { path: '**', redirectTo: '/feature-aa' }
            ]);
            // Export this route setup as a module called "routing"
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes));
        }
    }
});
//# sourceMappingURL=app.routes.js.map