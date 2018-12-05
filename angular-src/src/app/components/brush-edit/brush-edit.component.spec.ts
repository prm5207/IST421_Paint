import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrushEditComponent } from './brush-edit.component';

describe('BrushEditComponent', () => {
  let component: BrushEditComponent;
  let fixture: ComponentFixture<BrushEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrushEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrushEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
