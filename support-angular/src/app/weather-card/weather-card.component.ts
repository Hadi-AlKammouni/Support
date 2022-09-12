import { Component, OnInit } from '@angular/core';

import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../services/weather-service/weather.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  constructor(private weatherService: WeatherService, private toastr: ToastrService ) { }

  longitude: string = '35.495480'
  latitude: string = '33.888630'
  weatherData?: WeatherData
  isLoading = false
  error = '';
  isToken = true

  ngOnInit(): void {
    const loaded = localStorage.getItem('key')
    const loadedAgain = localStorage.getItem('key-two')
    if (!loadedAgain) {
      if(!loaded){
        localStorage.setItem('key','loaded')
        localStorage.setItem('key-two','loaded')
        location.reload()
      } else {
        localStorage.removeItem('key') 
      }
    }

    // this.getWeatherData(this.longitude, this.latitude)
    this.longitude = ''
    this.latitude = ''
  }

  onSubmit() {
    if (!this.latitude || !this.longitude) {
      this.toastr.warning('Warning', 'Both fields must be filled!');
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
        this.toastr.success('Success', 'You are viewing the current weather data.');
      }, errorMessage => {
        this.error = errorMessage
        this.isLoading = false
        this.toastr.error('Error', errorMessage);
     })
  }

}