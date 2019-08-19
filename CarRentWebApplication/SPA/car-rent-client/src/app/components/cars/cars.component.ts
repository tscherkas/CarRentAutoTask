import { Component, OnInit } from '@angular/core';
import { Car } from '../../shared/models/car';
import { CarsService } from '../../services/cars.service';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {


  public cars: Car[] = [];
  public currentCar: Car;
  private carsService: CarsService;
  private alertsService: AlertsService;

  constructor(carsService: CarsService, alertsService: AlertsService) {
    this.carsService = carsService;
    this.alertsService = alertsService;
  }

  ngOnInit() {
    this.getCars();
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

  public addCar() {
    this.carsService.addCar(this.currentCar).subscribe(result => {
      this.alertsService.addAlert({
        message: `The car ${result.manufactorer} was successfully added`,
        type: "success"
      });
      this.currentCar = null;
      this.getCars();
    }, error => console.error(error));
  }
  public getCars() {
    this.carsService.getCars().subscribe(result => {
      this.cars = result;
    }, error => console.error(error));
  }

  public updateCar() {
    this.carsService.updateCar(this.currentCar).subscribe(result => {
      this.alertsService.addAlert({
        message: `The car ${this.currentCar.manufactorer} was successfull updated`,
        type: "success"
      });
      this.currentCar = null;
      this.getCars();
    }, error => console.error(error));
  }
  public deleteCar(i: number) {
    this.carsService.deleteCar(this.cars[i].id).subscribe(result => {
      this.alertsService.addAlert({
        message: `The car ${this.cars[i].manufactorer} was successfull deleted`,
        type: "success"
      });
      this.currentCar = null;
      this.getCars();
    }, error => console.error(error));
  }
}
