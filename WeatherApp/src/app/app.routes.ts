import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityListComponent }  from './city-list/city-list.component';
import { WeatherComponent }  from './weather/weather.component';


export const routes: Routes = [
    { path: 'city-list', component: CityListComponent },
    { path: 'weather', component: WeatherComponent },
    { path: '**', redirectTo: '/city-list' }
];

// Export this route setup as a module called "routing"
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
