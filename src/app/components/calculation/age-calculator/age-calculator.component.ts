import { Component } from '@angular/core';
import { CalculationService } from 'src/app/services/calculation/calculation.service';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.scss'],
})
export class AgeCalculatorComponent {

  isOpen = false;
  dob!: string;
  age!: {
    years: number;
    months: number;
    days: number;
    totalDays: number;
  };

  constructor(private calculationService: CalculationService) { }

  getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }

  async openDatePicker() {
    this.isOpen = true;
  }

  onWillDismiss($event) {
    this.isOpen = false;
  }

  calculateAge(event) {
    const newDate = event.detail.value;
    if (newDate && newDate !== this) {
      const dobDate = new Date(newDate);
      this.age = this.calculationService.calculateAge(dobDate);
      this.dob = `${this.age.days}/${this.age.months}/${this.age.years}`;
    }
  }
}
