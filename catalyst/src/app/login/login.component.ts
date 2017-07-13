import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('usernameInput') userRef: ElementRef;
  @ViewChild('passwordInput') passRef: ElementRef;
  @Output() userAccount = new EventEmitter<{username: string, password: string}>();

  loginFields = false;
  loginPress = false;
  loginStatus: string;
  username: string;
  password: string;
  usernameCheck = '';
  passwordCheck = '';
  name1 = 'zcamp';
  pass1 = 'zcamp';

  constructor() {

  }

  ngOnInit() {
  }

  onLogin() {
    this.loginPress = true;
    this.username = this.userRef.nativeElement.value;
    this.password = this.userRef.nativeElement.value;
    this.userAccount.emit({
      username: this.username,
      password: this.password
    });

    if( this.username == this.name1 && this.password == this.pass1 )
      this.loginStatus = "You are logged in!";
    else
      this.loginStatus = "Login failed, please try again.";
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
