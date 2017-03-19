import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  isLoggedIn = false;

  constructor(
    private http: Http,
    private router: Router
  ) { }

  login(): void {
    this.isLoggedIn = true;
    this.router.navigate(['/profile']);
  }

  register(): void {
    // navigate to login/authorization entity to register
     window.location.href = environment.githubAuthorizationUrl;
  }

  logOut(): void {
    localStorage.removeItem('userLoggedIn');
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }

  loggedIn(): Observable<boolean> {
    return this.http.get(environment.userAuthUrl)
                     .map(response => response.json() ? true : false);
  }

}
