import { Component } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.css']
})
export class ProfileDialogComponent {
  editMode = false;
  profile = {
    username: 'JohnDoe',
    email: 'john.doe@example.com'
  };

  // constructor(public dialogRef: MatDialogRef<ProfileDialogComponent>) {}

  saveProfile() {
    // Logic to save the profile goes here
    this.editMode = false;
    console.log('Profile saved:', this.profile);
  }
}
