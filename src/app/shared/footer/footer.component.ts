import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  @Input() pages: any;
  title: string;
  cardItems = [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, send do eiusmod em siemprensi' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, send do eiusmod em siemprensi' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, send do eiusmod em siemprensi' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, send do eiusmod em siemprensi' },
  ]

  @Output() onNextIndex: EventEmitter<any> = new EventEmitter()
  @Output() onPrevIndex: EventEmitter<any> = new EventEmitter()
  @Output() onSetPageIndex: EventEmitter<any> = new EventEmitter()
  kiosqueImage: string;
  // @ViewChild('tref') tref: ElementRef;

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    console.log('pages: ', this.pages);
    this.kiosqueImage = environment.host + '/tempImages/kiosque.png'
    this.http.get("assets/json/info.json").subscribe(
      (info: any) => {
        this.title = info.title;
        console.log('title: ', this.title);
      }, (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  ngAfterViewInit(): void {
  }

  openDropdown(): void {
    console.log('openDropdown');
  }

  closeDropdown(): void {
    console.log('closeDropdown');
    // let close = this.tref.nativeElement['classList'];
    // close();
    // console.log($('#navbarToggleExternalContent')[0]);
    // console.log(close);
  }

  nextIndex() {
    this.onNextIndex.emit();
  }

  prevIndex() {
    this.onPrevIndex.emit();
  }

  gotoPage(i) {
    this.onSetPageIndex.emit(i);
    this.closeDropdown();
  }
}
