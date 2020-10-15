import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import * as pages from '../../assets/data.json';
import { SharedService } from '../core/services/shared.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  pageIndex = 3;
  tempIndex: number;
  pages = Array();
  pageData: any;
  constructor(
    private cdr: ChangeDetectorRef,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.pages = pages['default'];
    console.log('this.pages: ', this.pages);
    this.getTempIndex();
    console.log('temp index: ', this.tempIndex);
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  nextPage(): void {
    if (this.pageIndex < (this.pages?.length - 1) ) {
      ++this.pageIndex;
      console.log('plus index: ', this.pageIndex);
      this.getTempIndex();
    }
  }

  prevPage(): void {
    if (this.pageIndex > 0) {
      --this.pageIndex;
      console.log('plus index: ', this.pageIndex);
      this.getTempIndex();
    }
  }

  getTempIndex() {
    this.tempIndex = Number(this.pages[this.pageIndex].tempIndex);
    this.pageData = this.pages[this.pageIndex];
  }
}
