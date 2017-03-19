import { Injectable } from '@angular/core';

@Injectable()
export class Config {
  // public readonly GITHUB_AUTHORIZATION_URL = 'https://www.linkedin.com/oauth/v2/authorization';
  public readonly GITHUB_AUTHORIZATION_URL = 'http://localhost:8080/login';
}
