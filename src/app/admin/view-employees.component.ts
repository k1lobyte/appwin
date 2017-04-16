import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Router } from '@angular/router';

import { User }     from './../user';
import { UserService }   from './../user.service';

@Component({
  selector: 'view-employeess',
  templateUrl: './view-employees.component.html'
})

export class ViewEmployeesComponent implements OnInit {
  employees: User [];

  constructor(
    private UserService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
      // HARD CODED BUSINESS ID
      this.UserService.getUsersByAccessLevelAndBusiness(75, 'Employee').then(employees => this.employees = employees);
  }
}
