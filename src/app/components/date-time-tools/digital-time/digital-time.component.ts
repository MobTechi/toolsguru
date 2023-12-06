import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { DateAndTimeService } from 'src/app/services/date-and-time/date-and-time.service';

@Component({
  selector: 'app-digital-time',
  templateUrl: './digital-time.component.html',
  styleUrls: ['./digital-time.component.scss'],
})
export class DigitalTimeComponent implements AfterViewInit, OnDestroy {

  public amPm: any;
  public currentTime: Date;
  public daysOfWeek: string[];
  public currentDayIndex: any;
  private timeInterval: any;

  constructor(private dataAndTimeService: DateAndTimeService) {
    this.currentTime = new Date()
    this.daysOfWeek = this.dataAndTimeService.getDaysOfWeek();
  }

  ngAfterViewInit() {
    this.updateTime();
    this.timeInterval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  updateTime() {
    this.currentTime = new Date();
    this.amPm = this.dataAndTimeService.getAmPm();
    this.currentDayIndex = this.dataAndTimeService.getCurrentdateIndex();
  }
}
