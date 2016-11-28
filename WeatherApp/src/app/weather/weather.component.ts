import {Component, Input} from '@angular/core';
import {AddExclamationPipe} from '../shared/add-exclamation.pipe';
import {WeatherInfo} from './weather-info.model';
import {WeatherService} from './weather-service';

@Component({
    selector: 'weather',
    providers: [WeatherService],
    templateUrl: '/src/app/weather/weather.html',
})

export class WeatherComponent {
    featureName: string = "Weather";
    weatherInfo: WeatherInfo;

    constructor(private weatherService: WeatherService) {
        this.weatherInfo = weatherService.getWeather("test");
    }
}
