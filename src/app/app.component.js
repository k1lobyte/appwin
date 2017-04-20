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
var auth_service_1 = require("./auth.service");
<<<<<<< HEAD
var business_service_1 = require("./business/business.service");
=======
var api_business_service_1 = require("./business/api.business.service");
>>>>>>> 86fc2b01b869d28fd4e979ab2820f1100fe76ab6
var AppComponent = (function () {
    function AppComponent(authService, businessService) {
        var _this = this;
        this.authService = authService;
        this.businessService = businessService;
        this.name = 'AppWin';
        this.logoURL = 'app/imgs/appwinLogo.small.png';
        this.loggedIn = false;
        // Subscribe to user
        this.subscription = this.authService.getUser().subscribe(function (o) {
            if (o !== undefined) {
                // Get the user data
                _this.user = JSON.parse(o.userData);
                _this.loggedIn = true;
                //console.log(this.user);
                // Load the users' associated business
                if (_this.user.accessLevel === 'Admin' || _this.user.accessLevel === 'Employee') {
                    _this.businessService.getBusiness(_this.user.company_id).then(function (business) { return _this.business = business; });
                }
            }
            else {
                _this.loggedIn = false;
            }
        });
    }
    AppComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n      <div class=\"container-fluid\" style=\"margin:10px 0px;\">\n        <img src=\"{{logoURL}}\" alt=\"{{name}}\">\n          <div class=\"jumbotron\" *ngIf=\"loggedIn && business\">\n            <h1>{{business.name}}</h1>\n            <p>{{business.description}}</p>\n          </div>\n      </div>\n      <main-menu [loggedIn]=\"loggedIn\" [user]=\"user\"></main-menu>\n      <router-outlet class=\"col-xs-12 col-sm-10\"><router-outlet>\n      "
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
<<<<<<< HEAD
        business_service_1.BusinessService])
=======
        api_business_service_1.BusinessService])
>>>>>>> 86fc2b01b869d28fd4e979ab2820f1100fe76ab6
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map