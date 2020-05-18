import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingRightComponent } from './sliding-right.component';

describe('SlidingRightComponent', () => {
  let component: SlidingRightComponent;
  let fixture: ComponentFixture<SlidingRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
