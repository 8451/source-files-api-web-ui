import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Config } from '../config';

import { Observable } from 'rxjs/Observable';

// environment variables
import { environment } from '../../environments/environment';

@Injectable()
export class SourceWebService {
  public githubUserId;

  constructor(
    public http: Http,
    public config: Config) { }

  getAPIKeys() {

  }

  deleteAccount() {

  }

}
