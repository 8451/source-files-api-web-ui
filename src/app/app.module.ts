import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SourceWebService } from './services/source-web.service';
import { AuthService } from './services/auth.service';
import { AuthService } from './services/auth.service';

import { AuthGuard } from './auth.guard';

import { Config } from './config';

import {} from 'jasmine';

@NgModule({
  declarations: [
    AppComponent,
    TermsAndConditionsComponent,
    RegistrationComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [
    SourceWebService,
    AuthService,
    AuthGuard,
    Config
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
