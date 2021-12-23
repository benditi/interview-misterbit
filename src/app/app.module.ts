import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CityNameComponent } from './cmps/city-name/city-name.component';
import { DailyForecastComponent } from './cmps/daily-forecast/daily-forecast.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { CityFavoriteComponent } from './cmps/city-favorite/city-favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomePageComponent,
    CityNameComponent,
    DailyForecastComponent,
    FavoritesPageComponent,
    CityFavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
