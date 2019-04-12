import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { EmployeeService, EmployeeModel } from '../employee.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeResolverService implements Resolve<EmployeeModel[]> {

  constructor(private empservice:EmployeeService) { }
  resolve(route: ActivatedRouteSnapshot,rstate:RouterStateSnapshot):EmployeeModel[]{
    
    return  this.empservice.GetEmployeeList();
   //return null;
  }
}
