import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
})
export class NavMenuComponent {
  isExpanded = false;
  public urlImage: string = "https://cdn.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769__340.jpg"

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
