var app = angular.module('MyApp', []);

app.controller('UserCtrl', function($scope, $http) {

	$scope.message = 'init';


	$scope.read = function () {
		$http.get('http://localhost:3000/read').then(function(res) {
			$scope.read_lights = res.data.read_lights;
			$scope.read_temp = res.data.read_temp;
			$scope.set_lights = res.data.set_lights;
			$scope.read_lights = res.data.set_temp;
			// 
			$scope.message = 'data read';
		});
	};
	
	$scope.set = function (){
		var set_lights = $scope.set_lights;
		var set_temp = $scope.set_temp;
		$http.get('http://localhost:3000/set?set_lights='+set_lights+'&set_temp='+set_temp).then(function(res) {
			// if ok reload
			$scope.read();
			$scope.message = 'data set + reload';
		});
	};
	
	$scope.read();

});
