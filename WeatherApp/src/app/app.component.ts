import {Component} from '@angular/core';
import {Router, Event } from '@angular/router';
@Component({
    selector: 'weather-app',
    template: `<nav class="navbar navbar-default navbar-fixed-top top-navbar">
                    <div class="container app-container">
                        <div class="navbar-header">
                            <div class="navbar-brand">WeatherApp</div>
                        </div>
                        <ul class="nav navbar-nav">
                          <li><a routerLink="/city-list" routerLinkActive="active">City List</a></li>
                          <li><a routerLink="/weather" routerLinkActive="active">Weather</a></li>
                        </ul>
                    </div>
                </nav>

                <div class="container app-container" >
                    <router-outlet > </router-outlet>
                </div>`
})
export class AppComponent {
}
