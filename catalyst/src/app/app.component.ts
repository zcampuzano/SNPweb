import {Component, OnInit} from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit{
  loadedRoot = 'login';
  accounts : {username: string, password: string, firstName: string, lastName: string, email: string}[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
  this.accounts = this.accountsService.accounts;
}
  onNavigate(rootPage: string) {
    this.loadedRoot = rootPage;
  }

}
