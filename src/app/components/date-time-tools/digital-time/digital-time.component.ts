import { Component, AfterViewInit } from '@angular/core';
import { DateAndTimeService } from 'src/app/services/date-and-time.service';


@Component({
  selector: 'app-digital-time',
  templateUrl: './digital-time.component.html',
  styleUrls: ['./digital-time.component.scss'],
})
export class DigitalTimeComponent implements AfterViewInit {

  public currentTime: Date = new Date();
  public amPm: any;
  public daysOfWeek: string[];
  public currentDayIndex: any;
  public getInterval: any;

  constructor(private dataAndTimeService: DateAndTimeService) {
    this.daysOfWeek = this.dataAndTimeService.getDaysOfWeek();
  }

  ngAfterViewInit() {
    this.updateTime();
    this.getInterval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.getInterval);
  }

  updateTime() {
    this.currentTime = new Date();
    this.amPm = this.dataAndTimeService.getAmPm();
    this.currentDayIndex = this.dataAndTimeService.getCurrentdateIndex();
  }
}
