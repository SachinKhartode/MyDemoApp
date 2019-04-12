import { Component, OnInit } from '@angular/core';
import { EmployeeService,EmployeeModel,DeparmentModel } from './employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  EmployeeList:EmployeeModel[];
  Employee:EmployeeModel;

  constructor(private empService:EmployeeService) { 
    
  }

  ngOnInit() {
    this.EmployeeList =this.empService.GetEmployeeList();
    this.Employee = new EmployeeModel();
    this.Employee.Department = new DeparmentModel();
  }

  AddEmployee(emp:EmployeeModel){
    this.empService.AddEmployee(emp);
    this.Employee = new EmployeeModel();
    this.Employee.Department = new DeparmentModel();
  }

  EditEmployee(emp:EmployeeModel){
    
    this.Employee = emp;
    
  }

}

