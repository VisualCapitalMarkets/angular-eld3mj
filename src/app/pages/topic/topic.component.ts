import { Component, Input, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

export interface Content {
  title: SafeHtml,
  text: SafeHtml
}

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  openStatus = 0;
  @Input() data;
  backgroundImage: string;
  content: Content;

  constructor() { }

  ngOnInit(): void {
    this.backgroundImage = this.data?.backgroundImage;
    this.content = this.data?.content;
  }

  changeStatus(status): void {
    this.openStatus = status;
  }
}
