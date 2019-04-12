import { Component, OnInit, OnChanges,NgZone, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { MatSidenavModule, MatSidenavContainer, MatSidenavContent, MatSidenav  } from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { SidebarService } from './Home/Sidebar/sidebar.service';
import {filter} from 'rxjs/operators';


import { RoutesRecognized, ActivatedRoute, Router, NavigationEnd ,
  Event as RouterEvent,
  NavigationStart,
  NavigationCancel,
  NavigationError } from '@angular/router'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit(): void {

    this.titleService.setTitle('Demo App')

    
    // this.router.events.subscribe(e => {
    //   if (e instanceof RoutesRecognized) {
    //     debugger
    //     this.titleService.setTitle(e.state.root.children[0].data.title);
    //   }
    // });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
  ).subscribe(res => {
    
    this.titleService.setTitle(this.route.root.firstChild.snapshot.data['title']);
    //console.log(this.route);
  })


  }
  title = 'angular-pro-sidebar';
  
  @ViewChild('spinnerElement')
  spinnerElement: ElementRef

  constructor(public sidebarservice: SidebarService, private titleService: Title,
    private route: ActivatedRoute,private router: Router,
    private ngZone: NgZone,
    private renderer: Renderer) { }
  toggleSidebar() {

    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());

    this.router.events.subscribe((event: RouterEvent) => {
      this._navigationInterceptor(event)
      })

  }

  private _navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      // We wanna run this function outside of Angular's zone to
      // bypass change detection
      this.ngZone.runOutsideAngular(() => {
        // For simplicity we are going to turn opacity on / off
        // you could add/remove a class for more advanced styling
        // and enter/leave animation of the spinner
        this.renderer.setElementStyle(
          this.spinnerElement.nativeElement,
          'opacity',
          '1'
        )
      })
    }
    if (event instanceof NavigationEnd) {
      this._hideSpinner()
    }
    // Set loading state to false in both of the below events to
    // hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this._hideSpinner()
    }
    if (event instanceof NavigationError) {
      this._hideSpinner()
    }
  }

  private _hideSpinner(): void {
    // We wanna run this function outside of Angular's zone to
    // bypass change detection,
    this.ngZone.runOutsideAngular(() => {
      // For simplicity we are going to turn opacity on / off
      // you could add/remove a class for more advanced styling
      // and enter/leave animation of the spinner
      this.renderer.setElementStyle(
        this.spinnerElement.nativeElement,
        'opacity',
        '0'
      )
    })
  }

  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {

    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }

  changeTheme(themeName) {
    this.sidebarservice.ThemeName = themeName;
  }
  Property1: string;
  setProperty(m: string) {
    this.Property1 = m;
  }

  setToken(tk: any) {

    localStorage.setItem('Token', tk.value);
    window.location.reload();
  }
}
