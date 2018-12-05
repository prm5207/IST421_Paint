import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollerCreateComponent } from './roller-create.component';

describe('RollerCreateComponent', () => {
  let component: RollerCreateComponent;
  let fixture: ComponentFixture<RollerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
