import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintCreateComponent } from './paint-create.component';

describe('PaintCreateComponent', () => {
  let component: PaintCreateComponent;
  let fixture: ComponentFixture<PaintCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
