import { Component, Input, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

export interface Content {
  title: SafeHtml,
  subTitle: SafeHtml
}

@Component({
  selector: 'app-chiffres',
  templateUrl: './chiffres.component.html',
  styleUrls: ['./chiffres.component.scss']
})
export class ChiffresComponent implements OnInit {
  @Input() data;
  backgroundImage: string;
  content: Content;

  constructor() { }

  ngOnInit(): void {
    this.backgroundImage = this.data?.backgroundImage;
    this.content = this.data?.content;
  }

}
