import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { AppointmentService }   from './../appointment/api.appointments.service';
import {Appointment} from '../appointment/appointment';

@Component({
  selector: 'view-customers',
  templateUrl: './view-customers.component.html'
})

export class ViewCustomersComponent implements OnInit {
  users: Appointment [];

  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser.accessLevel === 'Admin') {
        this.appointmentService.getAllAppointmentsByBusinessID(currentUser.company_id).then(users => this.users = users);
      }
  }
}
