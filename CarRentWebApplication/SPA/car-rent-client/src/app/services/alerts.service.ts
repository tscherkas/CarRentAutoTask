import { Injectable } from '@angular/core';
import { Alert } from '../shared/alerts/alert';
@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  private alert: Alert;
  private errorsMessages: string[] = [];

  constructor() { }

  public currentAlert() {
    return this.alert;
  }
  public addAlert(alert: Alert) {
    this.alert = alert;
    this.errorsMessages = [];
  }
  public addInnerMessage(error: string) {
    this.errorsMessages.push(error);
  }
  public getInnerMessages(): string[] {
    return this.errorsMessages;
  }
}
