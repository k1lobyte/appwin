"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var mock_services_1 = require("./mock-services");
var core_1 = require("@angular/core");
var ServicesService = (function () {
    function ServicesService() {
    }
    ServicesService.prototype.getServices = function () {
        return Promise.resolve(mock_services_1.SERVICES);
    };
    ServicesService.prototype.getService = function (id) {
        return this.getServices()
            .then(function (services) { return services.find(function (service) { return service.id === id; }); });
    };
    ServicesService.prototype.getServicesByBusinessId = function (businessId) {
        return this.getServices()
            .then(function (services) { return services.filter(function (service) { return service.businessId === businessId; }); });
    };
    return ServicesService;
}());
ServicesService = __decorate([
    core_1.Injectable()
], ServicesService);
exports.ServicesService = ServicesService;
//# sourceMappingURL=services.service.js.map