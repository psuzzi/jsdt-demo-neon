var app = angular.module('MyApp', []);

function debugMe(){
	alert('Debug Me!');
	var user = processUser($scope.name);
	var enable = processData($scope.name);
	alert('name='+user+'&enable='+enable);
}

function processUser(user){
	//
	return 'processed ' + user;
}

function processData(user){
	//
	if(user=='World')
		return true;
	return false;
}

app.controller('UserCtrl', function($scope, $http) {

	$scope.message = 'init';

	loadData();

	$scope.refresh = function() {
		loadData();
	};
	
	function debug(){
		debugMe();
	}

	function loadData() {
		// get data via http get
		$http.get('http://localhost:8080/jsdt.dem03/list').then(function(res) {
			// set received data
			$scope.users = res.data;
		});
	};
	
	$scope.add = function () {
		var user = processUser($scope.name);
		var enable = processData($scope.name);
		alert('add: ' + $scope.name);
		$http.get('http://localhost:8080/jsdt.dem03/add?name='+user+'&enable='+enable).then(function(res) {
			$scope.message = res.data;
			loadData();
		});
	};
	
	$scope.addData = function () {
		$http.get('http://localhost:8080/jsdt.dem03/adddata').then(function(res) {
			$scope.message = res.data;
			loadData();
		});
	};
	
	$scope.clear = function () {
		$http.get('http://localhost:8080/jsdt.dem03/clear').then(function(res) {
			$scope.message = res.data;
			loadData();
		});
	};

});
