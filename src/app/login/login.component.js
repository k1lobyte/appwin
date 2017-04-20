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
var api_user_service_1 = require("./../api.user.service");
var auth_service_1 = require("./../auth.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var router_2 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(userService, authService, router, route, location) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.loading = false;
        this.model = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        // Reset login status
        this.authService.logout();
        // Get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authService.login(this.model.username, this.model.password)
            .then(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            // ERROR MESSAGE
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './login.component.html'
    }),
    __metadata("design:paramtypes", [api_user_service_1.UserService,
        auth_service_1.AuthService,
        router_2.Router,
        router_1.ActivatedRoute,
        common_1.Location])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map