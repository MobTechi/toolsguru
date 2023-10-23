import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateAndTimeService {
 public  currentTime : any
  constructor() {
     this.currentTime = new Date();
   }

   public getSeconds() {
    const seconds = this.currentTime.getSeconds();
    return seconds;

  }
  public getMinutes() {
    const mins = this.currentTime.getMinutes();
    return mins;

  }
  public getHours() {
    const hours = this.currentTime.getHours();
    return hours;

  }

}
