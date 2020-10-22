import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

export interface Content {
  title: string,
  text: string,
  rightText: string,
  media: string
}

@Component({
  selector: 'app-sliding-right',
  templateUrl: './sliding-right.component.html',
  styleUrls: ['./sliding-right.component.scss']
})
export class SlidingRightComponent implements OnInit, AfterViewInit {
  rightPanelSlideNumber = 0;
  maxSlideNumber = 1;
  @Input() data;
  content: Content;

  constructor() { }

  ngOnInit(): void {
    this.content = this.data?.content;
  }

  ngAfterViewInit(): void {
    document.querySelector('.title').innerHTML = this.content.title;
    document.querySelector('.text').innerHTML = this.content.text;
    document.querySelector('.media').innerHTML = this.content.media;
  }

  next(): void {
    this.rightPanelSlideNumber++;
    if (this.rightPanelSlideNumber > this.maxSlideNumber) {
      this.rightPanelSlideNumber = 0;
    }
    setTimeout(() => {
      switch(this.rightPanelSlideNumber) {
        case 0: document.querySelector('.media').innerHTML = this.content.media; break;
        case 1: document.querySelector('.rightText').innerHTML = this.content.rightText; break;
      }
    }, 100);
    console.log('next!')
  }

}
