import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface Content {
  title: string,
  text: string,
  image: string,
  imageIndex: number
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, AfterViewInit {
  @Input() data;
  content: Content[];
  @ViewChildren('articles') articlesElement: QueryList<ElementRef>;

  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.content = this.data?.content;
    console.log('content: ', this.content);
  }

  ngAfterViewInit(): void {
    this.content?.map((article, index) => {
      let image = this.articlesElement.toArray()[index].nativeElement.querySelector('img');
      if (article.imageIndex > 0) {
        this.setImagePosition(image, article.imageIndex);
      }
      this.articlesElement.toArray()[index].nativeElement.querySelector('.title').innerHTML = article.title;
      this.articlesElement.toArray()[index].nativeElement.querySelector('.description').innerHTML = article.text;
    });
  }

  setImagePosition(elem_choice, times) {
    var span = elem_choice.parentNode,
    td = span.parentNode;
    let i = times;
    while(i > 0) {
      if (span.nextElementSibling) {
        td.insertBefore(span, span.nextElementSibling.nextElementSibling)
      }
      i--;
    }
  }
}
