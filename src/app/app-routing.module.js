"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var search_component_1 = require("./search/search.component");
var login_component_1 = require("./login/login.component");
var business_detail_component_1 = require("./business/business-detail.component");
var login_guard_1 = require("./guard/login.guard");
var terminal_component_1 = require("./terminal/terminal.component");
var add_entry_component_1 = require("./terminal/addentry/add-entry.component");
var schedule_appointment_component_1 = require("./schedule/schedule-appointment.component");
var view_appointments_component_1 = require("./admin/view-appointments.component");
var view_employees_component_1 = require("./admin/view-employees.component");
var view_customers_component_1 = require("./admin/view-customers.component");
var viewqueue_component_1 = require("./employee/viewqueue.component");
var employee_component_1 = require("./employee/employee.component");
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'search', component: search_component_1.SearchComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'about', redirectTo: '/login' },
    { path: 'business/:id', component: business_detail_component_1.BusinessDetailComponent },
    { path: 'schedule-appointment/:businessid/:serviceid',
        component: schedule_appointment_component_1.ScheduleAppointmentComponent,
        canActivate: [login_guard_1.LoginGuard] },
    { path: 'view-appointments',
        component: view_appointments_component_1.ViewAppointmentsComponent,
        canActivate: [login_guard_1.LoginGuard] },
    { path: 'view-employees',
        component: view_employees_component_1.ViewEmployeesComponent,
        canActivate: [login_guard_1.LoginGuard] },
    { path: 'view-customers',
        component: view_customers_component_1.ViewCustomersComponent,
        canActivate: [login_guard_1.LoginGuard] },
    { path: 'terminal/:busID', component: terminal_component_1.TerminalComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: 'terminal/:busID/add-entry', component: add_entry_component_1.AddEntryComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: 'employee', component: employee_component_1.EmployeeComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: 'employee/view-queue', component: viewqueue_component_1.ViewQueueComponent, canActivate: [login_guard_1.LoginGuard] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map