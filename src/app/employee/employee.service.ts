import { Injectable } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  EmpoyeeList: EmployeeModel[];

  constructor() {
    const dept = { DeptID:1,DeptName:'ABC' };
    this.EmpoyeeList = [{ ID:1,Name:'ABC',DOB:new Date(),Email:'abc@abc.com',IsActive:true,Gender:'M',Department:dept},
    { ID:2,Name:'ADFF',DOB:new Date(),Email:'abc@abc.com',IsActive:true,Gender:'M',Department:dept},
    { ID:3,Name:'JRL',DOB:new Date(),Email:'abc@abc.com',IsActive:true,Gender:'M',Department:dept},];
   }

  GetEmployeeList():EmployeeModel[]{
    
     return this.EmpoyeeList;  
       
  }

  AddEmployee(emp:EmployeeModel){
     this.EmpoyeeList.push(emp);
     return emp;    
  }
  


}



export class EmployeeModel  {
  ID:Number;
  Name:String;
  DOB:Date;
  Email:String;
  Gender:String;
  IsActive:boolean;
  Department:DeparmentModel;
  }
  
  export class DeparmentModel  {
  public DeptID:Number;
  public DeptName:String;
  }