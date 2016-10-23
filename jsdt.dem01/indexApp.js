/**
 * indexApp.js
 */

// module
var app = angular.module('jsdtApp', ['ngRoute']);

// configure routes
app.config(function($routeProvider) {
	$routeProvider
	// route for the home page
	.when('/', {
		templateUrl : 'pages/home.html',
		controller : 'mainController'
	})
	// route for the about page
	.when('/about', {
		templateUrl : 'pages/about.html',
		controller : 'aboutController'
	})
	// route for the contact page
	.when('/contact', {
		templateUrl : 'pages/contact.html',
		controller : 'contactController'
	});
});

// controllers with injected angular $scope

app.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Come to learn more about JSDT at https://wiki.eclipse.org/JSDT';
});

app.controller('aboutController', function($scope) {
    $scope.message = 'The JavaScript Development Tools (JSDT) provide plug-ins that implement an IDE supporting the development of JavaScript applications and JavaScript within web applications.';
});

app.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});