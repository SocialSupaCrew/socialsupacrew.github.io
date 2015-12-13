var app = angular.module('cadeauxNoel', ['ngRoute', 'ngAnimate', 'ngMaterial'])

.config(function($routeProvider) {
	$routeProvider

	.when('/', {templateUrl: 'template/index.html', controller: 'cadeauxCtrl'})

	.otherwise({redirectTo: '/'});
});