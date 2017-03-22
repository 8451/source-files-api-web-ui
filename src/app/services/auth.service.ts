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
    this.http.get(environment.userAuthUrl).subscribe(this.router.navigate['/profile'], (error) => { console.log(error); });
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
}
