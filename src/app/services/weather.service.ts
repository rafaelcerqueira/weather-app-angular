import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable <WeatherData> {
    return this.http.get<WeatherData>(env.weatherApiUrl + '/city/' + cityName, {
      headers: new HttpHeaders()
        .set(env.XRapidAPIHostHeaderName, env.XRapidAPIHostHeaderValue)
        .set(env.XRapidAPIKeyHeaderName, env.XRapidAPIKeyValue)
    });
  }
}
