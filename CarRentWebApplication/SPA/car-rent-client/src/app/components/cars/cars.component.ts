import { Component, OnInit } from '@angular/core';
import { Car } from '../../shared/models/car';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {


  public cars: Car[] =
    [{
      id: 4,
      manufactorer: 'Mazeratti',
      model: 'M0',
      class: 'B1',
      manufactoryYear: 1999,
      registrationNumber: '4622-KO4'
    }];
  public currentCar: Car;
  private carsService: CarsService;
  constructor(carsService: CarsService) {
    this.carsService = carsService;
  }
  
  ngOnInit() {
    console.log("ngOnInit");
    this.carsService.getCars().subscribe(result => {
      this.cars = result;
    }, error => console.error(error));
  }

  clearCurrentCar() {
    this.currentCar = {
      id: 0,
      manufactorer: '',
      model: '',
      class: '',
      manufactoryYear: 0,
      registrationNumber: ''
    };
  }

  public modify(i: number) {
    this.currentCar = this.cars[i];
  }
  public updateCar() {
    this.carsService.updateCar(this.currentCar).subscribe(result => {
      this.currentCar = result;
    }, error => console.error(error));
  }
  public addCar() {
    this.carsService.addCar(this.currentCar).subscribe(result => {
      this.currentCar = result;
    }, error => console.error(error));
  }
  public deleteCar(i: number) {
    this.carsService.deleteCar(this.cars[i].id).subscribe(result => {
      this.currentCar = result;
    }, error => console.error(error));
  }
}
