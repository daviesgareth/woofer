angular.module('WooferApp', [
	'firebase',
	'ngRoute'
]).config(function($routeProvider){
	'use strict';
	$routeProvider
		.when('/home', {
			templateUrl : 'views/index.html',
			controller : 'IndexCtrl',
			controllerAs : 'index'
		})
		// .when('/inbox/email/:id', {
		// 	templateUrl : 'views/email.html',
		// 	controller : 'EmailCtrl',
		// 	controllerAs : 'email'
		// })
		.otherwise({
			redirectTo : '/home'
		});
	}).run(function($rootScope){
		$rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
			console.log(event, current, previous, rejection);
		});
	});