import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Router } from '@angular/router';
import { Business } from './../business/business';
import { BusinessService}   from './../business/api.business.service';
import { Service }     from './../service/service';
import { ServicesService}   from './../service/api.services.service';

@Component({
  selector: 'schedule-appointment',
  templateUrl: './schedule-appointment.component.html'
})

export class ScheduleAppointmentComponent {
    business: Business;
    service: Service;

    constructor(
      private businessService: BusinessService,
      private servicesService: ServicesService,
      private router: Router,
      private route: ActivatedRoute,
      private location: Location,
    ) {}

    ngOnInit(): void {
      console.log(this.route.params);
      console.log('Schedule Appointment Component ONInit.');
      this.route.params
        .switchMap((params: Params) => this.servicesService.getService(params['serviceid']))
        .subscribe(service => this.initialize(service));
    }

    initialize(service: Service): void {
      console.log('Schedule Appointment Component Init.');
      this.service = service;
      this.businessService.getBusiness(this.service.company_id).then(business => this.business = business);
    }


    schedule(): void{

    }

    cancel(): void{
      this.router.navigate(['/business', this.business.id]);
    }
}
