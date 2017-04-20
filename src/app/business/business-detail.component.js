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
var api_business_service_1 = require("./api.business.service");
var api_services_service_1 = require("./../service/api.services.service");
var feedback_service_1 = require("./../feedback/feedback.service");
var BusinessDetailComponent = (function () {
    function BusinessDetailComponent(businessService, servicesService, feedbackService, router, route, location) {
        this.businessService = businessService;
        this.servicesService = servicesService;
        this.feedbackService = feedbackService;
        this.router = router;
        this.route = route;
        this.location = location;
    }
    BusinessDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        console.log('The ID is ' + id);
        this.businessService.getBusiness(id)
            .then(function (business) { return _this.initialize(business); })
            .catch(this.handleError);
    };
    BusinessDetailComponent.prototype.initialize = function (business) {
        var _this = this;
        this.business = business;
        console.log('Please...');
        console.log(business);
        this.servicesService.getServicesByBusinessId(this.business.id).then(function (services) { return _this.services = services; });
        this.feedbackService.getFeedbackByBusinessId(this.business.id).then(function (feedback) { return _this.feedback = feedback; });
    };
    BusinessDetailComponent.prototype.onSelect = function (service) {
        this.router.navigate(['/schedule-appointment', this.business.id, service.id]);
    };
    BusinessDetailComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return BusinessDetailComponent;
}());
BusinessDetailComponent = __decorate([
    core_1.Component({
        selector: 'business-detail',
        templateUrl: './business-detail.component.html'
    }),
    __metadata("design:paramtypes", [api_business_service_1.BusinessService,
        api_services_service_1.ServicesService,
        feedback_service_1.FeedbackService,
        router_2.Router,
        router_1.ActivatedRoute,
        common_1.Location])
], BusinessDetailComponent);
exports.BusinessDetailComponent = BusinessDetailComponent;
//# sourceMappingURL=business-detail.component.js.map