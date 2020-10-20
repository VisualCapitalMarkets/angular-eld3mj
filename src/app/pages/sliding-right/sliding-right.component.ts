import { Component, Input, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

export interface Content {
  title: SafeHtml,
  text: SafeHtml,
  rightText: SafeHtml,
  media: SafeHtml
}

@Component({
  selector: 'app-sliding-right',
  templateUrl: './sliding-right.component.html',
  styleUrls: ['./sliding-right.component.scss']
})
export class SlidingRightComponent implements OnInit {
  rightPanelSlideNumber = 0;
  maxSlideNumber = 1;
  @Input() data;
  content: Content;

  constructor() { }

  ngOnInit(): void {
    this.content = this.data?.content;
  }

  next(): void {
    this.rightPanelSlideNumber++;
    if (this.rightPanelSlideNumber > this.maxSlideNumber) {
      this.rightPanelSlideNumber = 0;
    }
    console.log('next!')
  }

}
