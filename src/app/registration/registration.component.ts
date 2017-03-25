import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  checkboxTruthy = false;
  userLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) { }
  //
  ngOnInit() {
    // check local storage for a little somethin somethin
    this.userLoggedIn = Boolean(localStorage.getItem('userLoggedIn') || false);
  }

  toggleCheckbox() {
    this.checkboxTruthy = !this.checkboxTruthy;
  }

  register(): void {
    // this.authService.register();
    this.router.navigate(['/profile']);
  }

  login(): void {
    if (this.authService.isLoggedIn) {
      this.authService.login();
    }
  }

}
