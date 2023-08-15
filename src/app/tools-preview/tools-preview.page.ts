import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_TOOLS, ToolModel } from '../constants/tools.constants';

@Component({
  selector: 'app-tools-preview',
  templateUrl: './tools-preview.page.html',
  styleUrls: ['./tools-preview.page.scss'],
})
export class ToolsPreviewPage {

  public toolId: string;
  public tool: ToolModel;

  constructor(
    private router: Router,
  ) {
    const routerURl = this.router.url;
    this.toolId = routerURl.split('/').pop();
    this.tool = APP_TOOLS.find((item) => item.id === this.toolId);
  }
}
