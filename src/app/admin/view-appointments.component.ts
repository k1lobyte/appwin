import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

import { Appointment }     from './../appointment/appointment';
import { AppointmentService }   from './../appointment/appointment.service';

@Component({
  selector: 'view-appointments',
  templateUrl: './view-appointments.component.html'
})

export class ViewAppointmentsComponent implements OnInit {
  appointments: Appointment [];

  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser.accessLevel == 'Admin'){
        this.appointmentService.getAppointmentsByBusinessId(currentUser.company_id).then(appointments => this.appointments = appointments);
      }
  }
}
