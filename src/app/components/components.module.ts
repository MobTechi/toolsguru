import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AnalogTimeComponent } from './date-time-tools/analog-time/analog-time.component';
import { DigitalTimeComponent } from './date-time-tools/digital-time/digital-time.component';
import { StopWatchComponent } from './date-time-tools/stop-watch/stop-watch.component';
import { CalenderComponent } from './date-time-tools/calender/calender.component';
import { CalculatorComponent } from './calculation/calculator/calculator.component';
import { BmiCalculatorComponent } from './calculation/bmi-calculator/bmi-calculator.component';
import { AgeCalculatorComponent } from './calculation/age-calculator/age-calculator.component';
import { DiscountCalculatorComponent } from './calculation/discount-calculator/discount-calculator.component';
import { InterestCalculatorComponent } from './calculation/interest-calculator/interest-calculator.component';
import { FuelCalculatorComponent } from './calculation/fuel-calculator/fuel-calculator.component';
import { DirectivesModule } from '../directive/directives.module';

const DATE_TIME_TOOLS = [
  AnalogTimeComponent,
  DigitalTimeComponent,
  StopWatchComponent,
  CalenderComponent
];

const CALCULATION_TOOLS = [
  CalculatorComponent,
  BmiCalculatorComponent,
  AgeCalculatorComponent,
  DiscountCalculatorComponent,
  InterestCalculatorComponent,
  FuelCalculatorComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectivesModule
  ],
  declarations: [DATE_TIME_TOOLS, CALCULATION_TOOLS]
})
export class ComponentsModule {}
