import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  isLoggedIn = false;
  username;

  constructor(
    private http: Http,
    private router: Router
  ) { }

  login(): void {
    this.http.get(environment.userAuthUrl).subscribe(
      (next) => {
        this.isLoggedIn = true;
        // set username once logged in
      },
      (error) => { window.location.href = environment.githubAuthorizationUrl; },
      () => { this.router.navigate(['/profile']); });
  }

  userInfo(): Observable<any> {
    return this.http.get(environment.userAuthUrl)
      .map((response: Response) => {
        this.username = response.json().name;
      })
      .catch((error: any) => Observable.throw(
        'Error retrieving user info'));
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
