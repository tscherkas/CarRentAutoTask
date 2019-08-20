import { Component } from '@angular/core';
import { Alert } from './shared/alerts/alert';
import { AlertsService } from './services/alerts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-rent-client';

  private alertsService: AlertsService;
  currentComponent: string = "Cars";
  constructor(alertsService: AlertsService) {
    this.alertsService = alertsService;
  }

}
