import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollerEditComponent } from './roller-edit.component';

describe('RollerEditComponent', () => {
  let component: RollerEditComponent;
  let fixture: ComponentFixture<RollerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
