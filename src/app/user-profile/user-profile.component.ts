import { Component, OnInit } from '@angular/core';
import { SourceWebService } from '../services/source-web.service';
import { Config } from '../config';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public githubUserId;
  public apiKeys = [];
  public addAnotherAPIKey = false;

  constructor(public service: SourceWebService, public config: Config) {
  }

  ngOnInit() {
    this.loadAPIKeys();
  }

  private loadAPIKeys() {
    // load the API keys for this user
    this.apiKeys = [
      { name: 'APIKey1' },
      { name: 'APIKey2' },
      { name: 'APIKey3' }
    ];

    this.service.getAPIKeys().subscribe(
      response => {
        console.log('getting API keys', response);
        this.apiKeys = response.keys;
      },
      error => 'ERROR: ' + <any>error
    );

    // limit keys to 5
    this.addAnotherAPIKey = (this.apiKeys.length <= this.config.MAX_ALLOWED_API_KEYS);
  }

  deleteAPIKey(apiKey) {
    console.log('call delete event', apiKey);
    this.service.deleteAPIKey(apiKey).subscribe(
      response => {
        console.log('got add api key response');
        this.loadAPIKeys();
      },
      error => 'ERROR: ' + <any>error
    );
  }

  addAPIKey() {
    console.log('call add api key');

    this.service.addAPIKey().subscribe(
      response => {
        console.log('got add api key response');
        this.loadAPIKeys();
      },
      error => 'ERROR: ' + <any>error
    );
  }

  deleteAccount() {
    console.log('call delete account');
  }

}
