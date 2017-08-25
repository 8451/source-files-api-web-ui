import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {

  isLoggedIn = false;
  username = 'PROFILE';
  public userObject = new User();

  constructor(
    private http: Http,
    private router: Router
  ) { }

  login(): void {
    this.http.get(environment.userAuthUrl)
        .map(response => {
          console.log('login response', response.json());
          this.userObject = response.json();
          this.username = this.userObject.name;
          this.isLoggedIn = true;
          this.router.navigate(['/profile']);
        })
        .catch((error: any) => window.location.href = environment.githubAuthorizationUrl)
        .subscribe(result => {
        if (result) {
          // this.isLoggedIn = true;
          // this.router.navigate(['/profile']);
        }
      })
  }

  userInfo(): Observable<any> {
    return this.http.get(environment.userAuthUrl)
      .map((response: Response) => {
        this.userObject = response.json();
        this.username = this.userObject.name;
        if (this.username) { this.isLoggedIn = true };
      })
      .catch((error: any) => Observable.throw(error.json().error ||
        'Error retrieving user info'));
  }

  register(): Observable<any> {
    this.userObject.hasAcceptedTermsValue=true;
    this.userObject.hasAcceptedTerms=true;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(environment.userAuthUrl
      , JSON.stringify(this.userObject)
      , options)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) => Observable.throw(
        'Error retrieving API Keys'));
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
