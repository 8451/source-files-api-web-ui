import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { UserProfileComponent } from './user-profile.component';
import { SourceWebService } from '../services/source-web.service';
import { Http, Request, Response, ResponseOptions, RequestOptionsArgs,
  ConnectionBackend, BaseRequestOptions, RequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Config } from '../config';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

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
        Config,
        MockBackend,
        BaseRequestOptions,
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

});
