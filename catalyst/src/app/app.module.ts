import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { CreateAccountComponent } from './register/create-account/create-account.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AccountComponent } from './account/account.component';
import {RouterModule, Routes} from '@angular/router';

import { HttpModule } from '@angular/http';
import { RegisterAuthService } from './services/register-auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard} from './guards/auth.guard';
import { NotAuthGuard} from './guards/notAuth.guard';
import { CreateOrganizationComponent } from './register/create-organization/create-organization.component';

const appRoutes : Routes = [
  {path : '', component: LoginComponent, canActivate : [NotAuthGuard]},
  {path : 'register', component: CreateAccountComponent, canActivate : [NotAuthGuard]},
  {path : 'dashboard', component: DashboardComponent, canActivate : [AuthGuard]},
  {path : 'profile', component: ProfileComponent, canActivate : [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CreateAccountComponent,
    DropdownDirective,
    AccountComponent,
    DashboardComponent,
    ProfileComponent,
    CreateOrganizationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FlashMessagesModule
  ],
  providers: [RegisterAuthService, AuthGuard, NotAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
