import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Router } from '@angular/router';

import { User }     from './../user';
import { UserService }   from './../user.service';

@Component({
  selector: 'view-customers',
  templateUrl: './view-customers.component.html'
})

export class ViewCustomersComponent implements OnInit {
  customers: User [];

  constructor(
    private UserService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
      // HARD CODED BUSINESS ID
      this.UserService.getUsersByAccessLevelAndBusiness('empID1', 'Guest').then(customers => this.customers = customers);
  }
}
