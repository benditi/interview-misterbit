import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'city-name',
  templateUrl: './city-name.component.html',
  styleUrls: ['./city-name.component.scss']
})
export class CityNameComponent implements OnInit {
 @Input() city:any
 @Output() selectCity = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  onSelectCity(key:string){
    console.log('emitting key:', key);
    this.selectCity.emit(key)  
  }
}
