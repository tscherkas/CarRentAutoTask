import { Component } from '@angular/core';

@Component({
  selector: 'app-cars-component',
  templateUrl: './cars.component.html'
})
export class CarsComponent {
  public currentCount = 0;

  public search() {
    this.currentCount++;
  }
}
