import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }
  public async getCityAutocomplete(cityName:string){
    const optionalCities = await this.http.get<any>(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=0UCIQbymKHASO6CCAmFCmdx0EnWufncK&q=${cityName}`)
    // .pipe(
    //   map((res:any)=> res.LocalizedName)
    // )
    // localStorage.setItem('optionalAutocomplete' ,optionalCities)
    console.log(optionalCities);
    return optionalCities;
  }
}
