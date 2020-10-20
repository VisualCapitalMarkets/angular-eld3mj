import { Component, Input, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

export interface Content {
  title: SafeHtml,
  text1: SafeHtml,
  text2: SafeHtml,
  text3: SafeHtml
}

@Component({
  selector: 'app-sliding-top',
  templateUrl: './sliding-top.component.html',
  styleUrls: ['./sliding-top.component.scss']
})
export class SlidingTopComponent implements OnInit {
  displayTextIndex = 0;
  @Input() data;
  content: Content;

  constructor() { }

  ngOnInit(): void {
    this.content = this.data?.content;
  }

  convertText(ScreenIndex) {
    this.displayTextIndex = ScreenIndex;
    console.log(ScreenIndex);
  }

}
