import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

export interface Content {
  authorImg: string,
  name: SafeHtml,
  title: SafeHtml,
  text: SafeHtml,
  mediaText: SafeHtml
}

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {
  @Input() data;
  picTop: string;
  picBottom: string;
  content: Content;

  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.picTop = environment.host + '/tempImages/templates/Pictop.png';
    this.picBottom = environment.host + '/tempImages/templates/sommaire2.png';
    this.content = this.data?.content;
    // this.content.name = this._sanitizer.bypassSecurityTrustHtml(this.data?.content?.name);
    // this.content.title = this._sanitizer.bypassSecurityTrustHtml(this.data?.content?.title);
    // this.content.text = this._sanitizer.bypassSecurityTrustHtml(this.data?.content?.text);
    // this.content.mediaText = this._sanitizer.bypassSecurityTrustHtml(this.data?.content?.mediaText);

    // document.querySelector('.name').innerHTML = this.content?.name;
    // document.querySelector('.title').innerHTML = this.content?.title;
    // document.querySelector('.description').innerHTML = this.content?.text;
    // document.querySelector('.textArea').innerHTML = this.content?.mediaText;
  }

}
