import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router, RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MdTabLink } from '@angular/material';


// NOTE:  There is a documented bug in Angular Material that will
// cause the Active unit test to fail: https://github.com/angular/material2/issues/1967

describe('AppComponent', () => {

  const mockRouter = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {
          provide: Router,
          useValue: mockRouter
        }
      ]
    });
    TestBed.compileComponents();
  });

  it('should construct', async(inject(
    [Router], (router) => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;

      expect(app).toBeTruthy();
    })));

});
