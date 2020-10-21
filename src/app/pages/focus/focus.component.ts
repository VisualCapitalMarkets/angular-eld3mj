import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface Content {
  title: SafeHtml,
  text: SafeHtml
}

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.scss']
})
export class FocusComponent implements OnInit {
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
    // this.content.title = this._sanitizer.bypassSecurityTrustHtml(this.data?.content?.title);
    // this.content.text = this._sanitizer.bypassSecurityTrustHtml(this.data?.content?.text);
  }

}
