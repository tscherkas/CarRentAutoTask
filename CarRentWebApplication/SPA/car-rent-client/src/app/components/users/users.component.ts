import { Component, OnInit } from '@angular/core';
import { User, fromUser, toUser } from '../../shared/models/user';
import { UsersService } from '../../services/users.service';
import { AlertsService } from 'src/app/services/alerts.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceModel } from 'src/app/shared/models/user-service-model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  public users: User[] = [];
  public currentUser: User;
  private usersService: UsersService;
  private alertsService: AlertsService;

  constructor(usersService: UsersService, alertsService: AlertsService) {
    this.usersService = usersService;
    this.alertsService = alertsService;
  }

  ngOnInit() {
    this.getUsers();
  }

  clearCurrentUser() {
    this.currentUser = new User();
    this.currentUser.id = 0;
    this.currentUser.firstName = '';
    this.currentUser.lastName = '';
    this.currentUser.birthDate = new NgbDate(1900, 1, 1);
    this.currentUser.driverLicenseNumber = '';
  }

  public modify(i: number) {
    this.currentUser = this.users[i];
  }

  public addUser() {
    this.usersService.addUser(
      fromUser(this.currentUser)
    ).subscribe(result => {
      this.alertsService.addAlert({
        message: `The user ${result.firstName}  ${result.lastName} was successfully added`,
        type: "success"
      });
      this.currentUser = null;
      this.getUsers();
    }, error => console.error(error));
  }
  public getUsers() {
    this.usersService.getUsers().subscribe(result => {
      this.users = result.map((u: UserServiceModel) => toUser(u));      
    }, error => console.error(error));
  }

  public updateUser() {
    this.usersService.updateUser(
      fromUser(this.currentUser)
    ).subscribe(result => {
      this.alertsService.addAlert({
        message: `The user ${this.currentUser.firstName} ${this.currentUser.lastName} was successfull updated`,
        type: "success"
      });
      this.currentUser = null;
      this.getUsers();
    }, error => console.error(error));
  }
  public deleteUser(i: number) {
    this.usersService.deleteUser(this.users[i].id).subscribe(result => {
      this.alertsService.addAlert({
        message: `The user ${this.users[i].firstName} ${this.users[i].lastName} was successfull deleted`,
        type: "success"
      });
      this.currentUser = null;
      this.getUsers();
    }, error => console.error(error));
  }
}
