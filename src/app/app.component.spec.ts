import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router, RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material';
import { AuthService } from './services/auth.service';
import { FooterComponent } from './footer/footer.component';

describe('AppComponent', () => {

  const mockRouter = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        // FooterComponent
      ],
      imports: [
        RouterTestingModule,
        MaterialModule
      ],
      // providers: [
      //   {
      //     provide: Router,
      //     useValue: mockRouter
      //   },
      //   AuthService
      // ]
    });
    TestBed.compileComponents();
  });

  it('should construct', async(inject(
    //[Router, AuthService], (router, authService)
    [], () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;

      expect(app).toBeTruthy();
    })));

});
