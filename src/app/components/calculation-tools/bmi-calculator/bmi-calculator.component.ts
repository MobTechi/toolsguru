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
  healthContext!: { bmi: number, title: string, meter: number, cssClass: string } | null;

  constructor(private calculationService: CalculationService) {}

  get speedText() {
    return this.healthContext?.bmi?.toString().split('.')[0] || '0';
  }

  calculateBMI() {
    if (this.height > 0 && this.weight > 0) {
      this.healthContext = this.calculationService.getBMIHealthRange(this.weight, this.height);
    } else {
      this.healthContext = null;
    }
  }
}