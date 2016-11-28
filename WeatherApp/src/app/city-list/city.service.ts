import {City} from './city.model';

export class CityService {
    private cities: City[] = [];

    getCityList() {
        this.cities.push(new City("Bogota", "img/bogota.jpg", 368148));
        this.cities.push(new City("Cape Town", "img/cape-town.jpg", 1591691));
        this.cities.push(new City("London", "img/london.jpg", 44418));
        this.cities.push(new City("New Delhi", "img/delhi.jpg", 28743736));
        this.cities.push(new City("New York", "img/new-york.jpg", 2459115));
        this.cities.push(new City("Paris", "img/paris.jpg", 615702));
        this.cities.push(new City("Sydney", "img/sydney.jpg", 1105779));
        this.cities.push(new City("Tokyo", "img/tokyo.jpg", 1118370));
        this.cities.push(new City("Vancouver", "img/vancouver.jpg", 9807));
        return this.cities;
    }
}