System.register(['@angular/router', './city-list/city-list.component', './weather/weather.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, city_list_component_1, weather_component_1;
    var routes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (city_list_component_1_1) {
                city_list_component_1 = city_list_component_1_1;
            },
            function (weather_component_1_1) {
                weather_component_1 = weather_component_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: 'city-list', component: city_list_component_1.CityListComponent },
                { path: 'weather', component: weather_component_1.WeatherComponent },
                { path: '**', redirectTo: '/city-list' }
            ]);
            // Export this route setup as a module called "routing"
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes));
        }
    }
});
//# sourceMappingURL=app.routes.js.map