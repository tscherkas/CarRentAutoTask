import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UserServiceModel } from '../shared/models/user-service-model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
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

  public getUsers(): Observable<UserServiceModel[]> {    
    return this.httpClient.get<UserServiceModel[]>(this.baseUrl + 'api/Users')
  }

  /** POST: add a new User to the server */
  public addUser(User: UserServiceModel): Observable<UserServiceModel> {
    return this.httpClient.post<UserServiceModel>(this.baseUrl + 'api/Users', User, this.httpOptions);
  }


  /** PUT: update an existiong User on the server */
  public updateUser(User: UserServiceModel): Observable<UserServiceModel> {
    return this.httpClient.put<UserServiceModel>(this.baseUrl + `api/Users/${User.id}`, User, this.httpOptions);
  }

  /** DELETE: delete User on the server */
  public deleteUser(UserId: number): Observable<UserServiceModel> {
    return this.httpClient.delete<UserServiceModel>(this.baseUrl + `api/Users/${UserId}`, this.httpOptions);
  }

}
