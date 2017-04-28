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
var core_1 = require('@angular/core');
var restaurant_service_1 = require('./todo.service');
var AppComponent = (function () {
    function AppComponent(restaurantService) {
        this.restaurantService = restaurantService;
    }
    AppComponent.prototype.getRestaurants = function () {
        var _this = this;
        this.restaurantService.getRestaurants().then(function (Restaurants) { return _this.restaurants = restaurants; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getRestaurants();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>NodeRestaurants</h1>\n  <ul>\n      <li *ngFor=\"let todo of todos\">\n        {{todo.todo}} - {{todo.isDone}}\n      </li>\n    </ul>",
            providers: [todo_service_1.TodoService]
        }),
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
