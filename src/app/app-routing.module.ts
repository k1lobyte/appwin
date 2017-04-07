import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { LoginComponent }   from './login/login.component';
import { BusinessDetailComponent }   from './business/business-detail.component';
import { LoginGuard }       from './guard/login.guard';

import { ScheduleAppointmentComponent }   from './schedule/schedule-appointment.component';



const routes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
    { path: 'login', component: LoginComponent },
    { path: 'business/:code', component: BusinessDetailComponent },

    { path: 'schedule-appointment/:businessid/:serviceid',
            component: ScheduleAppointmentComponent,
            canActivate: [LoginGuard]},

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
