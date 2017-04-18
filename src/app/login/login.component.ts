import { Component, OnInit }    from '@angular/core';
import { UserService }   from './../user.service';
import { User } from './../user';
import { AuthService } from './../auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: "login",
    templateUrl: "./login.component.html"
})

export class LoginComponent implements OnInit{
  loading = false;
  model = {
    username: '',
    password: ''
  }
  returnUrl: String;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
      // Reset login status
      this.authService.logout();
      // Get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
      this.loading = true;
      this.authService.login(this.model.username, this.model.password)
          .then(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  // ERROR MESSAGE
                  this.loading = false;
          });
    }
}
