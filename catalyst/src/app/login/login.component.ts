import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFields = false;
  loginPress = false;
  loginStatus = '';
  username = '';
  password = '';
  name1 = 'zcamp';
  pass1 = 'zcamp';
  name2 = 'christian';
  pass2 = 'christian';

  constructor() {

  }

  ngOnInit() {
  }

  onLogin() {
    this.loginPress = true;
    if((this.username == this.name1 && this.password == this.pass1) || (this.username == this.name2 && this.password == this.pass2))
      this.loginStatus = "You are logged in!";
    else
      this.loginStatus = "Login failed, please try again.";

  }

  usernameInput(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
    if( this.username.length > 0 && this.password.length > 0 )
      this.loginFields = true;
    else
      this.loginFields = false;
      this.loginPress = false;

  }

  passwordInput(event: Event) {
    this.password = (<HTMLInputElement>event.target).value;
    if( this.username.length > 0 && this.password.length > 0 )
      this.loginFields = true;
    else
      this.loginFields = false;
      this.loginPress = false;

  }

}
