import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import * as pages from '../../assets/json/data0.json';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  pageIndex = 13;
  tempIndex: number;
  pages = Array();
  pageData: any;
  constructor(
    private cdr: ChangeDetectorRef,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let id = 0;
    id = this.activatedRoute.snapshot.params["id"];
    this.http.get("assets/json/data" + id + ".json").subscribe(
      (pages: any) => {
        this.pages = pages;
        console.log('this.pages: ', this.pages);
        this.getTempIndex();
        console.log('temp index: ', this.tempIndex);
      }, (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
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

  setPageIndex(i) {
    this.pageIndex = i;
    this.getTempIndex();
  }

  getTempIndex() {
    this.tempIndex = Number(this.pages[this.pageIndex]?.tempIndex);
    this.pageData = this.pages[this.pageIndex];
  }
}
