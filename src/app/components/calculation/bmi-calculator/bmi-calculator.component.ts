import { Component } from '@angular/core';
import { CalculationService } from 'src/app/services/calculation/calculation.service';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.scss'],
})
export class BmiCalculatorComponent {

  height!: number;
  weight!: number;
  bmi: number = 0;
  healthRangeText: string = '';

  constructor(private calculationService: CalculationService) {}

  calculateBMI() {
    if (this.height > 0 && this.weight > 0) {
      this.bmi = this.calculationService.getBMIValue(this.weight, this.height);
      this.healthRangeText = this.calculationService.getBMIHealthRange(this.bmi);
    } else {
      this.bmi = 0;
      this.healthRangeText = '';
    }
  }
}