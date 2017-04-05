import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search.component';
import { LoginComponent }   from './login.component';

const routes: Routes = [
    { path: 'search', component: SearchComponent },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
