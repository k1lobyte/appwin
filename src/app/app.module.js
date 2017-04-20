"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var auth_service_1 = require("./auth.service");
var main_menu_component_1 = require("./menu/main-menu.component");
var search_component_1 = require("./search/search.component");
var login_component_1 = require("./login/login.component");
var user_service_1 = require("./user.service");
var business_detail_component_1 = require("./business/business-detail.component");
var api_business_service_1 = require("./business/api.business.service");
var login_guard_1 = require("./guard/login.guard");
var api_services_service_1 = require("./service/api.services.service");
var schedule_appointment_component_1 = require("./schedule/schedule-appointment.component");
var api_feedback_service_1 = require("./feedback/api.feedback.service");
var api_appointments_service_1 = require("./appointment/api.appointments.service");
var view_appointments_component_1 = require("./admin/view-appointments.component");
var appointment_detail_component_1 = require("./appointment/appointment-detail.component");
var terminal_component_1 = require("./terminal/terminal.component");
var terminal_service_1 = require("./terminal/terminal.service");
var add_entry_component_1 = require("./terminal/addentry/add-entry.component");
var view_employees_component_1 = require("./admin/view-employees.component");
var view_customers_component_1 = require("./admin/view-customers.component");
var viewqueue_component_1 = require("./employee/viewqueue.component");
var employee_component_1 = require("./employee/employee.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            main_menu_component_1.MainMenu,
            search_component_1.SearchComponent,
            login_component_1.LoginComponent,
            business_detail_component_1.BusinessDetailComponent,
            schedule_appointment_component_1.ScheduleAppointmentComponent,
            view_appointments_component_1.ViewAppointmentsComponent,
            appointment_detail_component_1.AppointmentDetailComponent,
            terminal_component_1.TerminalComponent,
            add_entry_component_1.AddEntryComponent,
            view_employees_component_1.ViewEmployeesComponent,
            view_customers_component_1.ViewCustomersComponent,
            viewqueue_component_1.ViewQueueComponent,
            employee_component_1.EmployeeComponent,
        ],
        providers: [auth_service_1.AuthService, login_guard_1.LoginGuard, api_business_service_1.BusinessService, api_services_service_1.ServicesService, api_feedback_service_1.FeedbackService,
            api_appointments_service_1.AppointmentService, terminal_service_1.TerminalService, user_service_1.UserService, http_1.HttpModule],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map