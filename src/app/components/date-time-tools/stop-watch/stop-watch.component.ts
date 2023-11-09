import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss'],
})
export class StopWatchComponent {

  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  milliseconds: number = 0;
  laps: Array<string> = [];
  timerRunning: boolean = false;
  timer: any;

  startTimer() {
    this.timerRunning = true;
    this.timer = setInterval(() => {
      this.milliseconds += 10;
      if (this.milliseconds == 1000) {
        this.seconds++;
        this.milliseconds = 0;
      }
      if (this.seconds == 60) {
        this.minutes++;
        this.seconds = 0;
      }
      if (this.minutes == 60) {
        this.hours++;
        this.minutes = 0;
      }
    }, 10);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timerRunning = false;
  }

  resetTimer() {
    this.stopTimer();
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.milliseconds = 0;
    this.laps = [];
  }

  recordLap() {
    const lapTime = `${this.hours}:${this.minutes}:${this.seconds}:${this.milliseconds}`;
    this.laps.push(lapTime);
  }
}
