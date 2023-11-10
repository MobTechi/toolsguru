import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateAndTimeService {
  constructor() {
  }

  public getSeconds() {
    return new Date().getSeconds();
  }
  public getMinutes() {
    return new Date().getMinutes();
  }
  public getHours() {
    return new Date().getHours();

  }
  public getAmPm() {
    return new Date().getHours() >= 12 ? 'PM' : 'AM';
  }
  public getCurrentdateIndex() {
    return (new Date().getDay() + 6) % 7;
  }
  public getDaysOfWeek() {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  }

  getCalculateDegrees(seconds: number, minutes: number, hours: number): any {
    return {
      seconds: ((seconds / 60) * 360) + 90,
      minutes: ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90,
      hours: ((hours / 12) * 360) + ((minutes / 60) * 30) + 90,
    };
  }

}
