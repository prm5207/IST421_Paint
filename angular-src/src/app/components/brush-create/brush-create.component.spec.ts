import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrushCreateComponent } from './brush-create.component';

describe('BrushCreateComponent', () => {
  let component: BrushCreateComponent;
  let fixture: ComponentFixture<BrushCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrushCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrushCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
