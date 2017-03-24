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

  // call this to attemp login
  // login(): void {
  //   this.http.get(environment.userAuthUrl)
  //   .subscribe(
  //     (next) => {
  //       // if not logged in, will get a 200 response but blank body
  //       if (next) {
  //         this.isLoggedIn = true;
  //         this.username = next;
  //         // set username once logged in
  //       }
  //     },
  //     (error) => { window.location.href = environment.githubAuthorizationUrl; },
  //     () => { this.router.navigate(['/profile']); });
  // }

  login(): void {
    this.http.get(environment.userAuthUrl)
        .map(response => response.json())
        .catch((error: any) => window.location.href = environment.githubAuthorizationUrl)
        // .subscribe(result => this.result = result);
        .subscribe(result => {
        if (result) {
          this.username = result;
          this.isLoggedIn = true;
          this.router.navigate(['/profile']);
        }
      })
  }


  userInfo(): Observable<any> {
    return this.http.get(environment.userAuthUrl)
      .map((response: Response) =>
        this.username = response.json().name)
      .catch((error: any) => Observable.throw(error.json().error ||
        'Error retrieving user info'));
  }

  register(): void {
    // navigate to login/authorization entity to register
    window.location.href = environment.githubAuthorizationUrl;
  }

  logOut(): void {
    localStorage.removeItem('userLoggedIn');
    this.isLoggedIn = false;
    this.http.delete(environment.userAuthUrl).subscribe(
      (response: Response) => {},
      (error) => {error.json().error || 'Error deleting account'}
    );
    this.router.navigate(['/']);
  }
}
