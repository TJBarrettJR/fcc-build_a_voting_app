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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("./user.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(userService) {
        this.userService = userService;
    }
    AppComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.signIn().subscribe(function (user) { return _this.user = user; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/* angular.module('main').component('main', {
  template:
    '<div>' +
      '{{user}}' +
    '</div>' +
    '<button type="submit" class="btn btn-primary" ng-click="createUser()">' +
      'Add' +
    '</button>',
  controller: function mainController($scope, $http) {
    $scope.formData = {};

    $scope.user = {worked: true};
    
    /*$http.get('/api/users')
      .success(function(data) {
        $scope.user = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error ' + data);
      });

    $scope.createUser = function() {
      $http.post('/api/users')
        .success(function(data) {
          $scope.user = data;
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };
  }
}); */ 
//# sourceMappingURL=app.component.js.map