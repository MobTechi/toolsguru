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

  isNotFutureDate(day: number, month: number, year: number): boolean {
    const currentDate = new Date();
    const givenDate = new Date(year, month - 1, day); // Months are 0-based (0 = January)
    return !isNaN(givenDate.getTime()) && givenDate <= currentDate;
  }

  getDateMonthYear(date?: Date) {
    if (!date) {
      date = new Date();
    }
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based (0 = January)
    const day = date.getDate().toString().padStart(2, '0')
    return { day, month, year };
  }

  calculateAge(dobDate: Date): { years: number; months: number; days: number; totalDays: number } {
    const currentDate = new Date();
    const dobYear = dobDate.getFullYear();
    const dobMonth = dobDate.getMonth();
    const dobDay = dobDate.getDate();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    let years: number = currentYear - dobYear;
    let months: number = currentMonth - dobMonth;
    let days: number = currentDay - dobDay;

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    if (days < 0) {
      const lastDayOfMonth = new Date(currentYear, currentMonth, 0).getDate();
      days += lastDayOfMonth;
      months--;
    }
    const totalDays: number = Math.floor((currentDate.getTime() - dobDate.getTime()) / (24 * 60 * 60 * 1000));
    return {
      years,
      months,
      days,
      totalDays
    };
  }
}
