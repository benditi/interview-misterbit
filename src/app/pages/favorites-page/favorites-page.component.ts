import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {
  favoriteCities: Array<string> | null = null
  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.favoriteCities = this.locationService.getFavorites()
  }
  removeCity(cityName: string) {
    this.locationService.deleteFromFavorites(cityName)
    this.favoriteCities = this.locationService.getFavorites()
  }
}
