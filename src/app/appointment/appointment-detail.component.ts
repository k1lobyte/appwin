 import 'rxjs/add/operator/switchMap';
 import { Component, OnInit, Input }      from '@angular/core';
 import { ActivatedRoute, Params } from '@angular/router';
 import { Location }               from '@angular/common';
 import { Router } from '@angular/router';

 import { Appointment }     from './../appointment/appointment';
 import { AppointmentService }   from './api.appointments.service';
 import { Business }     from './../business/business';
 import { BusinessService }   from './../business/api.business.service';
 import { Service }     from './../service/service';
 import { ServicesService }   from './../service/api.services.service';
 import { User } from './../user';
 import { UserService} from './../api.user.service';

 @Component({
   selector: 'appointment-detail',
   templateUrl: './appointment-detail.component.html'
 })

 export class AppointmentDetailComponent implements OnInit {
   @Input() appointment: Appointment;
   service: Service;
   business: Business;
   employee: User;
   time: string;

   constructor(
     private appointmentService: AppointmentService,
     private servicesService: ServicesService,
     private businessService: BusinessService,
     private userService: UserService,
     private router: Router,
     private route: ActivatedRoute,
     private location: Location
   ) {}

   ngOnInit(): void {
     console.log('Appointments Log');
     console.log('The Service is ' + this.appointment.service_Id + '.');
     console.log('The Company is ' + this.appointment.company_Id + '.');
     this.servicesService.getService(this.appointment.service_Id).then(service => this.service = service);
     this.businessService.getBusiness(this.appointment.company_Id).then(business => this.business = business);
     this.userService.getUser(this.appointment.employee_Id).then(employee => this.employee = employee);
     //this.time = this.appointment.appointmentDate.getHours().toString();
   }

   //
   reject(appointment: Appointment): void {

   }

   confirm(appointment: Appointment): void {

   }

   complete(appointment: Appointment): void {

   }
 }
