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
var auth_service_1 = require("./../auth.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var router_2 = require("@angular/router");
var MainMenu = (function () {
    function MainMenu(authService, router, route, location) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.location = location;
    }
    MainMenu.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    return MainMenu;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MainMenu.prototype, "user", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MainMenu.prototype, "loggedIn", void 0);
MainMenu = __decorate([
    core_1.Component({
        selector: 'main-menu',
        templateUrl: './main-menu.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        router_2.Router,
        router_1.ActivatedRoute,
        common_1.Location])
], MainMenu);
exports.MainMenu = MainMenu;
//# sourceMappingURL=main-menu.component.js.map