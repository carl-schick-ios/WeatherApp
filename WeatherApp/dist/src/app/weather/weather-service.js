System.register(['./weather-info.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var weather_info_model_1;
    var WeatherService;
    return {
        setters:[
            function (weather_info_model_1_1) {
                weather_info_model_1 = weather_info_model_1_1;
            }],
        execute: function() {
            //import 'rxjs/add/operator/toPromise';
            //interface WeatherApiResponse {
            //    query: {
            //        count: number;
            //        created: string;
            //        lang: string;
            //        results: {
            //            channel: {
            //                item: {
            //                    condition: {
            //                        code: string;
            //                        temp: string
            //                    }
            //                }
            //            }
            //        }
            //    };
            //}
            WeatherService = (function () {
                function WeatherService() {
                }
                //constructor(private http: Http) { }
                WeatherService.prototype.getWeather = function (woeId) {
                    //const url = this.generateWeatherUrl(woeId);
                    this.currentWeather = new weather_info_model_1.WeatherInfo();
                    //this.http
                    //    .get(url)
                    //    .toPromise()
                    //    .then(x => {
                    //        const apiResponse = x.json() as WeatherApiResponse;
                    //        const weather = apiResponse.query.results.channel.item.condition;
                    //        this.currentWeather.city = this.getCityName(woeId);
                    //        this.currentWeather.condition_code = weather.code;
                    //        this.currentWeather.temperature = Number(weather.temp);
                    //    });
                    //START - remove these testing override
                    this.currentWeather.city = this.getCityName(woeId);
                    this.currentWeather.temperature = 100;
                    //STOP - remove these testing override
                    return this.currentWeather;
                };
                //private generateWeatherUrl(woeId: string): string {
                //    return `http://localhost:8001/api/weather/${woeId}`;
                //}
                WeatherService.prototype.getCityName = function (woeId) {
                    return "CityName ToDo";
                };
                return WeatherService;
            }());
            exports_1("WeatherService", WeatherService);
        }
    }
});
//# sourceMappingURL=weather-service.js.map