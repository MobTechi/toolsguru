import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolsPreviewPage } from './tools-preview.page';
import { ROUTES } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: ToolsPreviewPage,
    children: ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolsPreviewPageRoutingModule {}
