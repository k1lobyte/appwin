import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { User }     from './../user';
import { UserService }   from './../api.user.service';

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
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    console.log('Lets see some employees!\n');
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser.accessLevel === 'Admin') {
      this.UserService.getUsersByAccessLevelAndBusiness(currentUser.company_id, 'Admin').then(employees => this.employees = employees);
    }
  }
}
