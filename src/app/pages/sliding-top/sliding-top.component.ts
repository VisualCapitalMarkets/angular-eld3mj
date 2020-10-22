import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

export interface Content {
  title: string,
  text1: string,
  text2: string,
  text3: string
}

@Component({
  selector: 'app-sliding-top',
  templateUrl: './sliding-top.component.html',
  styleUrls: ['./sliding-top.component.scss']
})
export class SlidingTopComponent implements OnInit, AfterViewInit {
  displayTextIndex = 0;
  @Input() data;
  backgroundImage: string;
  content: Content;

  constructor() { }

  ngOnInit(): void {
    this.backgroundImage = this.data?.backgroundImage;
    this.content = this.data?.content;
  }

  ngAfterViewInit(): void {
    document.querySelector('.title').innerHTML = this.content.title;
  }

  convertText(ScreenIndex) {
    console.log(ScreenIndex);
    this.displayTextIndex = ScreenIndex;
    setTimeout(() => {
      switch(this.displayTextIndex) {
        case 1: document.querySelector('.text1').innerHTML = this.content.text1; break;
        case 2: document.querySelector('.text2').innerHTML = this.content.text2; break;
        case 3: document.querySelector('.text3').innerHTML = this.content.text3; break;
      }
    }, 100);
  }

}
