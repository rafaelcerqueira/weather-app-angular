import { response } from 'express';
import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  constructor(private WeatherService: WeatherService) { }


  cittyName: string = 'sao paulo';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cittyName);
    this.cittyName = '';

  }

  onSubmit() {
    this.getWeatherData(this.cittyName);
    this.cittyName = '';
  }

  private getWeatherData(cityName: string) {
    this.WeatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
      }
    });
  }
}
