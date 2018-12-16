var myapp = angular.module('myApp',['ngRoute','firebase']);

myapp.config(['$routeProvider',function($routeProvider){
	
	$routeProvider
	    .when('/home',{
			templateUrl:'views/home.html',
			controller:'homeControl'
		})

		.when('/students',{
			templateUrl:'views/students.html',
			controller:'listControl'
		})
		.when('/students/:id',{
			templateUrl:'views/edit.html',
			controller:'editControl'
		})

		.otherwise({
			redirectTo:'/home'
		})
}])

myapp.controller('myControl',['$scope',function($scope){
	console.log("home");
	
}])