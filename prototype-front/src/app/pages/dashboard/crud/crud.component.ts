import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, take, tap } from 'rxjs';
import { City } from 'src/app/core/model/city';
import { CityService } from 'src/app/core/service/city.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  cities$!: Observable<City[]>;
  cities: City[] = [];
  form!:FormGroup;
  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cities$ = this.cityService.getAllCities().pipe(tap(res => this.cities = res));
  }

  delete(id: number) {
    this.cityService.deleteCity(id)
      .pipe(take(1)).subscribe({
        next: id => {
          console.log(this.cities);
          this.cities = this.cities.filter(c => c.id != id);
          console.log(this.cities);

          this.cities$ = of(this.cities);
        }
      })
  }


  save() {
    console.log(123);
    
    this.cityService.updateCity({...this.form.value})
    .pipe(take(1)).subscribe({
      next:city=>{
        const index = this.cities.findIndex(x=> x.id == city.id);
        this.cities[index]=city;
        this.cities$=of(this.cities);
      }
    })
  }

  select(city: City) {
    this.form=new FormGroup({
      id:new FormControl(city.id),
      name:new FormControl(city.name,[Validators.required]),
      countryName:new FormControl(city.countryName, Validators.required),
      population:new FormControl(city.population, [Validators.required, Validators.min(0)])
    })
  }
}
