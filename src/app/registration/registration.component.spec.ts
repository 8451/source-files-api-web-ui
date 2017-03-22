import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { RegistrationComponent } from './registration.component';
import { SourceWebService } from '../services/source-web.service';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(() => {
    // mock localStorage object and methods
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

  beforeEach(async(() => {
    const mockRouter = { navigate: jasmine.createSpy('navigate') };

    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [RegistrationComponent],
      providers: [
        SourceWebService,
        AuthService,
        {
          provide: Router,
          useValue: mockRouter
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checkBoxTruthy should initialize to false', () => {
    expect(component.checkboxTruthy).toBeFalsy(false);
  });

  it('userLoggedIn should initialize to false', () => {
    expect(component.userLoggedIn).toBeFalsy();
  });

  it('should be able to check localStorage for userLoggedIn item on ngOnInit()', () => {
    // set user logged in localStorage item
    localStorage.setItem('userLoggedIn', Boolean(true).toString());
    component.ngOnInit();
    expect(localStorage.getItem('userLoggedIn')).toBeTruthy();
  });

  it('should call toggleCheckbox', inject([], () => {
    spyOn(component, 'toggleCheckbox');
    component.toggleCheckbox();
    expect(component.toggleCheckbox).toHaveBeenCalled();
  }));

  it('should call register', inject([], () => {
    spyOn(component, 'register');
    component.register();
    expect(component.register).toHaveBeenCalled();
  }));

  it('should call login', inject([], () => {
    spyOn(component, 'login');
    component.login();
    expect(component.login).toHaveBeenCalled();
  }));

  it('should toggle checkbox checkboxTruthy property correctly', () => {
    component.toggleCheckbox();
    expect(component.checkboxTruthy).toBeTruthy();

    component.toggleCheckbox();
    expect(component.checkboxTruthy).toBeFalsy();
  });
});
