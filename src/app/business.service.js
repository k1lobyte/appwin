"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var mock_businesses_1 = require("./mock-businesses");
var core_1 = require("@angular/core");
var BusinessService = (function () {
    function BusinessService() {
    }
    BusinessService.prototype.getBusinesses = function () {
        return Promise.resolve(mock_businesses_1.BUSINESSES);
    };
    BusinessService.prototype.getBusiness = function (id) {
        return this.getBusinesses()
            .then(function (businesses) { return businesses.find(function (business) { return business.id === id; }); });
    };
    BusinessService.prototype.getBusinessByCode = function (code) {
        return this.getBusinesses()
            .then(function (businesses) { return businesses.find(function (business) { return business.code === code; }); });
    };
    return BusinessService;
}());
BusinessService = __decorate([
    core_1.Injectable()
], BusinessService);
exports.BusinessService = BusinessService;
//# sourceMappingURL=business.service.js.map