import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface Content {
  name: string,
  title: string,
  text: string,
  media: string
}

@Component({
  selector: 'app-text-media-right',
  templateUrl: './text-media-right.component.html',
  styleUrls: ['./text-media-right.component.scss']
})
export class TextMediaRightComponent implements OnInit, AfterViewInit {
  @Input() data;
  content: Content;

  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.content = this.data?.content;
  }

  ngAfterViewInit(): void {
    document.querySelector('.name').innerHTML = this.content.name;
    document.querySelector('.title').innerHTML = this.content.title;
    document.querySelector('.text').innerHTML = this.content.text;
    document.querySelector('.media').innerHTML = this.content.media;
  }
}
