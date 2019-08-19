import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Alert } from '../shared/alerts/alert';
import { AlertsService } from '../services/alerts.service';

export class HttpErrorInterceptor implements HttpInterceptor {

  private alertsService: AlertsService;
  private errors: string[];

  constructor(alertsService: AlertsService) {
    this.alertsService = alertsService;
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            // client-side error
            this.alertsService.addAlert({
              message: `Error: ${error.error.message}`,
              type: 'danger'
            });
          } else {
            // server-side error
            if (error.status === 400) {
              this.handleModelErrors(error);
            }
            else {
              this.alertsService.addAlert({
                message: `Error Code: ${error.status}\nMessage: ${error.message}`,
                type: 'danger'
              });
            }
          }
          return throwError(this.alertsService.currentAlert().message);
        })
      )
  }

  private handleModelErrors(error: HttpErrorResponse) {
    this.alertsService.addAlert({
      message: `Please, check data provided:  ${error.error.title}`,
      type: 'danger'
    });
    let validationErrorDictionary = error.error.errors;
    for (var fieldName in validationErrorDictionary) {
      if (validationErrorDictionary.hasOwnProperty(fieldName)) {
        this.alertsService.addInnerMessage(validationErrorDictionary[fieldName]);
      }
    }
  }
}
