import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

export interface Content {
  text1: string,
  text2: string,
  text3: string,
  domain: string,
}

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.scss']
})
export class AdvertisingComponent implements OnInit, AfterViewInit {
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

  ngAfterViewInit(): void {
    document.querySelector('.text1').innerHTML = this.content.text1;
    document.querySelector('.text2').innerHTML = this.content.text2;
    document.querySelector('.text3').innerHTML = this.content.text3;
    document.querySelector('.domain').innerHTML = this.content.domain;
  }
}
