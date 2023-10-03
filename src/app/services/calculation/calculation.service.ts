import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor() { }

  evalExpression(expression) {
    const cleanedExpression = expression.replace(/,/g, '.');
    return parseFloat(eval(cleanedExpression).toFixed(2));
  }

  getBMIValue(weight: number, height: number): number {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  }

  getBMIHealthRange(bmi: number): string {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal Weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }

  calculateAge(dobDate: Date): { years: number; months: number; days: number; totalDays: number } {
    const currentDate = new Date();
    const ageInMilliseconds = currentDate.getTime() - dobDate.getTime();
    const remainingMilliseconds = ageInMilliseconds % (365 * 24 * 60 * 60 * 1000);
    const years = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
    const months = Math.floor(remainingMilliseconds / (30 * 24 * 60 * 60 * 1000));
    const days = Math.floor(remainingMilliseconds / (24 * 60 * 60 * 1000));
    const totalDays = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));
    return {
      years,
      months,
      days,
      totalDays
    };
  }
}
