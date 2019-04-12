import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadPersonComponent } from './read-person/read-person.component';
import { WritePersonComponent } from './write-person/write-person.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './Reducers/person-reducer';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './Home/Sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HeaderComponent } from './Home/header/header.component';
import { EmployeeRFComponent } from './employee/employee-rf/employee-rf.component';
import { EmployeeRSComponent } from './employee/employee-rs/employee-rs.component';
import { EmployeeResolverService } from './employee/employee-rs/employee-resolver.service';
import { EmployeeHttpComponent } from './employee/employeehttp/employee-http.component';
import { httpInterceptor } from './employee/employeehttp/employee-http.service';
import { environment } from 'src/environments/environment';
import { ObservableSample1Component } from './Observables/observable-sample1/observable-sample1.component';
import { TestExample1Component } from './test-example1/test-example1.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    ReadPersonComponent,
    WritePersonComponent,
    SidebarComponent,
    HomeComponent,
    EmployeeComponent,
    HeaderComponent,
    EmployeeRFComponent,
    EmployeeRSComponent,
    EmployeeHttpComponent,
    ObservableSample1Component,
    TestExample1Component,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    PerfectScrollbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    StoreModule.forRoot({
      person : reducer
  })
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }, EmployeeResolverService,
  { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true },
  { provide: "BASE_API_URL", useValue: environment.base_url },
  
],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
