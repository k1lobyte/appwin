import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { MainMenu } from './main-menu.component';
import { SearchComponent } from './search.component';
import { LoginComponent }   from './login.component';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    MainMenu,
    SearchComponent,
    LoginComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
