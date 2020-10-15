import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-media-left',
  templateUrl: './text-media-left.component.html',
  styleUrls: ['./text-media-left.component.scss']
})
export class TextMediaLeftComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
