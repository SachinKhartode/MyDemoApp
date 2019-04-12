import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeRFComponent } from './employee/employee-rf/employee-rf.component';
import { EmployeeResolverService  } from './employee/employee-rs/employee-resolver.service';
import { EmployeeRSComponent } from './employee/employee-rs/employee-rs.component';
import {  LoginUserGuard, AdminUserGuard, CanDeactivateGuard, UserCanLoadGuard } from './employee/employee-rf/employee-route-guard.guard';
import { EmployeeHttpComponent } from './employee/employeehttp/employee-http.component';
import { ObservableSample1Component } from './Observables/observable-sample1/observable-sample1.component';
import { TestExample1Component } from './test-example1/test-example1.component';


const routes: Routes = [
  {path:"Employee", component:EmployeeComponent,
 // canDeactivate: [CanDeactivateGuard],
  //canLoad:[UserCanLoadGuard],
  canActivate:[LoginUserGuard],
  canActivateChild:[AdminUserGuard],
  data:{title:'Employee Reactive'},
  children: [{path:"EmployeeRF", component:EmployeeRFComponent, }]
  },
  {path:"EmployeeRF", component:EmployeeRFComponent,canActivate:[LoginUserGuard,AdminUserGuard],data:{title:'Employee Reactive'}},
  {path:"EmployeeRS/:id", component:EmployeeRSComponent,resolve:{empData:EmployeeResolverService},data:{title:'Employee Resolver'}},
  {path: 'EmployeeRS', redirectTo: 'EmployeeRS/' },
  {path: 'EmployeeHTTP',  component:EmployeeHttpComponent,data:{title:'Employee HTTP'}},
  {path: 'ObservableSample1',  component:ObservableSample1Component,data:{title:'Observable'}},
  {path:'TestExample1',component:TestExample1Component,data:{title:'Example 1'}},
  {path:"**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
