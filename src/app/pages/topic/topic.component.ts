import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  openStatus = 0;
  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(status): void {
    this.openStatus = status;
  }

}
