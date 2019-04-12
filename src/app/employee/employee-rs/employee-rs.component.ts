import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-employee-rs',
  templateUrl: './employee-rs.component.html',
  styleUrls: ['./employee-rs.component.css']
})
export class EmployeeRSComponent implements OnInit {
  EmployeeList = [];
  empID:number=0;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    
    this.route.params.subscribe(param => 
      {
    
      this.empID = param['id'] 
      if (this.empID == null || this.empID == undefined){
      this.empID =0;      
    }
    this.refreshData();
      }
      );
    
  }

  refreshData(){
    

    //  this.route.snapshot.data.subscribe(({empData}) => {
    //    this.EmployeeList =empData; 
    //    this.EmployeeList.filter(x=>x.ID == this.empID || this.empID==0)});

    this.EmployeeList = this.route.snapshot.data.empData.filter(x=>x.ID == this.empID || this.empID==0);

  }

loadAll()
{
  this.router.navigate(['/EmployeeRS']);
  
}

}
