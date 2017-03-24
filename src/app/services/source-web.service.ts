import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class SourceWebService {

  constructor(public http: Http) { }

  getAPIKeys() {
    return this.http.get(environment.GET_API_KEYS_URL)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) => Observable.throw(
        'Error retrieving API Keys'));
  }

  addAPIKey(): Observable<any> {
    return this.http.get(environment.ADD_API_URL)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) => Observable.throw(
        'Error retrieving API Keys'));

  }

  deleteAPIKey(apiKey): Observable<any> {
    return this.http.get(environment.DELETE_API_URL)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) => Observable.throw(
        'Error deleting API Key'));

  }

  deleteAccount() {
    return this.http.get(environment.DELETE_ACCOUNT_URL)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) => Observable.throw(
        'Error deleting account'));
  }

}
