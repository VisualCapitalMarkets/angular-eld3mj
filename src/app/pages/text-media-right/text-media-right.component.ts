import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-media-right',
  templateUrl: './text-media-right.component.html',
  styleUrls: ['./text-media-right.component.scss']
})
export class TextMediaRightComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
