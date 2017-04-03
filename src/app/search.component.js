"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BUSINESSES = [
    {
        id: 1,
        name: 'Please work',
        code: 'aldkfjaslkdfj',
        address: '1234 testing street',
    },
    {
        id: 2,
        name: 'other place',
        code: 'alsdkfjnrme',
        address: 'other address',
    },
    {
        id: 3,
        name: "Booby's hair place",
        code: "1231kl2jlkj",
        address: "1777 7th street"
    }
];
var SearchComponent = (function () {
    function SearchComponent() {
        this.businesses = BUSINESSES;
    }
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        templateUrl: './search.component.html',
        styles: ["\n        .panel {\n            margin: 5px;\n        }\n    "]
    })
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map