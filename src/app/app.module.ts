import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { MainMenu } from './main-menu.component';
import { SearchComponent } from './search.component';
import { LoginComponent }   from './login.component';
import { BusinessDetailComponent} from './business-detail.component';
import { BusinessService }  from './business.service'

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
    BusinessDetailComponent
  ],
  providers: [ BusinessService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
