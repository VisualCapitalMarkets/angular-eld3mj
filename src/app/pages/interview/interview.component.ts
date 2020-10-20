import { Component, Input, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

export interface Content {
  title: SafeHtml,
  text: SafeHtml,
  image: string
}

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {
  @Input() data;
  content: Content;

  constructor() { }

  ngOnInit(): void {
    this.content = this.data?.content;
  }

}
