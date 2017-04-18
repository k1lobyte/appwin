import { Injectable } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router, RouterStateSnapshot, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(
      private router: Router,
      private authService: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(localStorage.getItem('currentUser')) {
          return true;
        }else{
          this.router.navigate(['/login']);
          return false;
        }
    }
}
