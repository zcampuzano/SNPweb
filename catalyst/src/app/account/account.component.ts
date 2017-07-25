import {Component, Input, OnInit} from '@angular/core';
import {AccountsService} from "../accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent implements OnInit {
  @Input() account : {username: string, password: string, firstName: string, lastName: string, email: string}

  constructor(private accountsService : AccountsService) { }

  ngOnInit() {
  }

  //onSetTo()

}
