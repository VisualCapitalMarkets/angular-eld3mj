import { Component, Input, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

export interface Content {
  text1: SafeHtml,
  text2: SafeHtml,
  text3: SafeHtml,
  domain: SafeHtml,
}

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.scss']
})
export class AdvertisingComponent implements OnInit {
  @Input() data;
  image: string;
  logo: string;
  content: Content;

  constructor() { }

  ngOnInit(): void {
    this.image = this.data?.image;
    this.logo = this.data?.logo;
    this.content = this.data?.content;
  }

}
