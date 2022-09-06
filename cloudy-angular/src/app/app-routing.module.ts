import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { VoiceComponent } from './voice/voice.component';

import { WeatherCardComponent } from './weather-card/weather-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherCardComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'voice', component: VoiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
