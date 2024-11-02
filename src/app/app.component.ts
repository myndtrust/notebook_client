import { Component } from '@angular/core';
import { AuthService } from './auth.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'drybulb_nb';
  opened = false;
  eventMessage:boolean = true;


  constructor(public auth: AuthService) {}

  // Method to toggle the sidenav based on the event from header
  toggleSidenav(opened: boolean) {
    this.opened = opened;
    // console.log('Sidenav toggled from header:', this.opened);
  }

  onOpenedChange(opened: boolean) {
    this.opened = opened;  // Update the opened state based on the sidenav event
    this.eventMessage = opened;  // Update eventMessage based on the opened state
  }

  login() {
    // this.auth.loginWithRedirect();
    const token = this.auth.getToken();
    console.log('Token:', token);
  }

  // logout(): void {
  //   this.auth.logout({ logoutParams: { returnTo: 'https://storage.googleapis.com/drybulb_landing/thanks.html' } });
  // }

}
