import { User } from './user';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

export class UserServiceModel {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  driverLicenseNumber: string;
}
