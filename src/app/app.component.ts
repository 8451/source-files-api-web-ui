import { Component } from '@angular/core';

// services
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Source Files API Web';

  constructor(
    public authService: AuthService
  ) { }

}
