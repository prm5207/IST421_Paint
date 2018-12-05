import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrushDetailComponent } from './brush-detail.component';

describe('BrushDetailComponent', () => {
  let component: BrushDetailComponent;
  let fixture: ComponentFixture<BrushDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrushDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrushDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
