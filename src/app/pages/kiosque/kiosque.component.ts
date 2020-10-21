import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kiosque',
  templateUrl: './kiosque.component.html',
  styleUrls: ['./kiosque.component.scss']
})
export class KiosqueComponent implements OnInit {
  @Input() data;
  info: any;
  collections: any;
  otherCollections: any;

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.http.get("assets/json/info.json").subscribe(
      info => {
        this.info = info;
        console.log('info http: ', info)
        this.otherCollections = this.info?.collections?.filter((collection, index) => index > 0);
        console.log('other collections: ', this.otherCollections);
        this.cdr.detectChanges();
      }, (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
  }

  gotoCollection(index) {
    this.router.navigate(['/collection', index])
  }
}
