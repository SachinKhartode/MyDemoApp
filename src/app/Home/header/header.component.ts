import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../Sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss','./header.component.red.scss','./header.component.purple.scss'
              ,'./header.component.BW.scss','./header.component.WB.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(public sidebarservice: SidebarService) { }
  ngOnInit() {
    let themeName = localStorage.getItem('themeName');
    if (themeName != null || themeName != undefined)
    {
      this.sidebarservice.ThemeName= themeName;
    }
  }

  toggleSidebar() {
    
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
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

  changeTheme(themeName)
  {
    localStorage.setItem('themeName', themeName);
    this.sidebarservice.ThemeName= themeName;
  }

  getThemeName(){
    return this.sidebarservice.ThemeName;
  }

}
