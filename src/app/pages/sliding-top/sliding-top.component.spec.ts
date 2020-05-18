import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingTopComponent } from './sliding-top.component';

describe('SlidingTopComponent', () => {
  let component: SlidingTopComponent;
  let fixture: ComponentFixture<SlidingTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
