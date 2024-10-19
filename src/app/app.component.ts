import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'drybulb_nb';
  opened = false;
  eventMessage:boolean = true;

  // Method to toggle the sidenav based on the event from header
  toggleSidenav(opened: boolean) {
    this.opened = opened;
    console.log('Sidenav toggled from header:', this.opened);
  }

  onOpenedChange(opened: boolean) {
    this.opened = opened;  // Update the opened state based on the sidenav event
    this.eventMessage = opened;  // Update eventMessage based on the opened state
 }
}
