import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolsListPageRoutingModule } from './tools-list-routing.module';

import { ToolsListPage } from './tools-list.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolsListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ToolsListPage]
})
export class ToolsListPageModule {}
