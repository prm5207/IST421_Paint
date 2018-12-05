import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollerPanCreateComponent } from './roller-pan-create.component';

describe('RollerPanCreateComponent', () => {
  let component: RollerPanCreateComponent;
  let fixture: ComponentFixture<RollerPanCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollerPanCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollerPanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
