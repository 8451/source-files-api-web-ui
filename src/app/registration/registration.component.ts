import { Component, OnInit } from '@angular/core';

// services
import { SourceWebService } from '../services/source-web.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  checkboxTruthy = false;
  userLoggedIn = false;

  constructor(
    private sourceWebService: SourceWebService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // check local storage for a little somethin somethin
    this.userLoggedIn = Boolean(localStorage.getItem('userLoggedIn') || false);
  }

  toggleCheckbox() {
    this.checkboxTruthy = !this.checkboxTruthy;
  }

  register(): void {
    this.authService.register();
  }

  login(): void {
    if (this.authService.isLoggedIn) {
      this.authService.login();
    }
  }

}
