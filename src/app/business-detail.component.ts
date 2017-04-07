import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Business }     from './business';
import { BusinessService}   from './business.service';

@Component({
  selector: 'business-detail',
  templateUrl: './business-detail.component.html'
})

export class BusinessDetailComponent implements OnInit {
  business: Business;

  constructor(
    private businessService: BusinessService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.businessService.getBusinessByCode(params['code']))
      .subscribe(business => this.business = business);
  }

  goBack(): void {
    this.location.back();
  }
}
