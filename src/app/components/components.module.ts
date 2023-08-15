import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AnalogTimeComponent } from './date-time-tools/analog-time/analog-time.component';
import { DigitalTimeComponent } from './date-time-tools/digital-time/digital-time.component';
import { StopWatchComponent } from './date-time-tools/stop-watch/stop-watch.component';
import { CalenderComponent } from './date-time-tools/calender/calender.component';

const DATE_TIME_TOOLS = [
    AnalogTimeComponent,
    DigitalTimeComponent,
    StopWatchComponent,
    CalenderComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [DATE_TIME_TOOLS]
})
export class ComponentsModule {}
