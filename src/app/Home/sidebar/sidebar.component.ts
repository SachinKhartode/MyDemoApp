import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarService } from './sidebar.service';
// import { MenusService } from './menus.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss','./sidebar.component.red.scss','./sidebar.component.purple.scss'
               ,'./sidebar.component.BW.scss','./sidebar.component.WB.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(500))
    ])
  ]
})
export class SidebarComponent implements OnInit {
  menus = [];
  constructor(public sidebarservice: SidebarService) {
    this.menus = sidebarservice.getMenuList();
   }

  ngOnInit() {
  }

  // getSideBarState() {
  //   debugger;
  //   return this.sidebarservice.getSidebarState();
  // }

  toggle(currentMenu) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.sidebarservice.hasBackgroundImage;
  }

  getThemeName(){
        return this.sidebarservice.ThemeName;
  }

}
