import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit, AfterViewInit {
  @Input() data;
  logo: string;
  content: string;

  constructor() { }

  ngOnInit(): void {
    this.logo = this.data?.logo;
    this.content = this.data?.content;
  }

  ngAfterViewInit(): void {
    document.querySelector('.contentText').innerHTML = this.content;
  }
}
