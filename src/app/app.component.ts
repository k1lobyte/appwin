import { Component } from '@angular/core';
import { MainMenu } from './main-menu.component';

@Component({
  selector: 'my-app',
  template: `
      <div class="container-fluid"><h1>{{name}}</h1></div>
      <main-menu></main-menu>
      <router-outlet class="col-xs-12 col-sm-10"><router-outlet>
    `,
})
export class AppComponent  { name = 'AppWin'; }
