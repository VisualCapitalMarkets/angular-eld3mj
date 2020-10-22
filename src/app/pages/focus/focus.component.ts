import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface Content {
  title: string,
  text: string
}

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.scss']
})
export class FocusComponent implements OnInit, AfterViewInit {
  @Input() data: any;
  backgroundImage: string;
  content: Content;

  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    console.log('id: ', this.data);
    this.backgroundImage = this.data?.backgroundImage;
    this.content = this.data?.content;
  }

  ngAfterViewInit(): void {
    document.querySelector('.title').innerHTML = this.content.title;
    document.querySelector('.scrollText').innerHTML = this.content.text;
  }
}
