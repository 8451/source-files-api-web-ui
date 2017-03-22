import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Source Files API Web';
  routeLinks: any[];
  activeLinkIndex = 0;

  constructor(private router: Router) {
    this.routeLinks = [
      { label: 'Profile', link: 'profile' },
      { label: 'Terms', link: 'terms' },
      { path: 'Registration', component: 'registration' }
    ];

    this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => router.url.indexOf(tab.link) !== -1));
  }
}
