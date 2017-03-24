import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Source Files API Web';

  constructor(private router: Router,
    public authService: AuthService) {
  }

  redirectToProfile() {
    console.log('redirect');
    this.router.navigate(['/profile']);
  }
}
