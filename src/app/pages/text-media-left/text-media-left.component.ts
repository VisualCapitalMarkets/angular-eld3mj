import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import DOMPurify from 'dompurify';
import { SharedService } from 'src/app/core/services/shared.service';

export interface Content {
  name: string,
  title: string,
  text: string,
  media: string
}

@Component({
  selector: 'app-text-media-left',
  templateUrl: './text-media-left.component.html',
  styleUrls: ['./text-media-left.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextMediaLeftComponent implements OnInit, AfterViewInit {
  @Input() data;
  content: Content;

  constructor(
    private _sanitizer: DomSanitizer,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.content = this.data?.content;
    console.log('content: ', this.content);
  }

  ngAfterViewInit(): void {
    document.querySelector('.name').innerHTML = this.content.name;
    document.querySelector('.title').innerHTML = this.content.title;
    document.querySelector('.text').innerHTML = this.content.text;
    document.querySelector('.media').innerHTML = this.content.media;
  }
}
