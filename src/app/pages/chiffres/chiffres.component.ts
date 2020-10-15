import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chiffres',
  templateUrl: './chiffres.component.html',
  styleUrls: ['./chiffres.component.scss']
})
export class ChiffresComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
