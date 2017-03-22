import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegistrationComponent } from './registration/registration.component';

export const ROUTES: Routes = [
  { path: 'terms', component: TermsAndConditionsComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'registration', component: RegistrationComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);
