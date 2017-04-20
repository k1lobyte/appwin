import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MainMenu } from './menu/main-menu.component';
import { User } from './user'
import { AuthService } from './auth.service';
import { BusinessService } from './business/api.business.service';

@Component({
  selector: 'my-app',
  template: `
      <div class="container-fluid" style="margin:10px 0px;">
        <img src="{{logoURL}}" alt="{{name}}">
          <div class="jumbotron" *ngIf="loggedIn && business">
            <h1>{{business.name}}</h1>
            <p>{{business.description}}</p>
          </div>
      </div>
      <main-menu [loggedIn]="loggedIn" [user]="user"></main-menu>
      <router-outlet class="col-xs-12 col-sm-10"><router-outlet>
      `
})

export class AppComponent{
  user: any;
  business: any;
  loggedIn: Boolean;
  subscription: Subscription;

  name = 'AppWin';
  logoURL = 'app/imgs/appwinLogo.small.png';

  constructor(
    private authService: AuthService,
    private businessService: BusinessService
  ){
    this.loggedIn = false;
    // Subscribe to user
    this.subscription = this.authService.getUser().subscribe(o => {
      if (o !== undefined){
        // Get the user data
        this.user = JSON.parse(o.userData);
        this.loggedIn = true;
        //console.log(this.user);

        // Load the users' associated business
        if (this.user.accessLevel === 'Admin' || this.user.accessLevel === 'Employee'){
          this.businessService.getBusiness(this.user.company_id).then(business => this.business = business);
        }
      }else{
        this.loggedIn = false;
      }
    });
  }

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
