import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMediaLeftComponent } from './text-media-left.component';

describe('TextMediaLeftComponent', () => {
  let component: TextMediaLeftComponent;
  let fixture: ComponentFixture<TextMediaLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextMediaLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextMediaLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
