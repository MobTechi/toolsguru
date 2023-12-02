import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolsListPage } from './tools-list.page';

const routes: Routes = [
  {
    path: '',
    component: ToolsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolsListPageRoutingModule {}
