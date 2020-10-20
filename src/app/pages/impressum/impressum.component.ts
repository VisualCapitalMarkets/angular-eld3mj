import { Component, Input, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit {
  @Input() data;
  logo: string;
  content: SafeHtml;

  constructor() { }

  ngOnInit(): void {
    this.logo = this.data?.logo;
    this.content = this.data?.content;
  }

}
