import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { LoginComponent }   from './login/login.component';
import { BusinessDetailComponent }   from './business/business-detail.component';
import { LoginGuard }       from './guard/login.guard';
import { TerminalComponent }    from './terminal/terminal.component';
import { AddEntryComponent }   from './terminal/addentry/add-entry.component';

import { ScheduleAppointmentComponent }   from './schedule/schedule-appointment.component';
import { ViewAppointmentsComponent }   from './appointment/view-appointments.component';

const routes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
    { path: 'login', component: LoginComponent },
    { path: 'business/:id', component: BusinessDetailComponent },
    { path: 'schedule-appointment/:businessid/:serviceid',
            component: ScheduleAppointmentComponent,
            canActivate: [LoginGuard]},
    { path: 'view-appointments',
            component: ViewAppointmentsComponent,
            canActivate: [LoginGuard]},
    { path: 'terminal', component: TerminalComponent, canActivate: [LoginGuard]},
    { path: 'terminal/add-entry', component: AddEntryComponent, canActivate: [LoginGuard]},

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
