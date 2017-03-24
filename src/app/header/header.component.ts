import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  title = 'Source Files API Web';
  username = 'PROFILE';

  constructor(private router: Router,
    public authService: AuthService) { }

    ngAfterViewInit() {
      this.authService.userInfo().subscribe(
        response => {
          console.log('got userInfo response');
          this.username = response.json().name;
        },
        error => 'ERROR retrieving user information: ' + <any>error
      );
    }

    redirectToProfile() {
      console.log('redirect');
      this.router.navigate(['/profile']);
    }

}
