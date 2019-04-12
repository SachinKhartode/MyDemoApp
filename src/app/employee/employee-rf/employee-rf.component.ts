import { Component, OnInit } from '@angular/core';
import { EmployeeModel,EmployeeService,DeparmentModel } from '../employee.service';
import { FormGroup,FormBuilder, FormControl,Validators } from '@angular/forms';



@Component({
  selector: 'app-employee-rf',
  templateUrl: './employee-rf.component.html',
  styleUrls: ['./employee-rf.component.css'],
  
})
export class EmployeeRFComponent implements OnInit {

  EmployeeList:EmployeeModel[];
  Employee:EmployeeModel;
  frmEmployee: FormGroup; 
  
  constructor(public empService:EmployeeService, private fb:FormBuilder) { 
    
    this.frmEmployee =  this.fb.group({
      ID:['',Validators.required],
      Name:['',Validators.required],
      DOB:[''],
      Email:[''],
      Gender:[''],
      Department:this.fb.group({
        DeptName: [''],
        DeptID: ['']
      }),
      IsActive:[''],

  })
  }

  ngOnInit() {
    //this.empService.GetEmployeeList();
    //this.EmployeeList =this.empService.GetEmployeeList();
  //   this.frmEmployee =  new FormGroup({
  //     ID: new FormControl('',Validators.required),
  //     Name:new FormControl('',Validators.required),
  //     DOB:new FormControl(''),
  //     Email:new FormControl(''),
  //     Gender:new FormControl(''),
  //     Department:new FormGroup({
  //       DeptName: new FormControl(''),
  //       DeptID:new FormControl('')
  //     }),
  //     IsActive:new FormControl(''),

  // })

   
  }

  AddEmployee(emp:EmployeeModel){
    
    this.empService.AddEmployee(emp);
    this.Employee = new EmployeeModel();
    this.Employee.Department = new DeparmentModel();
  }

  EditEmployee(emp:EmployeeModel){
    
    this.frmEmployee.setValue({
      ID:[emp.ID],
      Name:[emp.Name],
      DOB:[emp.DOB],
      Email:[emp.Email],
      Gender:emp.Gender,
      Department:{
        DeptName: emp.Department.DeptName,
        DeptID:emp.Department.DeptID
      },
      IsActive:emp.IsActive,

    })
    
  }

}


