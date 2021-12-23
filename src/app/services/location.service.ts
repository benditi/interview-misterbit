import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }
  public async getCityAutocomplete(cityName: string) {
    const optionalCities = await this.http.get<any>(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=0UCIQbymKHASO6CCAmFCmdx0EnWufncK&q=${cityName}`)
    return optionalCities;
  }

  public addToFavorites(cityName: string) {
    let savedCities = JSON.parse(localStorage.getItem('favorite Cities'))
    if (savedCities) {
      savedCities.push(cityName)
      localStorage.setItem('favorite Cities', JSON.stringify(savedCities))
    } else {
      savedCities = [cityName]
      localStorage.setItem('favorite Cities', JSON.stringify(savedCities))
    }
  }
  public getFavorites() {
    return JSON.parse(localStorage.getItem('favorite Cities'))
  }
  public deleteFromFavorites(cityName: string) {
    let savedCities = JSON.parse(localStorage.getItem('favorite Cities'))
    const newCities: Array<string> = savedCities.filter((city: string) => city !== cityName)
    localStorage.setItem('favorite Cities', JSON.stringify(newCities))
  }

  public checkIfFavorite(cityName: string) {
    let savedCities = JSON.parse(localStorage.getItem('favorite Cities'))
    const isFavorite = savedCities.some((city: string) => city === cityName)
    return isFavorite;
  }
}
