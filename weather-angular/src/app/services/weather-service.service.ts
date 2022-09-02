import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'env';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  getWeatherData(lon: number, lat: number) {
    this.http.get(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
       .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
       .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
       .set('lon', lon)
       .set('lat', lat)
       .set('units', 'metric')
       .set('lang', 'en')
    })
  }

}
