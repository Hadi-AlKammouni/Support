import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  token?: any
  isLoggedIn = false

  isSidenavCollapsed = false
  screenWidth = 0

  ngOnInit(): void {
    const loaded = localStorage.getItem('token')
    if(!loaded){
      this.router.navigate(['/auth'])
    } else {
      this.router.navigate(['/weather'])
    }
  }

  constructor(private router: Router) {
    this.token = this.asyncLocalStorage.getItem('token');
    if(this.token) {
      this.isLoggedIn = true
    }
  }

  asyncLocalStorage = {
    getItem: function (key: string) {
       Promise.resolve();
      return localStorage.getItem(key);
    }
  };
  
  onToggleSidenav(data: SidenavToggle) {
    this.screenWidth = data.screenWidth
    this.isSidenavCollapsed = data.collapsed
  }

}
