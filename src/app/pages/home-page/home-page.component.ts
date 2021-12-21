import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  cityName: string = ''
  cities$: Observable<any>
  forecast$: Observable<any>
  optionalCities: Array<any> = []
  fiveDaysForecasts: Array<any>

  constructor(private locationService: LocationService, private weatherService: WeatherService) { }

  ngOnInit(): void {
  }
  async onSubmit() {
    console.log('submit!');
    this.optionalCities = []
    this.cities$ = await this.locationService.getCityAutocomplete(this.cityName)
    console.log(this.cities$);
    this.cities$.subscribe(cities => {
      cities.forEach((city: any) => {
        console.log(city);
        this.optionalCities.push(city)
      });
      localStorage.setItem('cities', JSON.stringify(this.optionalCities))
    })

  }

  async onFindWeather(cityKey: string) {
    // if (localStorage.getItem('forecast')) {
    //   this.fiveDaysForecasts = JSON.parse(localStorage.getItem('forecast'))
    // }
    this.forecast$ = await this.weatherService.findWeather(cityKey)
    this.forecast$.subscribe((forecast: any) => {
      console.log(forecast.DailyForecasts);
      this.fiveDaysForecasts = forecast.DailyForecasts
      localStorage.setItem('forecast', JSON.stringify(this.fiveDaysForecasts))
    })
  }
}
