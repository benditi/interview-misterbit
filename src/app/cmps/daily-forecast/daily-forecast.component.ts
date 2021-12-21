import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss']
})
export class DailyForecastComponent implements OnInit {
  @Input() forecast:any
  constructor() { }

  ngOnInit(): void {
  }
  getImageUrl(forecast:any){
    return `../../assets/imgs/${forecast.Day.Icon}.png`
  }

}
