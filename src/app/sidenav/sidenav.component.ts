import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  isAuthenticated$ = this.authService.isAuthenticated$;
  constructor(private authService: AuthService) {}

  // ngOnInit(): void {}

}
