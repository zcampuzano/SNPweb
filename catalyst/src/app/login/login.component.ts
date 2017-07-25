import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Input
 } from '@angular/core';
 import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {
  @ViewChild('usernameInput') userRef: ElementRef;
  @ViewChild('passwordInput') passRef: ElementRef;

  loginFields = false;
  loginPress = false;
  loginStatus: string;
  usernameInput: string;
  passwordInput: string;
  usernameCheck = '';
  passwordCheck = '';

  accounts: {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
  }[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
  }

  onLogin() {
    this.loginPress = true;
    this.usernameInput = this.userRef.nativeElement.value;
    this.passwordInput = this.passRef.nativeElement.value;
    this.accounts = this.accountsService.accounts;
    for(let account of this.accounts){
      console.log(account.username);
      if( this.usernameInput == account.username && this.passwordInput == account.password ) {
        console.log('success!');
        this.loginStatus = 'Success!';
        break;
      } else {
        console.log('loading...');
        this.loginStatus = 'Loading...';
      }
    }
    if(this.loginStatus !== 'Success!') {
      console.log('login failed.');
      this.loginStatus = 'Login Failed';
    }
  }

  usernameStyle(event: Event) {
    this.usernameCheck = (<HTMLInputElement>event.target).value;
    if( this.usernameCheck.length > 0 && this.passwordCheck.length > 0 )
      this.loginFields = true;
    else
      this.loginFields = false;
      this.loginPress = false;
  }

  passwordStyle(event: Event) {
    this.passwordCheck = (<HTMLInputElement>event.target).value;
    if( this.usernameCheck.length > 0 && this.passwordCheck.length > 0 )
      this.loginFields = true;
    else
      this.loginFields = false;
      this.loginPress = false;
  }

}
