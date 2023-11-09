import { Component } from '@angular/core';
import { CalculationService } from 'src/app/services/calculation/calculation.service';

@Component({
  selector: 'app-interest-calculator',
  templateUrl: './interest-calculator.component.html',
  styleUrls: ['./interest-calculator.component.scss'],
})
export class InterestCalculatorComponent {

  principle!: number;
  rate!: number;
  time!: number;
  unit: string;
  result!: {
    simple: number;
    compound: number;
  };

  constructor(private calculationService: CalculationService) {
    this.unit = 'years';
  }

  calculateInterest() {
    const time = this.unit === 'months' ? (this.time / 12) : this.time;
    this.result = {
      simple: this.calculationService.calculateSimpleInterest(this.principle, this.rate, time),
      compound: this.calculationService.calculateCompoundInterest(this.principle, this.rate, time)
    };
  }
}
