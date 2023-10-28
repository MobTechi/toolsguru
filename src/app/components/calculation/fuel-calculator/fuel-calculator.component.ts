import { Component } from '@angular/core';
import { CalculationService } from 'src/app/services/calculation/calculation.service';

@Component({
  selector: 'app-fuel-calculator',
  templateUrl: './fuel-calculator.component.html',
  styleUrls: ['./fuel-calculator.component.scss'],
})
export class FuelCalculatorComponent {

  totalDistance!: number;
  mileage!: number;
  petrolPrice!: number;
  tankCapacity!: number;
  fuelCost!: number;
  refuelCounts!: number;

  constructor(private calculationService: CalculationService) { }

  calculateFuelCost() {
    if (this.totalDistance && this.mileage && this.petrolPrice) {
      const fuelCalculation = this.calculationService.calculateFuelCost(this.totalDistance, this.mileage, this.petrolPrice, this.tankCapacity);
      this.fuelCost = fuelCalculation.fuelCost;
      this.refuelCounts = fuelCalculation.refuelCounts;
    }
  }
}
