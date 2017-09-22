import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Renés Homepage';
  shallBeShown = false;
  toggleHeader(): void {
    this.shallBeShown = !this.shallBeShown;
  }
}