import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface Content {
  name: SafeHtml,
  title: SafeHtml,
  text: SafeHtml
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() data;
  content: Content;

  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.content = this.data?.content;
    // this.content.name = this._sanitizer.bypassSecurityTrustHtml(this.data?.content?.name);
    // this.content.title = this._sanitizer.bypassSecurityTrustHtml(this.data?.content?.title);
    // this.content.text = this._sanitizer.bypassSecurityTrustHtml(this.data?.content?.text);
  }

}
