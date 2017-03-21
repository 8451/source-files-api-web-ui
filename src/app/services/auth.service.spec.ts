import { TestBed, inject } from '@angular/core/testing';
import { Http, Request, Response, ResponseOptions, RequestOptionsArgs,
  ConnectionBackend, BaseRequestOptions, RequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

import { MaterialModule } from '@angular/material';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  const mockRouter = { navigate: jasmine.createSpy('navigate') };
  beforeEach(() => {
    const mockLocalStorage = {};

    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      return mockLocalStorage[key] || null;
    });

    spyOn(localStorage, 'setItem').and.callFake((key: string, value: string): string => {
      return mockLocalStorage[key] = <string>value;
    });

    spyOn(localStorage, 'removeItem').and.callFake((key: string) => {
      delete mockLocalStorage[key];
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      providers: [AuthService,
        {
          provide: Http, useFactory: (
            backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
        {
          provide: Router,
          useValue: mockRouter
        },
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should call login', inject([AuthService], (service: AuthService) => {
    spyOn(service, 'login');
    service.login();
    expect(service.login).toHaveBeenCalled();
  }));

  it('should call register', inject([AuthService], (service: AuthService) => {
    spyOn(service, 'register');
    service.register();
    expect(service.register).toHaveBeenCalled();
  }));

  it('should call logOut', inject([AuthService], (service: AuthService) => {
    spyOn(service, 'logOut');
    service.logOut();
    expect(service.logOut).toHaveBeenCalled();
  }));

  // integrate somehow that the phamtomjs browser navigated to the /login url
  // it('should navigate user to' + environment.githubAuthorizationUrl, inject([AuthService], (service: AuthService) => {
  //   spyOn(service, 'register');
  //   service.register();
  //   expect(window.location.href).toEqual(environment.githubAuthorizationUrl);
  // }));
});
