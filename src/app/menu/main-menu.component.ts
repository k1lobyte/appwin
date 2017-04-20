import { Component, Input } from '@angular/core';
import { AuthService } from './../auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'main-menu',
    templateUrl: './main-menu.component.html'
})

export class MainMenu{
  @Input() user: any;
  @Input() loggedIn: Boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ){}

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
