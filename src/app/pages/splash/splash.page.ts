import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { CONFIG } from 'src/config/app.config';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

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
    const lastShownDate = await this.storageService.getItem('lastSplashScreenShown');
    if (!lastShownDate || !this.isToday(new Date(lastShownDate))) {
      setTimeout(() => {
        this.navigateToMainPage();
        this.storageService.setItem('lastSplashScreenShown', new Date().toISOString());
      }, 2500);
    } else {
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
