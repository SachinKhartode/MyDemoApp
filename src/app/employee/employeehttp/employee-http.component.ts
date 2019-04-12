import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../employee.service';
import { EmployeeHttpService } from './employee-http.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-employee-http',
  templateUrl: './employee-http.component.html',
  styleUrls: ['./employee-http.component.css'],
  providers: [EmployeeHttpService]
})
export class EmployeeHttpComponent implements OnInit {
  title='None';
  EmployeeList : EmployeeModel[];
  EmployeeList2: EmployeeModel[];
  emp :Observable<EmployeeModel[]>
  constructor(public emphttp:EmployeeHttpService,private route:ActivatedRoute,private router:Router) {
    this.emp = emphttp.GetAllEmployee();
   }

  ngOnInit() {
    
    //this.emphttp.GetAllEmployeeWithSubcription();
    this.emp = this.emphttp.GetAllEmployee();
    
    this.title =  this.route.snapshot.data.title;

    // var sub = this.emphttp.GetAllEmployee().subscribe(data=> {
    //  debugger
    //   this.EmployeeList = data;
    // });

    var sub1 = this.emphttp.GetAllEmployee().subscribe(data=> {
      debugger
       this.EmployeeList2 = data;
     });

  }


}
