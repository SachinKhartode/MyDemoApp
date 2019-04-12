import { Component, OnInit } from '@angular/core';
import { EmployeeService, EmployeeModel } from 'src/app/employee/employee.service';

@Component({
  selector: 'app-artist-component',
  templateUrl: './artist-component.component.html',
  styleUrls: ['./artist-component.component.css']
})
export class ArtistComponentComponent implements OnInit {

  EmployeeList:EmployeeModel[];
  constructor(private empService:EmployeeService) { }

  ngOnInit() {
    this.EmployeeList = this.empService.GetEmployeeList();
  }

}
