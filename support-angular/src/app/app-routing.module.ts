import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LogoutComponent } from './logout/logout.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { VoiceComponent } from './voice/voice.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'weather', component: WeatherCardComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'voice', component: VoiceComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'qr', component: QrcodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }