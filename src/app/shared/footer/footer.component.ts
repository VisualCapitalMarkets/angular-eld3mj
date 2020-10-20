import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  @Input() pages: any;
  cardItems = [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, send do eiusmod em siemprensi' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, send do eiusmod em siemprensi' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, send do eiusmod em siemprensi' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, send do eiusmod em siemprensi' },
  ]

  @Output() onNextIndex: EventEmitter<any> = new EventEmitter()
  @Output() onPrevIndex: EventEmitter<any> = new EventEmitter()
  @Output() onSetPageIndex: EventEmitter<any> = new EventEmitter()

  // @ViewChild('tref') tref: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('pages: ', this.pages);

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
