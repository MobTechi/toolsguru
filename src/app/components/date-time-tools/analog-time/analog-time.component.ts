import { Component, OnInit } from '@angular/core';
import { DateAndTimeService } from 'src/app/services/date-and-time.service';

@Component({
  selector: 'app-analog-time',
  templateUrl: './analog-time.component.html',
  styleUrls: ['./analog-time.component.scss'],
})
export class AnalogTimeComponent implements OnInit {
  public currentTime: any
  
  constructor(private dataAndTimeService: DateAndTimeService) { }

  ngOnInit() {
    this.updateClockHands();

  }

  updateClockHands() {
    const secondHand = document.querySelector('.second-hand') as HTMLElement;
    const minsHand = document.querySelector('.min-hand') as HTMLElement;
    const hourHand = document.querySelector('.hour-hand') as HTMLElement;

    setInterval(() => {
      const currentTime = new Date();
      const seconds = currentTime.getSeconds();

      const secondsDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

      const mins = this.dataAndTimeService.getMinutes();
      const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
      minsHand.style.transform = `rotate(${minsDegrees}deg)`;

      const hour = this.dataAndTimeService.getHours();
      const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }, 1000); // Update every second
  }


}
