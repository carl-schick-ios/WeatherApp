System.register(['@angular/core', '@angular/platform-browser', '@angular/router', '../shared/shared.module', './feature-cc.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, router_1, shared_module_1, feature_cc_component_1;
    var FeatureCcModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (feature_cc_component_1_1) {
                feature_cc_component_1 = feature_cc_component_1_1;
            }],
        execute: function() {
            FeatureCcModule = (function () {
                function FeatureCcModule() {
                }
                FeatureCcModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, router_1.RouterModule, shared_module_1.SharedModule],
                        declarations: [feature_cc_component_1.FeatureCcComponent],
                        exports: [feature_cc_component_1.FeatureCcComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], FeatureCcModule);
                return FeatureCcModule;
            }());
            exports_1("FeatureCcModule", FeatureCcModule);
        }
    }
});
//# sourceMappingURL=feature-cc.module.js.map