import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceModel } from './user-service-model';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: NgbDate;
  driverLicenseNumber: string;
}


export function fromUser(user: User): UserServiceModel {
  if (!user) return null;
  let date: Date;
  try {
    date = new Date(user.birthDate.year, user.birthDate.month, user.birthDate.day)
  }
  catch (ex) {
  }
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    driverLicenseNumber: user.driverLicenseNumber,
    birthDate: date
  };
}

export function toUser(user: UserServiceModel): User {
  if (!user) return null;
  let ngbDate = new NgbDate(1900, 1, 1);
  try {
    ngbDate.year = user.birthDate.getFullYear();
    ngbDate.month = user.birthDate.getMonth();
    ngbDate.day = user.birthDate.getDay();
  }
  catch (ex) { }
  let result: User = new User();

  result.id = user.id;
  result.firstName = user.firstName;
  result.lastName = user.lastName;
  result.driverLicenseNumber = user.driverLicenseNumber;
  result.birthDate = ngbDate;

  return result;
}
