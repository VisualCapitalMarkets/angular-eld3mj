import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import DOMPurify from 'dompurify';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  formatHTML(value: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(DOMPurify.sanitize(value));
  }
}
