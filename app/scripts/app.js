'use strict';
(function(){
	
	this.config(['$routeProvider',
	     function($routeProvider){
		
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
	
}).call(angular.module('app', ['ngCookies', 'ngResource', 'ngRoute', 'ngSanitize']));
