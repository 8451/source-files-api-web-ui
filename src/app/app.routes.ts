import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AboutComponent } from './about/about.component';

// guards
import { AuthGuard } from './auth.guard';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'register', component: RegistrationComponent },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'terms', component: TermsAndConditionsComponent },
  { path: 'about', component: AboutComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);
