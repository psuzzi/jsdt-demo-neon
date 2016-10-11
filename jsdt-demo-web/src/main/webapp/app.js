var App = angular.module('App', []);

App.controller('UserCtrl', function($scope, $http) {
  $http.get('http://localhost:8080/jsdt-demo-web/user')
       .then(function(res){
          $scope.todos = res.data;                
        });
});