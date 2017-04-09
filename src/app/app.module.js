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
var app_component_1 = require("./app.component");
var main_menu_component_1 = require("./menu/main-menu.component");
var search_component_1 = require("./search/search.component");
var login_component_1 = require("./login/login.component");
var business_detail_component_1 = require("./business/business-detail.component");
var business_service_1 = require("./business/business.service");
var login_guard_1 = require("./guard/login.guard");
var services_service_1 = require("./service/services.service");
var schedule_appointment_component_1 = require("./schedule/schedule-appointment.component");
var feedback_service_1 = require("./feedback/feedback.service");
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
        ],
        declarations: [
            app_component_1.AppComponent,
            main_menu_component_1.MainMenu,
            search_component_1.SearchComponent,
            login_component_1.LoginComponent,
            business_detail_component_1.BusinessDetailComponent,
            schedule_appointment_component_1.ScheduleAppointmentComponent
        ],
        providers: [login_guard_1.LoginGuard, business_service_1.BusinessService, services_service_1.ServicesService, feedback_service_1.FeedbackService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map