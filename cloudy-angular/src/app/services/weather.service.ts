import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { environment } from 'env';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(lon: string, lat: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
       .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
       .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
       .set('lon', lon)
       .set('lat', lat)
       .set('units', 'metric')
       .set('lang', 'en')
    }).pipe(catchError(this.handleError))
  }

  private handleError() {
    let errorMessage = 'Something went wrong.'
    return throwError(errorMessage)
  }

}
