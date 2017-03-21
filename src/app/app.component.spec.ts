import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router, RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {

  // NOTE:  There is a documented bug in Angular Material that will
  // cause the Active unit test to fail: https://github.com/angular/material2/issues/1967

  const mockRouter = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: Router,
          useValue: mockRouter
        }
      ]
    });
    TestBed.compileComponents();
  });

  xit('should construct', async(inject(
    [Router], (router) => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;

      expect(app).toBeTruthy();
    })));

});
