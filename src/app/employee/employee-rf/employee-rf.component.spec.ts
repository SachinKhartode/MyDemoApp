import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRFComponent } from './employee-rf.component';

describe('EmployeeRFComponent', () => {
  let component: EmployeeRFComponent;
  let fixture: ComponentFixture<EmployeeRFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
