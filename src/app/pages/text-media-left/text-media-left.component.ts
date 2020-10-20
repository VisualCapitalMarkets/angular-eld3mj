import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import DOMPurify from 'dompurify';
import { SharedService } from 'src/app/core/services/shared.service';

export interface Content {
  name: SafeHtml,
  title: SafeHtml,
  text: SafeHtml,
  media: SafeHtml
}

@Component({
  selector: 'app-text-media-left',
  templateUrl: './text-media-left.component.html',
  styleUrls: ['./text-media-left.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextMediaLeftComponent implements OnInit {
  @Input() data;
  content: Content;

  constructor(
    private _sanitizer: DomSanitizer,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.content = this.data?.content;
    // this.content.name = this.sharedService.formatHTML(this.data?.content?.name);
    console.log('content: ', this.content);
    console.log('dom: ', DOMPurify.sanitize("<p><span style=\"color:hsl(0,75%,60%);\">LOREM&nbsp;IPSUM</span></p>"));

    // this.content.name = DOMPurify.sanitize("<p><span style=\"color:hsl(0,75%,60%);\">LOREM&nbsp;IPSUM</span></p>");
    // this.content.name = this._sanitizer.bypassSecurityTrustHtml(DOMPurify.sanitize(this.data?.content?.name));
    // this.content.name = "<span class='redfe' style='color:red;'>1234</span>";
    // this.content.name = this.sharedService.formatHTML("<p><span style=\"color:hsl(0,75%,60%);\">LOREM&nbsp;IPSUM</span></p>");
    // this.content.name = this._sanitizer.bypassSecurityTrustHtml(this.data?.content?.name)
    // this.content.title = this._sanitizer.bypassSecurityTrustHtml(this.data?.content?.title)
    // this.content.text = this._sanitizer.bypassSecurityTrustHtml(this.data?.content?.text)
    // this.content.media = this._sanitizer.bypassSecurityTrustHtml(this.data?.content?.media)
  }

}
