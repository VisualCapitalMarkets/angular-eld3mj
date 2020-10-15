import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kiosque',
  templateUrl: './kiosque.component.html',
  styleUrls: ['./kiosque.component.scss']
})
export class KiosqueComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
