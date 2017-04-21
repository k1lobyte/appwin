import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { LoginComponent }   from './login/login.component';
import { BusinessDetailComponent }   from './business/business-detail.component';
import { LoginGuard }       from './guard/login.guard';
import { TerminalComponent }    from './terminal/terminal.component';
import { AddEntryComponent }   from './terminal/addentry/add-entry.component';

import { ScheduleAppointmentComponent }   from './schedule/schedule-appointment.component';
import { ViewAppointmentsComponent }   from './admin/view-appointments.component';

import { ViewEmployeesComponent }   from './admin/view-employees.component';
import { ViewCustomersComponent }   from './admin/view-customers.component';

import { ViewQueueComponent }   from './employee/viewqueue.component';
import { EmployeeComponent }    from './employee/employee.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', redirectTo: '/login' },
    { path: 'business/:id', component: BusinessDetailComponent },
    { path: 'schedule-appointment/:businessid/:serviceid',
            component: ScheduleAppointmentComponent,
            canActivate: [LoginGuard]},
    { path: 'view-appointments',
            component: ViewAppointmentsComponent,
            canActivate: [LoginGuard]},
    { path: 'view-employees',
            component: ViewEmployeesComponent,
            canActivate: [LoginGuard]},
    { path: 'view-customers',
            component: ViewCustomersComponent,
            canActivate: [LoginGuard]},
    { path: 'terminal/:busID', component: TerminalComponent, canActivate: [LoginGuard]},
    { path: 'terminal/:busID/add-entry', component: AddEntryComponent, canActivate: [LoginGuard]},
    { path: 'employee', component: EmployeeComponent, canActivate: [LoginGuard]},
    { path: 'employee/view-queue', component: ViewQueueComponent, canActivate: [LoginGuard]},

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
