import { Component, Input, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

export interface Content {
  title: SafeHtml,
  description: SafeHtml,
  backgroundImage: string
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @Input() data;
  contents: Content[];

  constructor() { }

  ngOnInit(): void {
    this.contents = this.data?.content;
  }

}
