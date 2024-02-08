import { Component } from '@angular/core';
import { CONFIG } from 'src/config/app.config';
import { MENUS, SIDE_MENUS } from 'src/config/side-menus.config';
import { Browser } from '@capacitor/browser';

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
    switch (menuId as MENUS) {
      case MENUS.MORE_APPS:
        this.moreApps();
        break;
      case MENUS.RATE_US:
        this.appRate();
        break;
      case MENUS.POLICY:
        this.showPolicy();
        break;
    }
  }

  private moreApps() {
    const moreAppsUrl = 'https://mobtechi.com/apps';
    Browser.open({ url: moreAppsUrl });
  }

  private appRate() {
    const playStoreUrl = `https://play.google.com/store/apps/details?id=${this.appConfig.appId}`;
    Browser.open({ url: playStoreUrl });
  }

  private showPolicy() {
    const policyUrl = 'https://mobtechi.com/toolsguru/privacy-policy';
    Browser.open({ url: policyUrl });
  }
}
