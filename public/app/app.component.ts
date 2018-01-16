import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  { 
  user: User;
  
  constructor(private userService: UserService) { }
  
  getUser(): void {
    this.userService.getUser().subscribe(user => this.user = user);
  }
  
  ngOnInit() {
    this.getUser();
  }
}


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