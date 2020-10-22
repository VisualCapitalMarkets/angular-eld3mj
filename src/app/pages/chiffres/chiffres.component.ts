import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

export interface Content {
  title: string,
  subTitle: string
}

@Component({
  selector: 'app-chiffres',
  templateUrl: './chiffres.component.html',
  styleUrls: ['./chiffres.component.scss']
})
export class ChiffresComponent implements OnInit, AfterViewInit {
  @Input() data;
  backgroundImage: string;
  content: Content;

  constructor() { }

  ngOnInit(): void {
    this.backgroundImage = this.data?.backgroundImage;
    this.content = this.data?.content;
  }

  ngAfterViewInit(): void {
    document.querySelector('.title').innerHTML = this.content.title;
    document.querySelector('.title2').innerHTML = this.content.subTitle;
  }
}
