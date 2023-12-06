import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastService } from './services/toast.service';
import { StorageService } from './services/storage.service';
import { IonicStorageModule } from '@ionic/storage-angular';
import { ModalService } from './services/modal.service';

const PROVIDERS = [
  ModalService,
  StorageService,
  ToastService
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot(), IonicStorageModule.forRoot()],
  providers: [PROVIDERS, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
