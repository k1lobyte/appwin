import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Router } from '@angular/router';

import { Business }     from './business';
import { BusinessService}   from './business.service';
import { Service }     from './service';
import { ServicesService}   from './services.service';

@Component({
  selector: 'business-detail',
  templateUrl: './business-detail.component.html',
  styles: [`
    .list-group-item {
      display:flex;
      justify-content:space-between;
      align-items:center;
    }`]




export class BusinessDetailComponent implements OnInit {
  business: Business;

  services: Service[];

  constructor(
    private businessService: BusinessService,
    private servicesService: ServicesService,
    private router: Router,

    
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.businessService.getBusinessByCode(params['code']))

      .subscribe(business => this.getService(business));

  }

  getService(business: Business): void {
    this.business = business;
    this.servicesService.getServicesByBusinessId(this.business.id).then(services => this.services = services);
  }

  onSelect(service: Service): void {
    this.router.navigate(['/schedule-appointment', this.business.id, service.id]);

      .subscribe(business => this.business = business);
  }

  goBack(): void {
    this.location.back();

  }
}
