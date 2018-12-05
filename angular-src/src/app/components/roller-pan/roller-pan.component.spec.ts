import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollerPanComponent } from './roller-pan.component';

describe('RollerPanComponent', () => {
  let component: RollerPanComponent;
  let fixture: ComponentFixture<RollerPanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollerPanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollerPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
