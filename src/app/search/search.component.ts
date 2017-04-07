import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Business }     from './../business/business';
import { BusinessService} from './../business/business.service';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styles: [`
        .panel {
            margin: 5px;
        }
    `]
})

export class SearchComponent implements OnInit {
    businesses: Business[];
    selectedBusiness: Business;

    constructor(
      private router: Router,
      private businessService: BusinessService) { }

    ngOnInit(): void {
     this.getBusinesses();
    }

    getBusinesses(): void {
      this.businessService.getBusinesses().then(businesses => this.businesses = businesses);
    }

    onSelect(business: Business): void {
      this.selectedBusiness = business;
      this.router.navigate(['/business', this.selectedBusiness.code]);

    }



}
