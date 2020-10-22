import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export interface Content {
  title: string,
  text: string,
  buttonText: string,
  buttonBgColor: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HomeComponent implements OnInit, AfterViewInit {
  @Input() data;
  backgroundImage: string;
  content: Content;

  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    console.log('data: ', this.data);
    this.backgroundImage = this.data?.backgroundImage;
    this.content = this.data?.content;
  }

  ngAfterViewInit(): void {
    document.querySelector('.text').innerHTML = this.content.text;
    // this.content.text = this._sanitizer.bypassSecurityTrustHtml(String(this.content.text));
  }

  stringToHTML(str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body;
  };
}
