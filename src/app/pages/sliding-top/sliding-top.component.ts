import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliding-top',
  templateUrl: './sliding-top.component.html',
  styleUrls: ['./sliding-top.component.scss']
})
export class SlidingTopComponent implements OnInit {
  displayTextIndex = 0;
  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

  convertText(ScreenIndex) {
    this.displayTextIndex = ScreenIndex;
    console.log(ScreenIndex);
  }

}
