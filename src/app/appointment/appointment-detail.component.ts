 import 'rxjs/add/operator/switchMap';
 import { Component, OnInit, Input }      from '@angular/core';
 import { ActivatedRoute, Params } from '@angular/router';
 import { Location }               from '@angular/common';
 import { Router } from '@angular/router';

 import { Appointment }     from './../appointment/appointment';
 import { AppointmentService }   from './../appointment/appointment.service';
 import { Business }     from './../business/business';
 import { BusinessService }   from './../business/api.business.service';
 import { Service }     from './../service/service';
 import { ServicesService }   from './../service/services.service';

 @Component({
   selector: 'appointment-detail',
   templateUrl: './appointment-detail.component.html'
 })

 export class AppointmentDetailComponent implements OnInit {
   @Input() appointment: Appointment;
   service: Service;
   business: Business;

   constructor(
     private appointmentService: AppointmentService,
     private servicesService: ServicesService,
     private businessService: BusinessService,
     private router: Router,
     private route: ActivatedRoute,
    private location: Location,
   ) {}

   ngOnInit(): void {
     this.servicesService.getService(this.appointment.service_Id).then(service => this.service = service);
     this.businessService.getBusiness(this.appointment.company_Id).then(business => this.business = business);
   }

   reject(appointment: Appointment): void{

   }

   confirm(appointment: Appointment): void{

   }

   complete(appointment: Appointment): void{

   }
 }
