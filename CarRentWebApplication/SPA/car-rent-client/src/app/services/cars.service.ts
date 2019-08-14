import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Car } from '../shared/models/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private httpClient: HttpClient;
  private baseUrl: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.httpClient = http;
    this.baseUrl = baseUrl;
    if (http == null)
      console.error('Null httpClient');
  }

  public getCars() {
    return this.httpClient.get<Car[]>(this.baseUrl + 'api/Cars');    
  }

  /** POST: add a new car to the server */
  public addCar(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(this.baseUrl + 'api/Cars', car, this.httpOptions);
  }


  /** PUT: update an existiong car on the server */
  public updateCar(car: Car): Observable<Car> {
    return this.httpClient.put<Car>(this.baseUrl + `api/Cars/${car.id}`, car, this.httpOptions);
  }

  /** DELETE: delete car on the server */
  public deleteCar(carId: number): Observable<Car> {
    return this.httpClient.delete<Car>(this.baseUrl + `api/Cars/${carId}`, this.httpOptions);
  }

}
