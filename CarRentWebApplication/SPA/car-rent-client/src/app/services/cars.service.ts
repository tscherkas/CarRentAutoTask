import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../shared/models/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private httpClient: HttpClient;
  private baseUrl: string;


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.httpClient = http;
    this.baseUrl = baseUrl;
    if (http == null)
      console.error('Null httpClient');
  }

  public getCars() {
    return this.httpClient.get<Car[]>(this.baseUrl + 'api/Cars');    
  }

}
