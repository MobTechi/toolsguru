import { Component } from '@angular/core';
import { CONFIG } from 'src/config/app.config';
import { APP_TOOLS, TOOLS_CATEGORY, ToolModel } from '../constants/tools.constants';
import { ToastService } from '../services/toast.service';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';
import { groupBy } from 'src/app/utils';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.page.html',
  styleUrls: ['./tools-list.page.scss'],
})
export class ToolsListPage {

  public appConfig = CONFIG;
  public favoriteToolIds: Array<string>;
  public favortiesTools: Array<ToolModel>;
  public toolsList: any;
  public appCatagories: Array<string>;
  public appTools: { [category: string]: Array<ToolModel> };
  private readonly FAVORTIE_TOOLS_KEY = 'favorite_tool';

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private toastService: ToastService
  ) {
    this.fetchFavortiesTools();
    this.fetchAppTools();
  }

  public fetchFavortiesTools() {
    this.favoriteToolIds = this.localStorageService.getItem(this.FAVORTIE_TOOLS_KEY) as string[] || [];
    this.favortiesTools = APP_TOOLS.filter((item) => this.favoriteToolIds.includes(item.id));
  }

  public fetchAppTools() {
    this.appCatagories = Object.values(TOOLS_CATEGORY);
    this.appTools = groupBy(APP_TOOLS, 'category');
  }

  public openToolPage(toolId) {
    const toolURL = `/tool/${toolId}`;
    this.router.navigate([toolURL]);
  }

  public addFavorite(tool: ToolModel) {
    const maxFavortiesCount = Math.round(APP_TOOLS.length / 3);
    if (this.favoriteToolIds.length < 3) {
      const isFavorite = this.favortiesTools.includes(tool);
      if (!isFavorite) {
        this.favortiesTools.push(tool);
        this.updateFavoriteTool();
        this.toastService.presentToast(`${tool.title} tool added to your favorites`, true);
      }
    } else {
      this.toastService.presentToast(`Only ${maxFavortiesCount} tools can be added to your favourites`);
    }
  }

  public removeFavorite(tool: ToolModel) {
    const isFavorite = this.favortiesTools.includes(tool);
    if (isFavorite) {
      const existToolIndex = this.favortiesTools.indexOf(tool);
      this.favortiesTools.splice(existToolIndex, 1);
      this.updateFavoriteTool();
      this.toastService.presentToast(`${tool.title} tool removed from your favorites`, false);
    }
  }

  public updateFavoriteTool() {
    this.favoriteToolIds = this.favortiesTools.map((item) => item.id);
    this.localStorageService.setItem(this.FAVORTIE_TOOLS_KEY, this.favoriteToolIds);
  }
}
