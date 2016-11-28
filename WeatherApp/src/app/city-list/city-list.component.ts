import {Component, Input} from '@angular/core';
import {AddExclamationPipe} from '../shared/add-exclamation.pipe';
import {City} from './city.model';
import {CityService} from './city.service';

@Component({
    selector: 'city-list',
    providers: [CityService],
    templateUrl: '/src/app/city-list/city-list.html',
})

export class CityListComponent {
    featureName: string = "City List";
    cities: City[];

    constructor(private cityService: CityService) {
        this.cities = cityService.getCityList();
    }
}
