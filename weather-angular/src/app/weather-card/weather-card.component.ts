import { Component, OnInit } from '@angular/core';

import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  longitude: string = '35.495480'
  latitude: string = '33.888630'
  weatherData?: WeatherData
  isLoading = false
  error = '';

  ngOnInit(): void {
    // this.getWeatherData(this.longitude, this.latitude)
    this.longitude = ''
    this.latitude = ''
  }

  onSubmit() {
    if (!this.latitude || !this.longitude) {
      alert("both fields must be filled!")
    } else {
      // this.getWeatherData(this.longitude, this.latitude)
      this.longitude = ''
      this.latitude = ''
    }
  }

  private getWeatherData(longitude: string, latitude:string) {
    this.isLoading = true
    this.weatherService.getWeatherData(longitude, latitude)
     .subscribe(response => {
        this.weatherData = response
        this.isLoading = false
        console.log(response)
      }, errorMessage => {
      this.error = errorMessage
      this.isLoading = false
      alert(errorMessage)
     })
  }

}
