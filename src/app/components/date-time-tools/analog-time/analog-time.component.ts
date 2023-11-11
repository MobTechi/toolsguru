import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { DateAndTimeService } from 'src/app/services/date-and-time.service';

@Component({
  selector: 'app-analog-time',
  templateUrl: './analog-time.component.html',
  styleUrls: ['./analog-time.component.scss'],
})
export class AnalogTimeComponent implements AfterViewInit, OnDestroy {

  private timeInterval: any;
  @ViewChild('secondHand', { static: false }) secondHand!: ElementRef<any>;
  @ViewChild('minHand', { static: false }) minsHand!: ElementRef<any>;
  @ViewChild('hourHand', { static: false }) hourHand!: ElementRef<any>;

  constructor(private dataAndTimeService: DateAndTimeService) { }

  ngAfterViewInit() {
    this.updateAnalogTime();
    this.timeInterval = setInterval(() => {
      this.updateAnalogTime();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  updateAnalogTime() {
    const degrees = this.dataAndTimeService.getCalculateDegrees();
    if (this.secondHand && this.minsHand && this.hourHand) {
      this.secondHand['el'].style.transform = `rotate(${degrees.seconds}deg)`;
      this.minsHand['el'].style.transform = `rotate(${degrees.minutes}deg)`;
      this.hourHand['el'].style.transform = `rotate(${degrees.hours}deg)`;
    }
  }
}
