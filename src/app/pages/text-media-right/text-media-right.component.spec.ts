import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMediaRightComponent } from './text-media-right.component';

describe('TextMediaRightComponent', () => {
  let component: TextMediaRightComponent;
  let fixture: ComponentFixture<TextMediaRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextMediaRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextMediaRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
