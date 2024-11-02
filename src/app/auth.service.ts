import { Injectable } from '@angular/core';
import { AuthService as Auth0Service, User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;  // Variable to store the token
  private userProfile: User | null = null;  // Variable to store user profile

  // Public observable to track authentication status
  public isAuthenticated$: Observable<boolean>;

  constructor(private auth: Auth0Service) {
    // Expose the Auth0 isAuthenticated$ observable
    this.isAuthenticated$ = this.auth.isAuthenticated$;

    // Listen for authentication status changes
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        // Get the access token silently
        this.auth.getAccessTokenSilently().subscribe((token: string | null) => {
          if (token) {
            this.token = token;
            // console.log('Token after logging in:', token);  // Print the token here
          }
        });

        // Subscribe to user$ observable to get user profile
        this.auth.user$.subscribe(user => {
          if (user) {
            this.userProfile = user;
            // console.log('User Profile:', user);  // Print user profile here
          }
        });
      }
    });
  }

  login(): void {
    this.auth.loginWithRedirect();  // Trigger Auth0 login process
  }

  getToken(): string | null {
    return this.token;  // Access the token variable from other parts of your app
  }

  getUserProfile(): User | null {
    return this.userProfile;  // Access the user profile from other parts of your app
  }

  logout(): void {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });  // Trigger Auth0 logout process
  }
}
