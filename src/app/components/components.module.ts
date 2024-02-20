import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
// date-time-tools
import { AnalogTimeComponent } from './date-time-tools/analog-time/analog-time.component';
import { DigitalTimeComponent } from './date-time-tools/digital-time/digital-time.component';
import { StopWatchComponent } from './date-time-tools/stop-watch/stop-watch.component';
import { CalenderComponent } from './date-time-tools/calender/calender.component';
// calculation-tools
import { CalculatorComponent } from './calculation-tools/calculator/calculator.component';
import { BmiCalculatorComponent } from './calculation-tools/bmi-calculator/bmi-calculator.component';
import { AgeCalculatorComponent } from './calculation-tools/age-calculator/age-calculator.component';
import { DiscountCalculatorComponent } from './calculation-tools/discount-calculator/discount-calculator.component';
import { InterestCalculatorComponent } from './calculation-tools/interest-calculator/interest-calculator.component';
import { FuelCalculatorComponent } from './calculation-tools/fuel-calculator/fuel-calculator.component';
import { DirectivesModule } from '../directive/directives.module';
// UI components
import { AddNoteComponent } from './UI/add-note/add-note.component';
import { SpeedometerComponent } from './UI/speedometer/speedometer.component';

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

const UI_COMPONENTS = [
  AddNoteComponent,
  SpeedometerComponent
];

export const ROUTES =  [
  {
    path: 'analog-time',
    component: AnalogTimeComponent
  },
  {
    path: 'digital-time',
    component: DigitalTimeComponent
  },
  {
    path: 'stop-watch',
    component: StopWatchComponent
  },
  {
    path: 'calendar',
    component: CalenderComponent
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: 'bmi-calculator',
    component: BmiCalculatorComponent
  },
  {
    path: 'age-calculator',
    component: AgeCalculatorComponent
  },
  {
    path: 'discount-calculator',
    component: DiscountCalculatorComponent
  },
  {
    path: 'interest-calculator',
    component: InterestCalculatorComponent
  },
  {
    path: 'fuel-calculator',
    component: FuelCalculatorComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectivesModule
  ],
  declarations: [DATE_TIME_TOOLS, CALCULATION_TOOLS, UI_COMPONENTS]
})
export class ComponentsModule {}
