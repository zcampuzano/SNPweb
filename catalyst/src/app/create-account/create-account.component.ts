import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  @ViewChild('usernameInput') userRef: ElementRef;
  @ViewChild('passwordInput') passRef: ElementRef;
  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('email') emailRef: ElementRef;
  @Output() userAccount = new EventEmitter<{username: string, password: string}>();

  fields = false;
  createPress = false;
  createStatus: string;
  usernameCheck = '';
  passwordCheck = '';
  username: string;
  password: string


  constructor() {

  }

  ngOnInit() {
  }

  onCreate() {
    this.createPress = true;
    this.username = this.userRef.nativeElement.value;
    this.password = this.userRef.nativeElement.value;
    // this.userAccount.emit({
    //   username: this.username,
    //   password: this.password
    // });

  }

  usernameStyle(event: Event) {
    this.usernameCheck = (<HTMLInputElement>event.target).value;
    if( this.usernameCheck.length > 0 && this.passwordCheck.length > 0 )
      this.fields = true;
    else
      this.fields = false;
      this.createPress = false;
  }

  passwordStyle(event: Event) {
    this.passwordCheck = (<HTMLInputElement>event.target).value;
    if( this.usernameCheck.length > 0 && this.passwordCheck.length > 0 )
      this.fields = true;
    else
      this.fields = false;
      this.createPress = false;
  }

}
