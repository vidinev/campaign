import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent {

  public get visible(): boolean {
    return this.router.isActive('/campaign', false);
  }

  constructor(public router: Router) { }

}
