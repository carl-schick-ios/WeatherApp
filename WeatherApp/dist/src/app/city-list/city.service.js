System.register(['./city.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var city_model_1;
    var CityService;
    return {
        setters:[
            function (city_model_1_1) {
                city_model_1 = city_model_1_1;
            }],
        execute: function() {
            CityService = (function () {
                function CityService() {
                    this.cities = [];
                }
                CityService.prototype.getCityList = function () {
                    this.cities.push(new city_model_1.City("Bogota", "img/bogota.jpg", 368148));
                    this.cities.push(new city_model_1.City("Cape Town", "img/cape-town.jpg", 1591691));
                    this.cities.push(new city_model_1.City("London", "img/london.jpg", 44418));
                    this.cities.push(new city_model_1.City("New Delhi", "img/delhi.jpg", 28743736));
                    this.cities.push(new city_model_1.City("New York", "img/new-york.jpg", 2459115));
                    this.cities.push(new city_model_1.City("Paris", "img/paris.jpg", 615702));
                    this.cities.push(new city_model_1.City("Sydney", "img/sydney.jpg", 1105779));
                    this.cities.push(new city_model_1.City("Tokyo", "img/tokyo.jpg", 1118370));
                    this.cities.push(new city_model_1.City("Vancouver", "img/vancouver.jpg", 9807));
                    return this.cities;
                };
                return CityService;
            }());
            exports_1("CityService", CityService);
        }
    }
});
//# sourceMappingURL=city.service.js.map