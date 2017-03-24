import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { ApiKey } from '../models/apiKey.model';

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

  addAPIKey(appName: string): Observable<any> {
    let apiKey = new ApiKey();
    apiKey.name = appName;
    let headers = new Headers({'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});

    return this.http.post(environment.ADD_API_URL
      , JSON.stringify(apiKey)
      , options)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) => Observable.throw(
        'Error retrieving API Keys'));

  }

  deleteAPIKey(apiKey): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});

    return this.http.delete(`${environment.DELETE_API_URL}/${apiKey.key}`
      , options)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) => Observable.throw(
        'Error deleting API Key'));

  }

  deleteAccount() {
    return this.http.delete(environment.DELETE_ACCOUNT_URL)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) => Observable.throw(
        'Error deleting account'));
  }

}
