import { Component } from '@angular/core';
import { CalculationService } from 'src/app/services/calculation/calculation.service';

@Component({
  selector: 'app-discount-calculator',
  templateUrl: './discount-calculator.component.html',
  styleUrls: ['./discount-calculator.component.scss'],
})
export class DiscountCalculatorComponent {

  public originalPrice!: number;
  public discountPercent!: number;
  public discountedPrice!: number;
  public savedAmount!: number;

  constructor(private calculationService: CalculationService) { }

  public calculateDiscount() {
    if (this.originalPrice && this.discountPercent) {
      const calculateDiscount = this.calculationService.calculateDiscount(this.originalPrice, this.discountPercent);
      this.discountedPrice = calculateDiscount.discountedPrice;
      this.savedAmount = calculateDiscount.savedAmount;
    }
  }
}
