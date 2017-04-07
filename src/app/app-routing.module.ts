import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search.component';
import { LoginComponent }   from './login.component';
import { BusinessDetailComponent }   from './business-detail.component';
import { ScheduleAppointmentComponent }   from './schedule-appointment.component';

const routes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
    { path: 'login', component: LoginComponent },
    { path: 'business/:code', component: BusinessDetailComponent },
    { path: 'schedule-appointment/:businessid/:serviceid', component: ScheduleAppointmentComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
