import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedRoot = 'login';

  onNavigate(rootPage: string) {
    this.loadedRoot = rootPage;
  }

}
