import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
