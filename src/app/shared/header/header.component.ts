import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public avatar: string = 'assets/images/empty-profile.jpg';
  public avatarImage: string = `url(${this.avatar})`;
  public isOpen: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((evt: NavigationStart) => {
      if (evt instanceof NavigationStart) {
        this.isOpen = false;
      }
    });
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
