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

  weatherData?: WeatherData

  ngOnInit(): void {
    this.weatherService.getWeatherData('35.495480', '33.888630')
     .subscribe({
      next: (response) => {
        this.weatherData = response
        console.log(response)
      }
     })
  }

}
