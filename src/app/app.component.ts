import { Component } from '@angular/core';
import { CONFIG } from 'src/config/app.config';
import { SIDE_MENUS } from 'src/config/side-menus.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public sideMenus = SIDE_MENUS;

  get appConfig() {
    return CONFIG;
  }

  constructor() { }

  public openMenu(menuId: string) {
  }
}
