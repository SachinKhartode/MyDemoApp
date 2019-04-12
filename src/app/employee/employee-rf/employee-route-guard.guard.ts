import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild,CanDeactivate, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeComponent } from '../employee.component';

@Injectable({
  providedIn: 'root'
})

export class LoginUserGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return true;
  }
}

@Injectable({
  providedIn: 'root'
})

export class AdminUserGuard implements CanActivate,CanActivateChild {
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
        return true;
    }
    canActivateChild(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
        return true;
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  
  export class CanDeactivateGuard implements CanDeactivate<EmployeeComponent>  {
    
    canDeactivate(component: EmployeeComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<any> {
      
      return component.EmployeeList.length>3;
    }
    

  }


  @Injectable({
    providedIn: 'root'
  })
  
  export class UserCanLoadGuard implements CanLoad {
    
    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean{
      
      return true;
    }

  }