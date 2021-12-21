import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  public async findWeather(cityKey:string){
    console.log('cityKey', cityKey);
    const forecast = await this.http.get<any>(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=0UCIQbymKHASO6CCAmFCmdx0EnWufncK&details=true&metric=true`)

    console.log('forecast', forecast);
    return forecast
  }
}
