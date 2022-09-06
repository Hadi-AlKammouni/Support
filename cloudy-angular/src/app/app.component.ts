import { Component } from '@angular/core';

interface SidenavToggle {
  screenWidth: number
  collapsed: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-angular';

  isSidenavCollapsed = false
  screenWidth = 0

  onToggleSidenav(data: SidenavToggle) {
    this.screenWidth = data.screenWidth
    this.isSidenavCollapsed = data.collapsed
  }
}
