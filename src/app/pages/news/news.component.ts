import { Component, Input, OnInit } from '@angular/core';

export interface Content {
  title: string,
  text: string,
  image: string,
  imageIndex: number
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() data;
  content: Content[];

  constructor() { }

  ngOnInit(): void {
    console.log('content: ', this.content);

    this.content = this.data?.content;
  }

}
