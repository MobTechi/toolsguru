import { Component } from '@angular/core';
import { CalculationService } from 'src/app/services/calculation/calculation.service';
import { ToastService } from 'src/app/services/toast.service';

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
  } | null;

  constructor(
    private calculationService: CalculationService,
    private toastService: ToastService
  ) { }

  getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }

  openDatePicker() {
    this.isOpen = true;
  }

  onWillDismiss() {
    this.isOpen = false;
  }

  onDateChange() {
    this.dob.length === 10 ? this.calculateAge() : this.age = null;
  }

  onDatePick(event) {
    const selectedDate = event.detail.value;
    if (selectedDate) {
      const date = new Date(selectedDate);
      const dobDate = this.calculationService.getDateMonthYear(date);
      this.dob = `${dobDate.day}-${dobDate.month}-${dobDate.year}`;
      this.calculateAge();
    }
  }

  calculateAge() {
    const dateValues = this.dob.split('-').map((item) => Number(item));
    if (dateValues.length === 3 && this.calculationService.isNotFutureDate(dateValues[0], dateValues[1], dateValues[2])) {
      const dobDate = new Date(dateValues[2], dateValues[1] - 1, dateValues[0]);
      this.age = this.calculationService.calculateAge(dobDate);
    } else {
      this.age = null;
      this.toastService.presentToast('Please double check the DOB')
    }
  }
}
