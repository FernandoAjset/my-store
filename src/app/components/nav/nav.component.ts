import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  public showMenu: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
