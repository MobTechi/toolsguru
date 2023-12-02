import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolsPreviewPage } from './tools-preview.page';
import { AnalogTimeComponent } from '../../components/date-time-tools/analog-time/analog-time.component';
import { DigitalTimeComponent } from '../../components/date-time-tools/digital-time/digital-time.component';
import { StopWatchComponent } from '../../components/date-time-tools/stop-watch/stop-watch.component';
import { CalenderComponent } from '../../components/date-time-tools/calender/calender.component';
import { CalculatorComponent } from '../../components/calculation/calculator/calculator.component';
import { BmiCalculatorComponent } from '../../components/calculation/bmi-calculator/bmi-calculator.component';
import { AgeCalculatorComponent } from '../../components/calculation/age-calculator/age-calculator.component';
import { DiscountCalculatorComponent } from '../../components/calculation/discount-calculator/discount-calculator.component';
import { InterestCalculatorComponent } from '../../components/calculation/interest-calculator/interest-calculator.component';
import { FuelCalculatorComponent } from '../../components/calculation/fuel-calculator/fuel-calculator.component';

const routes: Routes = [
  {
    path: '',
    component: ToolsPreviewPage,
    children: [
      {
        path: '',
        redirectTo: 'analog-time',
        pathMatch: 'full'
      },
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolsPreviewPageRoutingModule {}
