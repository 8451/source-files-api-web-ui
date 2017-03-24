import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
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
    this.http.get(environment.userAuthUrl).subscribe(
                                          (next) => { this.isLoggedIn = true; },
                                          (error) => { console.log(error); },
                                          () => { this.router.navigate(['/profile']); });
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
