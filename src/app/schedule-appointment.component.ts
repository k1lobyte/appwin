import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Business }     from './business';
import { BusinessService}   from './business.service';
import { Service }     from './service';
import { ServicesService}   from './services.service';

@Component({
  selector: 'schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
})

export class ScheduleAppointmentComponent {
    business: Business;
    service: Service;


}
