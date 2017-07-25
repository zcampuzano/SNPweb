import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.css']
})
export class AccountHomeComponent implements OnInit {
  user : {
    username: string,
    firstName: string,
    lastName: string,
    email: string
  };

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      username: this.route.snapshot.params['usernm'],
      firstName: this.route.snapshot.params['firstnm'],
      lastName: this.route.snapshot.params['lastnm'],
      email: this.route.snapshot.params['email'],
    }
  }

}
