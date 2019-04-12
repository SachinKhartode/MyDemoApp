import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { EmployeeModel } from '../employee.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeHttpService {

  constructor(private http: HttpClient) { }

  url = "api/Employee/GetAll"
  EmpList:EmployeeModel[];
  GetAllEmployee(){
    debugger
    return this.http.get<EmployeeModel[]>(this.url);
  }

  GetAllEmployeeWithSubcription(){
    debugger
    return this.http.get<EmployeeModel[]>
    (this.url).subscribe(emp=>{
      this.EmpList = emp;
    });
  }

}

@Injectable({
  providedIn: 'root'
})
export class httpInterceptor implements HttpInterceptor {
//  constructor(url: environment.base_url){}

constructor(
  @Inject('BASE_API_URL') private baseUrl: string) {
}

  intercept(request: HttpRequest<any>, newRequest: HttpHandler): Observable<HttpEvent<any>> {
  // add authorization header to request
  //Get Token data from local storage
     
  let token = localStorage.getItem('Token');
  let request1  = request;
  //if (token ) {
  request1 = request.clone({
  url : this.baseUrl  + request.url,
  setHeaders: {
  Authorization: `Bearer ${token}`}});
  //}

  return newRequest.handle(request1);
  }
 }
