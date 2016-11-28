import {Component} from '@angular/core';
import {Router, Event } from '@angular/router';
@Component({
    selector: 'myapp',
    template: `<nav class="navbar navbar-default navbar-fixed-top top-navbar">
                    <div class="container app-container">
                        <div class="navbar-header">
                            <div class="navbar-brand">MyApp</div>
                        </div>
                        <ul class="nav navbar-nav">
                          <li><a routerLink="/feature-aa" routerLinkActive="active">Feature Aa</a></li>
                          <li><a routerLink="/feature-bb" routerLinkActive="active">Feature Bb</a></li>
                          <li><a routerLink="/feature-cc" routerLinkActive="active">Feature Cc</a></li>
                        </ul>
                    </div>
                </nav>

                <div class="container app-container" >
                    <router-outlet > </router-outlet>
                </div>`
})
export class AppComponent {
}
