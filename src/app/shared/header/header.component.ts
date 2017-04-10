import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public avatar: string = 'assets/images/empty-profile.jpg';
  public avatarImage: string = `url(${this.avatar})`;

  constructor() { }

}
