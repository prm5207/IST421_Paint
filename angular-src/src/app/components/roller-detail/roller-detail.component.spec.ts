import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollerDetailComponent } from './roller-detail.component';

describe('RollerDetailComponent', () => {
  let component: RollerDetailComponent;
  let fixture: ComponentFixture<RollerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
