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
  
  onNavigate(rootPage: string) {
    this.loadedRoot = rootPage;
  }

}
