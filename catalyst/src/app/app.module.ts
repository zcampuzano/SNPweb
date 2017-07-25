import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AccountComponent } from './account/account.component';
import {RouterModule, Routes} from "@angular/router";
import { AccountHomeComponent } from './account-home/account-home.component';

const appRoutes : Routes = [
  {path : '', component: LoginComponent},
  {path : 'register', component: CreateAccountComponent},
  {path : 'account-home/:usernm/:firstnm/:lastnm/:email', component: AccountHomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CreateAccountComponent,
    DropdownDirective,
    AccountComponent,
    AccountHomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
