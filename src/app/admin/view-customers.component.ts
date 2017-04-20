import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { User }     from './../user';
import { UserService }   from './../api.user.service';

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
    private authService: AuthService
  ) {}

  ngOnInit(): void {
<<<<<<< HEAD
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser.accessLevel == 'Admin'){
=======
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser.accessLevel === 'Admin') {
>>>>>>> 86fc2b01b869d28fd4e979ab2820f1100fe76ab6
        this.UserService.getUsersByAccessLevelAndBusiness(currentUser.company_id, 'Guest').then(customers => this.customers = customers);
      }
  }
}
