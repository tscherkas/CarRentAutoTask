import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { User } from '../../../shared/models/user';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }
}
