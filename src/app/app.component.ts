import { Component } from '@angular/core';
import { CONFIG } from 'src/config/app.config';
import { SIDE_MENUS } from 'src/config/side-menus.config';
import { Browser } from '@capacitor/browser';
import config from 'capacitor.config';

enum MENUS {
  RATE_US = 'rate-us'
};

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
    if (menuId === MENUS.RATE_US) {
      this.appRate()
    }
  }

  private appRate() {
    const playStoreUrl = `https://play.google.com/store/apps/details?id=${config.appId}`;
    Browser.open({ url: playStoreUrl });
  }
}
