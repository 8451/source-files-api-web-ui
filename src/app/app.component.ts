import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Source Files API Web';
  routeLinks: any[];
  activeLinkIndex = 0;

  constructor(private router: Router,
    public authService: AuthService) {
    this.routeLinks = [
      { label: 'Profile', link: 'profile' },
      { label: 'Terms', link: 'terms' },
      { label: 'Registration', link: 'registration' }
    ];
  }

  redirectToProfile() {
    console.log('redirect');
    this.router.navigate(['/profile']);
  }
}
