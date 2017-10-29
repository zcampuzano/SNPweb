import { Component, OnInit } from '@angular/core';
import {RegisterAuthService} from '../services/register-auth.service';
import * as $ from 'jquery';
import {SportAuthService} from '../services/sport-auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  sportsList;
  message;
  messageClass;
  formVisible: boolean;

  constructor(
    private authService: RegisterAuthService,
    private sportService: SportAuthService,
  ) { }

  ngOnInit() {
    // Once component loads, get user's data to display on profile
    this.getSports();
  }

  getSports() {
    this.sportService.getSports().subscribe(data => {
      // Check if success true or success false was returned from API
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Set an error class
        this.message = data.message; // Set an error message
        // this.processing = false; // Re-enable submit button
      } else {
        this.sportsList = Object.keys(data.sportList.sport);
      }
    });
  }

  deleteSport() {
    console.log('dasf')
    console.log($('input[name="sports"]')) //todo this
  }

  makeVisible() {
    this.formVisible = !this.formVisible;
  }

}
