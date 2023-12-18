import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { timeDelay } from 'src/app/utils';
import { CONFIG } from 'src/config/app.config';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  private readonly SPLASH_DATE_KEY = 'splash_date';

  constructor(
    private router: Router,
    private menuController: MenuController,
    private storageService: StorageService
  ) {
    this.menuController.swipeGesture(false);
  }

  get appConfig() {
    return CONFIG;
  }

  async ngOnInit() {
    const lastShownDate = await this.storageService.getItem(this.SPLASH_DATE_KEY);
    if (!lastShownDate || !this.isToday(new Date(lastShownDate))) {
      await timeDelay(2500);
      this.navigateToMainPage();
      this.storageService.setItem(this.SPLASH_DATE_KEY, new Date().toISOString());
    } else {
      await timeDelay(500);
      this.navigateToMainPage();
    }
  }

  private navigateToMainPage() {
    this.menuController.swipeGesture(true);
    this.router.navigate(['/tools']);
  }

  private isToday(date: Date): boolean {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }
}
