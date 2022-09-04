import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

import { navbarData } from './nav-data';

interface SidenavToggle {
  screenWidth: number
  collapsed: boolean
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter',[
        style({ opacity: 0 }),
        animate('350ms',
          style({ opacity: 1 })
        )
      ]),
      transition(':leave',[
        style({ opacity: 1 }),
        animate('350ms',
          style({ opacity: 0 })
        )
      ])
    ]),
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
        keyframes([
          style({ transform: 'rotate(0deg)', offset: '0' }),
          style({ transform: 'rotate(4turn)', offset: '1' })
        ]))
      ])
    ])
  ]
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
