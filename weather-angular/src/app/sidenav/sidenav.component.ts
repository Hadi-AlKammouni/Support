import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { navbarData } from './nav-data';

interface SidenavToggle {
  screenWidth: number
  collapsed: boolean
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter()

  collapsed = false
  navData = navbarData
  screenWidth = 0

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }

  closeSidenav() {
    this.collapsed = false
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }

}
