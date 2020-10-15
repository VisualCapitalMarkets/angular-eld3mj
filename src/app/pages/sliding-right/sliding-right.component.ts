import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliding-right',
  templateUrl: './sliding-right.component.html',
  styleUrls: ['./sliding-right.component.scss']
})
export class SlidingRightComponent implements OnInit {
  rightPanelSlideNumber = 0;
  maxSlideNumber = 1;
  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

  next(): void {
    this.rightPanelSlideNumber++;
    if (this.rightPanelSlideNumber > this.maxSlideNumber) {
      this.rightPanelSlideNumber = 0;
    }
    console.log('next!')
  }

}
