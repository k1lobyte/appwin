import { Component, OnInit }    from '@angular/core';
<<<<<<< HEAD
import { UserService }   from './../user.service';
=======
import { UserService }   from './../api.user.service';
>>>>>>> 86fc2b01b869d28fd4e979ab2820f1100fe76ab6
import { User } from './../user';
import { AuthService } from './../auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

<<<<<<< HEAD
export class LoginComponent implements OnInit{
=======
export class LoginComponent implements OnInit {
>>>>>>> 86fc2b01b869d28fd4e979ab2820f1100fe76ab6
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
