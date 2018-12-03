import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintEditComponent } from './paint-edit.component';

describe('PaintEditComponent', () => {
  let component: PaintEditComponent;
  let fixture: ComponentFixture<PaintEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
