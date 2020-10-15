import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.scss']
})
export class AdvertisingComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
