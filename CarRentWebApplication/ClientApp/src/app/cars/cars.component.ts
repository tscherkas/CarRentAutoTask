import { Component, Inject  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cars-component',
  templateUrl: './cars.component.html'
})
export class CarsComponent {
  public currentCount = 0;
  public cars: Car[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Car[]>(baseUrl + 'api/Cars').subscribe(result => {
      this.cars = result;
    }, error => console.error(error));
  }

  public search() {
    this.currentCount++;
  }
  public OnSelect(car: Car) {

  }
}

interface Car {
  id: number;
  manufactorer: string;
  model: string;
  class: string;
  manufactoryYear: number;
  registrationNumber: string;
}
