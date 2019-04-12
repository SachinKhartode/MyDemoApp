import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './employee.service';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let service: EmployeeService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
        providers:[EmployeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    service =  TestBed.get(EmployeeService);
    fixture.detectChanges();
  });

  it('should create Employee Component', () => {
    expect(component).toBeTruthy();
  });
 
  it('should create Employee Service', () => {
    expect(service).toBeTruthy();
  });

});
