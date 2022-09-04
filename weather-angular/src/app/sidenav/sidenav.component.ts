import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

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
  // @HostListener('window:resize', ['$event'])
  
  collapsed = false
  navData = navbarData
  screenWidth = 0
  
  constructor() { }
  
  // onResize(event: any) {
  //   this.screenWidth = window.innerWidth
  //   console.log(this.screenWidth)
  //   if (this.screenWidth <= 768) {
  //     this.collapsed = false
  //     this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  //   }
  // }
  
  ngOnInit(): void {
    this.screenWidth = window.innerWidth
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
