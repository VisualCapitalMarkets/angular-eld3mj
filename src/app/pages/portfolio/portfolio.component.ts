import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

export interface Content {
  title: string,
  description: string,
  backgroundImage: string
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  @Input() data;
  contents: Content[];

  @ViewChildren('carouselEl') carouselEl: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
    this.contents = this.data?.content;
  }

  ngAfterViewInit(): void {
    console.log('carouselEl: ', this.carouselEl);
    this.contents?.map((content, index) => {
      this.carouselEl.toArray()[index].nativeElement.querySelector('.title').innerHTML = content.title;
      this.carouselEl.toArray()[index].nativeElement.querySelector('.description').innerHTML = content.description;
    });
  }
}
