import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tools',
    pathMatch: 'full'
  },
  {
    path: 'tools',
    loadChildren: () => import('./tools-list/tools-list.module').then( m => m.ToolsListPageModule)
  },
  {
    path: 'tool',
    loadChildren: () => import('./tools-preview/tools-preview.module').then( m => m.ToolsPreviewPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
