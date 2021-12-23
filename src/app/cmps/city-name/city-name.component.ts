import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CityObject } from 'src/app/models/cityObject.model';

@Component({
  selector: 'city-name',
  templateUrl: './city-name.component.html',
  styleUrls: ['./city-name.component.scss']
})
export class CityNameComponent implements OnInit {
  @Input() city: any
  @Output() selectCity = new EventEmitter<CityObject>()
  constructor() { }

  ngOnInit(): void {
  }
  onSelectCity(name: string, key: string) {
    this.selectCity.emit({ name, key })
  }
}
