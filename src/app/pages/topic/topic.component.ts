import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

export interface Content {
  title: string,
  text: string
}

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit, AfterViewInit {
  openStatus = 0;
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
    document.querySelector('.description').innerHTML = this.content.text;
  }

  changeStatus(status): void {
    this.openStatus = status;
  }
}
