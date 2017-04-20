import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
<<<<<<< HEAD
=======

import { Headers, Http , HttpModule} from '@angular/http';
>>>>>>> 86fc2b01b869d28fd4e979ab2820f1100fe76ab6

import { AppComponent }  from './app.component';
import { AuthService } from './auth.service';
import { MainMenu } from './menu/main-menu.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent }   from './login/login.component';
import { UserService }  from './api.user.service';
import { BusinessDetailComponent } from './business/business-detail.component';
import { BusinessService }  from './business/api.business.service';
import { LoginGuard } from './guard/login.guard';
import { ServicesService }  from './service/api.services.service'
import { ScheduleAppointmentComponent }  from './schedule/schedule-appointment.component';
<<<<<<< HEAD
import { FeedbackService }  from './feedback/feedback.service';
import { AppointmentService }  from './appointment/appointment.service';
=======
import { FeedbackService }  from './feedback/api.feedback.service';
import { AppointmentService }  from './appointment/api.appointments.service';
>>>>>>> 86fc2b01b869d28fd4e979ab2820f1100fe76ab6
import { ViewAppointmentsComponent }  from './admin/view-appointments.component';
import { AppointmentDetailComponent }  from './appointment/appointment-detail.component';
import { TerminalComponent }    from './terminal/terminal.component';
import { TerminalService }      from './terminal/terminal.service';
import { AddEntryComponent }    from './terminal/addentry/add-entry.component';
import { ViewEmployeesComponent }   from './admin/view-employees.component';
import { ViewCustomersComponent }   from './admin/view-customers.component';
import { ViewQueueComponent } from './employee/viewqueue.component';
import { EmployeeComponent }    from './employee/employee.component';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule
=======
    FormsModule,
    HttpModule
>>>>>>> 86fc2b01b869d28fd4e979ab2820f1100fe76ab6
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
    ViewCustomersComponent,
    ViewQueueComponent,
    EmployeeComponent,
  ],

  providers: [ AuthService, LoginGuard, BusinessService, ServicesService, FeedbackService,
<<<<<<< HEAD
       AppointmentService, TerminalService, UserService ],
=======
       AppointmentService, TerminalService, UserService, HttpModule ],
>>>>>>> 86fc2b01b869d28fd4e979ab2820f1100fe76ab6

  bootstrap:    [ AppComponent ]
})

export class AppModule { }
