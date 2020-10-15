import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
