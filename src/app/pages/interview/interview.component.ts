import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

export interface Content {
  title: string,
  text: string,
  image: string
}

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit, AfterViewInit {
  @Input() data;
  content: Content;

  constructor() { }

  ngOnInit(): void {
    this.content = this.data?.content;
  }

  ngAfterViewInit(): void {
    document.querySelector('.title').innerHTML = this.content.title;
    document.querySelector('.text').innerHTML = this.content.text;
  }
}
