import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface Content {
  name: string,
  title: string,
  text: string
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, AfterViewInit {
  @Input() data;
  content: Content;

  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.content = this.data?.content;
    console.log('content: ', this.content);
  }

  ngAfterViewInit(): void {
    document.querySelector('.name').innerHTML = this.content.name;
    document.querySelector('.title').innerHTML = this.content.title;
    document.querySelector('.text').innerHTML = this.content.text;
  }
}
