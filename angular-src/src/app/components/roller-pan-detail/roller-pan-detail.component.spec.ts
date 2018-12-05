import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollerPanDetailComponent } from './roller-pan-detail.component';

describe('RollerPanDetailComponent', () => {
  let component: RollerPanDetailComponent;
  let fixture: ComponentFixture<RollerPanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollerPanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollerPanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
