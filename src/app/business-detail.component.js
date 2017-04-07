"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");

var router_2 = require("@angular/router");
var business_service_1 = require("./business.service");
var services_service_1 = require("./services.service");
var BusinessDetailComponent = (function () {
    function BusinessDetailComponent(businessService, servicesService, router, route, location) {
        this.businessService = businessService;
        this.servicesService = servicesService;
        this.router = router;


    BusinessDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.businessService.getBusinessByCode(params['code']); })

            .subscribe(function (business) { return _this.getService(business); });
    };
    BusinessDetailComponent.prototype.getService = function (business) {
        var _this = this;
        this.business = business;
        this.servicesService.getServicesByBusinessId(this.business.id).then(function (services) { return _this.services = services; });
    };
    BusinessDetailComponent.prototype.onSelect = function (service) {
        this.router.navigate(['/schedule-appointment', this.business.id, service.id]);

            .subscribe(function (business) { return _this.business = business; });
    };
    BusinessDetailComponent.prototype.goBack = function () {
        this.location.back();

    };
    return BusinessDetailComponent;
}());
BusinessDetailComponent = __decorate([
    core_1.Component({
        selector: 'business-detail',

        templateUrl: './business-detail.component.html',
        styles: ["\n    .list-group-item {\n      display:flex;\n      justify-content:space-between;\n      align-items:center;\n    }"]
    }),
    __metadata("design:paramtypes", [business_service_1.BusinessService,
        services_service_1.ServicesService,
        router_2.Router,

        templateUrl: './business-detail.component.html'
    }),
    __metadata("design:paramtypes", [business_service_1.BusinessService,

        router_1.ActivatedRoute,
        common_1.Location])
], BusinessDetailComponent);
exports.BusinessDetailComponent = BusinessDetailComponent;
//# sourceMappingURL=business-detail.component.js.map