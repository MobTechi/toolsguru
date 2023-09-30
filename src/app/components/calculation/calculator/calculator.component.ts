import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {

  calculation = '';
  keyboardFocus = false;
  calculationHistory: string[] = [];

  numericButtons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-'];

  constructor(private storageService: StorageService) {
    this.loadHistory();
  }

  // Function to append a numeric value or operator to the calculation field.
  appendToCalculation(value: string) {
    if (!this.keyboardFocus) {
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
  async allClear() {
    this.calculation = '';
  }

  // Function to evaluate the calculation and store the result in the calculation history.
  async calculate() {
    try {
      const result = eval(this.calculation);
      if (result !== undefined) {
        this.calculationHistory.push(`${this.calculation} = ${result}`);
        this.calculation = result.toString();
        await this.saveHistory();
      }
    } catch (error) {
      // Handle calculation errors here
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
