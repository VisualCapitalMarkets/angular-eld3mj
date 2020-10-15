import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface Content {
  title: SafeHtml,
  text: SafeHtml,
  buttonText: string,
  buttonBgColor: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HomeComponent implements OnInit {
  @Input() data;
  content: Content;

  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    console.log('data: ', this.data);
    this.content = this.data?.content;
    this.content.text = this._sanitizer.bypassSecurityTrustHtml(String(this.content.text));
  }

  stringToHTML(str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body;
  };
}
