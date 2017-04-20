/* Component shows all appointments for the logged in user.
    If Admin, will show all appointments for their business.
    If Employee or Customer, will show their specific appointments.
*/

import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Router } from '@angular/router';

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
  ) {}

  ngOnInit(): void {
    /*
    this.route.params
      .switchMap((params: Params) => this.appointmentService.getAppointmentsByBusinessId(+params['id']))
      .subscribe(appointments => this.appointments = appointments);
    */
      this.appointmentService.getAppointmentsByBusinessId('compID1').then(appointments => this.appointments = appointments);
  }
}
