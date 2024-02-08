import { Component } from '@angular/core';
import { CalculationService } from 'src/app/services/calculation/calculation.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {

  calculation = '';
  keyboardFocus = false;
  isInfinity = false
  calculationError = '';
  calculationHistory: string[] = [];

  numericButtons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-'];

  constructor(
    private calculationService: CalculationService,
    private storageService: StorageService
    ) {
    this.loadHistory();
  }

  // Function to append a numeric value or operator to the calculation field.
  appendToCalculation(value: string) {
    if (this.isInfinity) {
      this.calculation = value;
      this.isInfinity = false;
    } else {
      this.calculation += value;
    }
  }

  // Function to clear the calculation field.
  clear() {
    if (this.calculation.length) {
      this.calculation = this.calculation.slice(0, -1);
    }
  }

  // Function to clear the calculation field.
  allClear() {
    this.calculation = '';
  }

  // Function to evaluate the calculation and store the result in the calculation history.
  async calculate() {
    try {
      const result = this.calculationService.evalExpression(this.calculation);
      if (result !== undefined) {
        this.calculationHistory.push(`${this.calculation} = ${result}`);
        this.calculation = result.toString();
        this.isInfinity = this.calculation.includes('Infinity');
        this.calculationError = '';
        await this.saveHistory();
      } else {
        this.calculationError = 'Invalid calculation';
      }
    } catch (error) {
      this.calculationError = error as string;
      // eslint-disable-next-line
      console.error('Calculation error:', error);
    }
  }

  // Function to save the calculation history to Ionic Storage.
  async saveHistory() {
    await this.storageService.setItem('calculationHistory', this.calculationHistory);
  }

  // Function to load the calculation history from Ionic Storage.
  async loadHistory() {
    const history = await this.storageService.getItem('calculationHistory');
    if (history && history.length) {
      this.calculationHistory = history;
    }
  }

  clearHistory() {
    this.calculationHistory = [];
    this.saveHistory();
  }
}
