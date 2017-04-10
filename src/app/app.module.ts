import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { MainMenu } from './menu/main-menu.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent }   from './login/login.component';
import { BusinessDetailComponent } from './business/business-detail.component';
import { BusinessService }  from './business/business.service';
import { LoginGuard } from './guard/login.guard';
import { ServicesService }  from './service/services.service'
import { ScheduleAppointmentComponent }  from './schedule/schedule-appointment.component';
import { FeedbackService }  from './feedback/feedback.service';
import { AppointmentService }  from './appointment/appointment.service';
import { ViewAppointmentsComponent }  from './appointment/view-appointments.component';

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
    BusinessDetailComponent,
    ScheduleAppointmentComponent,
    ViewAppointmentsComponent
  ],

  providers: [ LoginGuard, BusinessService, ServicesService, FeedbackService, AppointmentService ],

  bootstrap:    [ AppComponent ]
})

export class AppModule { }
