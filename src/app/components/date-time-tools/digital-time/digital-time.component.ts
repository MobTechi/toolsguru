import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-time',
  templateUrl: './digital-time.component.html',
  styleUrls: ['./digital-time.component.scss'],
})
export class DigitalTimeComponent implements OnInit {
  public currentTime: Date = new Date();
  public amPm: any;
  public daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public currentDayIndex: any;

  constructor() {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnInit() {
    this.updateTime();
  }

  // Update the updateTime() function
  updateTime() {
    this.currentTime = new Date();
    this.amPm = this.currentTime.getHours() >= 12 ? 'PM' : 'AM';
    this.currentDayIndex = this.currentTime.getDay() - 1;
    if (this.currentDayIndex === -1) {
      this.currentDayIndex = 6;
    }
  }
}
