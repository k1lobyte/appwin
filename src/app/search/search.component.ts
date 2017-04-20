import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Business }     from './../business/business';
import { BusinessService} from './../business/api.business.service';

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

    constructor(
      private router: Router,
      private businessService: BusinessService) { }

    ngOnInit(): void {
      console.log('Get Businesses Called');
     this.getBusinesses();
    }

    getBusinesses(): void {
      this.businessService.getBusinesses().then(businesses => this.businesses = businesses);
    }

    onSelect(business: Business): void {
      this.router.navigate(['/business', business.id]);
    }
}
