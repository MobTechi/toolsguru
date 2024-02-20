import { Component, Input, OnChanges, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { IonRow } from '@ionic/angular';

@Component({
  selector: 'speedometer',
  templateUrl: './speedometer.component.html',
  styleUrls: ['./speedometer.component.scss'],
})
export class SpeedometerComponent implements OnChanges {
  @Input() speed: number = 0;
  @Input() speedText: string = '0';
  @ViewChild('arrow', { static: true }) arrowElementRef!: IonRow;

  constructor(private renderer: Renderer2) {}
  
  ngOnChanges(changes: SimpleChanges) {
    // Set the meter value to rotate the arrow
    if (this.arrowElementRef && this.arrowElementRef['el'] && this.speed !== null && this.speed <= 100) {
      const rotation = (this.speed / 100) * 180;
      this.renderer.setStyle(this.arrowElementRef['el'], 'transform', `rotate(${rotation}deg)`);
    }
  }

}
