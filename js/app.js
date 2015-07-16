var app = angular.module('cvGBernard', ['ngRoute', 'ngAnimate', 'ngMaterial'])

.config(function($routeProvider, $mdThemingProvider) {
	$routeProvider
		.when('/', {templateUrl: 'template/index.html', controller: 'cvCtrl'})
		.otherwise({redirectTo: '/'});

	var greyModPal = $mdThemingProvider.extendPalette('grey', {
		'50': 'ffffff'
	});
	$mdThemingProvider.definePalette('greyMod', greyModPal);

	$mdThemingProvider.theme('default')
		.primaryPalette('blue', {
			'default': '500',
			'hue-1': '100',
			'hue-2': '300',
			'hue-3': '700'
		})
		.backgroundPalette('greyMod', {
			'default': '300',
			'hue-1': '50'
		});
});