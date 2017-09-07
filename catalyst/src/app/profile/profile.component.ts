import { Component, OnInit } from '@angular/core';
import { RegisterAuthService} from '../services/register-auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username = '';
  email = '';

  constructor(
    private authService: RegisterAuthService
  ) { }

  ngOnInit() {
    // Once component loads, get user's data to display on profile
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username; // Set username
      this.email = profile.user.email; // Set e-mail
    });
  }

  changeUsername() {
    const newUsername = $( "#inputUserName" ).val();
    this.authService.changeUsername(newUsername).subscribe(data => {
      if (data.success) {
        this.username = data.user.username;
      }
    })
  }

}
