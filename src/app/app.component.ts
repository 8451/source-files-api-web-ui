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
  username = 'PROFILE';

  constructor(private router: Router,
    public authService: AuthService) {
  }

  ngAfterViewInit() {
    this.authService.userInfo().subscribe(
      response => {
        console.log('got add api key response');
        this.username = response.name;
      },
      error => 'ERROR retrieving user information: ' + <any>error
    );

  }

  redirectToProfile() {
    console.log('redirect');
    this.router.navigate(['/profile']);
  }
}
