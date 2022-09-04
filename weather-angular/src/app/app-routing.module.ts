import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'weather', component: WeatherCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
