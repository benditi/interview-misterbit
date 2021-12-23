import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'city-favorite',
  templateUrl: './city-favorite.component.html',
  styleUrls: ['./city-favorite.component.scss']
})
export class CityFavoriteComponent implements OnInit {
  @Input() city: string
  @Output() removeCity = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  onRemoveCity(cityName: string) {
    this.removeCity.emit(cityName)
  }
}
