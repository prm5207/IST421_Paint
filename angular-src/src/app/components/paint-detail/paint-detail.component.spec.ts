import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintDetailComponent } from './paint-detail.component';

describe('PaintDetailComponent', () => {
  let component: PaintDetailComponent;
  let fixture: ComponentFixture<PaintDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
