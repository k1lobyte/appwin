import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { MainMenu } from './menu/main-menu.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent }   from './login/login.component';
import { UserService }  from './user.service'
import { BusinessDetailComponent } from './business/business-detail.component';
import { BusinessService }  from './business/business.service';
import { LoginGuard } from './guard/login.guard';
import { ServicesService }  from './service/services.service'
import { ScheduleAppointmentComponent }  from './schedule/schedule-appointment.component';
import { FeedbackService }  from './feedback/feedback.service';
import { AppointmentService }  from './appointment/appointment.service';
import { ViewAppointmentsComponent }  from './appointment/view-appointments.component';
import { AppointmentDetailComponent }  from './appointment/appointment-detail.component';
import { TerminalComponent }    from './terminal/terminal.component';
import { TerminalService }      from './terminal/terminal.service';
import { AddEntryComponent }    from './terminal/addentry/add-entry.component';
import { ViewEmployeesComponent }   from './admin/view-employees.component';
import { ViewCustomersComponent }   from './admin/view-customers.component';

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
    ViewAppointmentsComponent,
    AppointmentDetailComponent,
    TerminalComponent,
    AddEntryComponent,
    ViewEmployeesComponent,
    ViewCustomersComponent
  ],

  providers: [ LoginGuard, BusinessService, ServicesService, FeedbackService,
       AppointmentService, TerminalService, UserService ],

  bootstrap:    [ AppComponent ]
})

export class AppModule { }
