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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var business_service_1 = require("./../business/business.service");
var SearchComponent = (function () {
    function SearchComponent(router, businessService) {
        this.router = router;
        this.businessService = businessService;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.getBusinesses();
    };
    SearchComponent.prototype.getBusinesses = function () {
        var _this = this;
        this.businessService.getBusinesses().then(function (businesses) { return _this.businesses = businesses; });
    };
    SearchComponent.prototype.onSelect = function (business) {
        this.selectedBusiness = business;
        this.router.navigate(['/business', this.selectedBusiness.code]);
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        templateUrl: './search.component.html',
        styles: ["\n        .panel {\n            margin: 5px;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        business_service_1.BusinessService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map