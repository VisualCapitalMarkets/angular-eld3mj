import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiosqueComponent } from './kiosque.component';

describe('KiosqueComponent', () => {
  let component: KiosqueComponent;
  let fixture: ComponentFixture<KiosqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiosqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiosqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
