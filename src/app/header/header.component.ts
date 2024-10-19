import { Component,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  opened = false;
  @Output() openedChange = new EventEmitter<boolean>();
  

  onMenuClick() {
    console.log('Menu clicked');
    // Handle menu click, for example, toggle a side navigation bar
  }

  onProfileClick() {
    console.log('Profile clicked');
    // Handle profile click, for example, open a dropdown menu or navigate to a profile page
  }

  toggleOpened() {
    this.opened = !this.opened;
    this.openedChange.emit(this.opened);
    console.log('from header', this.opened)
  }


}
