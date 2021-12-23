import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CityObject } from 'src/app/models/cityObject.model';
import { LocationService } from 'src/app/services/location.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  cityName: string = ''
  selectedCity: string = ''
  isFavorite: boolean
  cities$: Observable<any>
  forecast$: Observable<any>
  optionalCities: Array<any> = []
  fiveDaysForecasts: Array<any>

  constructor(private locationService: LocationService, private weatherService: WeatherService) { }

  ngOnInit(): void {
  }
  async onSubmit() {
    this.fiveDaysForecasts = []
    this.isFavorite = false
    this.optionalCities = []
    this.cities$ = await this.locationService.getCityAutocomplete(this.cityName)
    this.cities$.subscribe(cities => {
      cities.forEach((city: any) => {
        this.optionalCities.push(city)
      });
    })
  }

  async onFindWeather(cityObject: CityObject) {
    this.forecast$ = await this.weatherService.findWeather(cityObject.key)
    this.forecast$.subscribe((forecast: any) => {
      this.fiveDaysForecasts = forecast.DailyForecasts
    })
    this.selectedCity = cityObject.name
    this.isFavorite = this.locationService.checkIfFavorite(this.selectedCity)
  }

  onAddFavorites() {
    this.locationService.addToFavorites(this.selectedCity)
    this.isFavorite = true
  }
}
