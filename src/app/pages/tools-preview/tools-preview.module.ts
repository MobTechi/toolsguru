import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolsPreviewPageRoutingModule } from './tools-preview-routing.module';

import { ToolsPreviewPage } from './tools-preview.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolsPreviewPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ToolsPreviewPage]
})
export class ToolsPreviewPageModule {}
