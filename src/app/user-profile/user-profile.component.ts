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
  public apiKeys;
  public addAnotherAPIKey = true;

  routeLinks: any[];
  activeLinkIndex = 0;


  constructor(service: SourceWebService, config: Config) {
    this.loadAPIKeys();

    // setup routing links for nav bar
    this.routeLinks = [
      { label: 'Profile', link: '' }
    ];
  }

  ngOnInit() {
  }

  private loadAPIKeys() {
    // load the API keys for this user
    this.apiKeys = [
      { name: 'APIKey1' },
      { name: 'APIKey2' },
      { name: 'APIKey3' }
    ];
  }

}
