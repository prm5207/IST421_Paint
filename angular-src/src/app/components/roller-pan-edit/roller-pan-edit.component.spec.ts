import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollerPanEditComponent } from './roller-pan-edit.component';

describe('RollerPanEditComponent', () => {
  let component: RollerPanEditComponent;
  let fixture: ComponentFixture<RollerPanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollerPanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollerPanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
