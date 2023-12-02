import { Injectable } from '@angular/core';
import { City } from '../model/city';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private cities: City[] = []
  constructor() {
    this.cities.push({
      id:1,
      name: "Rabat",
      countryName: "Morocco",
      population: 1_500_000
    })
    this.cities.push({
      id:2,
      name: "Salé",
      countryName: "Morocco",
      population: 500_000
    })
    this.cities.push({
      id:3,
      name: "New York",
      countryName: "United States",
      population: 8419600
    })
  }

  getAllCities(): Observable<City[]> {
    return of(this.cities)
  }

  deleteCity(id: number): Observable<number> {
    this.cities = this.cities.filter(c => c.id != id);
    return of(id);
  }

  updateCity(city:City): Observable<City> {
    let city2 = this.cities.find(c=>c.id==city.id) as City;
    city2.name=city.name;
    city2.countryName=city.countryName;
    city2.population=city.population;
    return of(city2);
  }
}
