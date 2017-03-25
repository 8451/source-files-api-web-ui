import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { UserProfileComponent } from './user-profile.component';
import { SourceWebService } from '../services/source-web.service';
import { Http, Request, Response, ResponseOptions, RequestOptionsArgs,
  ConnectionBackend, BaseRequestOptions, RequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Router } from '@angular/router';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  const mockRouter = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule
      ],
      declarations: [
        UserProfileComponent,
      ],
      providers: [
        SourceWebService,
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
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load API keys', () => {
    expect(component.apiKeys).toBeNull;
    component.ngOnInit();
    expect(component.apiKeys).toBeTruthy;
  });

  it('should call deleteAPIKey',
    inject([], () => {
      spyOn(component, 'deleteAPIKey');
      component.deleteAPIKey('123');
      expect(component.deleteAPIKey).toHaveBeenCalled();
    }));

  it('should call addAPIKey',
    inject([], () => {
      spyOn(component, 'addAPIKey');
      component.addAPIKey();
      expect(component.addAPIKey).toHaveBeenCalled();
    }));

  it('should call deleteAccount',
    inject([], () => {
      spyOn(component, 'deleteAccount');
      component.deleteAccount();
      expect(component.deleteAccount).toHaveBeenCalled();
    }));


});
