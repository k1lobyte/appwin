import { Component } from '@angular/core';
import { MainMenu } from './main-menu.component';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="text-center">Hello {{name}}</h1>
    <main-menu></main-menu>
    <router-outlet><router-outlet>
    `,
})
export class AppComponent  { name = 'AppWin'; }
