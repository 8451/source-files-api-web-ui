import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Source Files API Web';

  constructor(private router: Router,
    public authService: AuthService) {
  }

  ngAfterViewInit() {
    this.authService.userInfo().subscribe(
      response => {
        console.log('got user info response');
      },
      error => 'ERROR retrieving user information: ' + <any>error
    );
  }

  redirectToRegister() {
    if (this.authService.userObject.hasAcceptedTerms) {
      this.router.navigate(['/profile'])
    } else {
      this.router.navigate(['/register']);
    }
  }
}
