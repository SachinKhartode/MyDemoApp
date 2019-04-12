import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRSComponent } from './employee-rs.component';

describe('EmployeeRSComponent', () => {
  let component: EmployeeRSComponent;
  let fixture: ComponentFixture<EmployeeRSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
