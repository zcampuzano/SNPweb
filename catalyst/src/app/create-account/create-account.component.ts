import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
  providers: []
})

export class CreateAccountComponent implements OnInit {
  @ViewChild('usernameInput') userRef: ElementRef;
  @ViewChild('passwordInput') passRef: ElementRef;
  @ViewChild('first') firstRef: ElementRef;
  @ViewChild('last') lastRef: ElementRef;
  @ViewChild('email') emailRef: ElementRef;

  userField = false;
  passField = false;
  usernameCheck = '';
  passwordCheck = '';
  createStatus: string;

  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;




  constructor(private accountsService: AccountsService) {}

  ngOnInit() {

  }

  onCreate() {
    this.username = this.userRef.nativeElement.value;
    this.password = this.passRef.nativeElement.value;
    this.firstName = this.firstRef.nativeElement.value;
    this.lastName = this.lastRef.nativeElement.value;
    this.email = this.emailRef.nativeElement.value;
    if(this.username && this.password && this.firstName && this.lastName && this.email){
      this.accountsService.addAcount(this.username, this.password, this.firstName, this.lastName, this.email);
      this.createStatus = 'Success!';
    } else {
      this.createStatus = 'Please complete all fields...';
    }

  }

  usernameStyle(event: Event) {
    this.usernameCheck = (<HTMLInputElement>event.target).value;
    if( this.usernameCheck.length > 5 ) {
      this.userField = true;
      this.createStatus = '';
    } else {
      this.userField = false;
      this.createStatus = 'Username must be longer than 5 characters!'
    }
  }

  passwordStyle(event: Event) {
    this.passwordCheck = (<HTMLInputElement>event.target).value;
    if( this.passwordCheck.length > 5 ) {
      this.passField = true;
      this.createStatus = '';
    } else {
      this.passField = false;
      this.createStatus = 'Password must be longer than 5 characters!'
    }
  }

}
