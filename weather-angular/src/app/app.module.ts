import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './sidenav/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    LoadingSpinnerComponent,
    LoginComponent,
    SidenavComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
