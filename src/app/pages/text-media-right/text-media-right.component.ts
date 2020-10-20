import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface Content {
  name: SafeHtml,
  title: SafeHtml,
  text: SafeHtml,
  media: SafeHtml
}

@Component({
  selector: 'app-text-media-right',
  templateUrl: './text-media-right.component.html',
  styleUrls: ['./text-media-right.component.scss']
})
export class TextMediaRightComponent implements OnInit {
  @Input() data;
  content: Content;

  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.content = this.data?.content;
    // this.content.name = this._sanitizer.bypassSecurityTrustHtml(this.data?.content?.name)
    // this.content.title = this._sanitizer.bypassSecurityTrustHtml(this.data?.content?.title)
    // this.content.text = this._sanitizer.bypassSecurityTrustHtml(this.data?.content?.text)
    // this.content.media = this._sanitizer.bypassSecurityTrustHtml(this.data?.content?.media)
  }
}
