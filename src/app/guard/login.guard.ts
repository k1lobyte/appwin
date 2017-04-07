import { Injectable } from '@angular/core';

import { Router, RouterStateSnapshot, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //if(LocalStorage.getItem('currentUser')) {
        //    return true;
        //}

        // if(false) {
        //     return true;
        // }

        this.router.navigate(['/login']);
        return false;
    }
}
