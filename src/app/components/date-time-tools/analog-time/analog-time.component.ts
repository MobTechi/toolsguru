import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { DateAndTimeService } from 'src/app/services/date-and-time.service';

@Component({
  selector: 'app-analog-time',
  templateUrl: './analog-time.component.html',
  styleUrls: ['./analog-time.component.scss'],
})
export class AnalogTimeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('secondHand', { static: false }) secondHand!: ElementRef<any>;
  @ViewChild('minHand', { static: false }) minsHand!: ElementRef<any>;
  @ViewChild('hourHand', { static: false }) hourHand!: ElementRef<any>;
  private getInterval: any;

  constructor(private dataAndTimeService: DateAndTimeService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.updateAnalogTime();
    this.getInterval = setInterval(() => {
      this.updateAnalogTime();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.getInterval);
  }

  updateAnalogTime() {
    const seconds = this.dataAndTimeService.getSeconds();
    const mins = this.dataAndTimeService.getMinutes();
    const hour = this.dataAndTimeService.getHours();
    const degrees = this.dataAndTimeService.getCalculateDegrees(seconds, mins, hour);
    if (this.secondHand && this.minsHand && this.hourHand) {
      this.secondHand['el'].style.transform = `rotate(${degrees.seconds}deg)`;
      this.minsHand['el'].style.transform = `rotate(${degrees.minutes}deg)`;
      this.hourHand['el'].style.transform = `rotate(${degrees.hours}deg)`;
    }
  }
}
