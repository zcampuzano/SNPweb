import { Component } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent {
  loadedRoot = 'login';

  constructor(private accountsService: AccountsService) {}
  
  onAccountUpdate(
    update: {
      id: number,
      username: string,
      password: string,
      firstName: string,
      lastName: string,
      email: string
    }) {
    //this.accounts.[update.id].(id, username, etc...) = update.(id, username, etc...)
  }
  onNavigate(rootPage: string) {
    this.loadedRoot = rootPage;
  }

}
