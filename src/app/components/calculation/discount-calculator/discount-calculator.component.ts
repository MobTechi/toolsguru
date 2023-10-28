import { Component } from '@angular/core';

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

  constructor() { }

  public calculateDiscount() {
    if (this.originalPrice && this.discountPercent) {
      this.savedAmount = (this.originalPrice * this.discountPercent) / 100;
      this.discountedPrice = this.formatPrice(this.originalPrice - this.savedAmount);
      this.savedAmount = this.formatPrice(this.savedAmount);
    }
  }

  formatPrice(price: number) {
    // Removes trailing zeros and decimals
    return Number(price.toFixed(2).replace(/(\.0*|0*)$/, ''));
  }
}
