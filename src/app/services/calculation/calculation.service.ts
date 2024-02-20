import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor() { }

  // Calculator

  evalExpression(expression) {
    const cleanedExpression = expression.replace(/,/g, '.');
    return parseFloat(eval(cleanedExpression).toFixed(2));
  }

  // BMI Calculator

  getBMIHealthRange(weight: number, height: number) {
    const heightInMeters = height / 100;
    const doubleHeightInMeters = heightInMeters * heightInMeters;
    let bmi = weight / doubleHeightInMeters;
    let meter = Math.round((bmi / 50) * 100);
    let title = '';
    let cssClass = '';
    const bmiValue = Number(bmi.toFixed(1));
    switch (true) {
      case bmiValue < 18.5:
        title = 'Underweight';
        cssClass = 'underweight';
        break;
      case bmiValue >= 18.5 && bmiValue <= 24.9:
        title = 'Normal Weight';
        cssClass = 'normal-weight';
        break;
      case bmiValue >= 25 && bmiValue <= 29.9:
        title = 'Overweight';
        cssClass = 'overweight';
        break;
      case bmiValue >= 30 && bmiValue <= 40:
        title = 'Obese';
        cssClass = 'obese';
        break;
      default:
        title = 'Wrong Input';
        cssClass = 'obese';
        meter = 0;
        bmi = 0;
        break;
    }
    return { bmi, title, cssClass, meter };
  }

  // Age Calculator

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

  // Discount Calculator

  calculateDiscount(originalPrice: number, discountPercent: number) {
    let savedAmount = (originalPrice * discountPercent) / 100;
    const discountedPrice = this.formatPrice(originalPrice - savedAmount);
    savedAmount = this.formatPrice(savedAmount);
    return { discountedPrice, savedAmount };
  }

  private formatPrice(price: number) {
    // Removes trailing zeros and decimals
    return Number(price.toFixed(2).replace(/(\.0*|0*)$/, ''));
  }

  // Interest Calculator

  calculateSimpleInterest(principle: number, rate: number, time: number): number {
    return (principle * rate * time) / 100;
  }

  calculateCompoundInterest(principle: number, rate: number, time: number): number {
    const amount = principle * (Math.pow((1 + rate / 100), time)); 
    return amount - principle; 
  }

  // Fuel Calculator

  calculateFuelCost(totalDistance: number, mileage: number, petrolPrice: number, tankCapacity?: number) {
    const fuelRequired = totalDistance / mileage;
    const refuelCounts = tankCapacity ? Math.ceil(fuelRequired / tankCapacity) : 0;
    const fuelCost = (fuelRequired * petrolPrice);
    return { fuelCost, refuelCounts };
  }
}
