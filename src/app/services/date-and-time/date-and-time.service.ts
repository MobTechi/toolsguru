import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateAndTimeService {

  constructor() { }

  public getSeconds(): number {
    return new Date().getSeconds();
  }

  public getMinutes(): number {
    return new Date().getMinutes();
  }

  public getHours(): number {
    return new Date().getHours();
  }

  public getAmPm(): string {
    return new Date().getHours() >= 12 ? 'PM' : 'AM';
  }

  public getCurrentdateIndex(): number {
    return (new Date().getDay() + 6) % 7;
  }

  public getDaysOfWeek(): string[] {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  }

  public getCalculateDegrees(): { seconds: number; minutes: number; hours: number; } {
    const seconds = this.getSeconds();
    const minutes = this.getMinutes();
    const hours = this.getHours();

    return {
      seconds: ((seconds / 60) * 360) + 90,
      minutes: ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90,
      hours: ((hours / 12) * 360) + ((minutes / 60) * 30) + 90,
    };
  }
}
