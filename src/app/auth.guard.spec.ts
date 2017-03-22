import { TestBed, async, inject } from '@angular/core/testing';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { Http, Request, Response, ResponseOptions, RequestOptionsArgs,
  ConnectionBackend, BaseRequestOptions, RequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Router, RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  const mockRouter = { navigate: jasmine.createSpy('navigate') };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        AuthService,
        {
          provide: Http, useFactory: (
            backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        },
        {
          provide: Router,
          useValue: mockRouter
        },
        MockBackend,
        BaseRequestOptions
      ]
    });
  });

  it('should construct AuthGuard', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
