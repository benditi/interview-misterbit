import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityFavoriteComponent } from './city-favorite.component';

describe('CityFavoriteComponent', () => {
  let component: CityFavoriteComponent;
  let fixture: ComponentFixture<CityFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityFavoriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
