import {Http} from "@angular/http";
import {WeatherInfo} from './weather-info.model';
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

export class WeatherService {
    private currentWeather: WeatherInfo;

    //constructor(private http: Http) { }

    getWeather(woeId: string): WeatherInfo {
        //const url = this.generateWeatherUrl(woeId);
        this.currentWeather = new WeatherInfo();

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
    }

    //private generateWeatherUrl(woeId: string): string {
    //    return `http://localhost:8001/api/weather/${woeId}`;
    //}

    private getCityName(woeId: string): string {
        return "CityName ToDo";
    }
}