app.controller('cvCtrl', function($scope, $mdSidenav) {
	$scope.toggleLeft = toggleSidenav('left');
	$scope.toggleRight = toggleSidenav('right');

	function toggleSidenav(navId) {
		return function() {
			return $mdSidenav(navId).toggle().then(function(){
				console.log('done');
			});
		}
	};

	$scope.menuItems = [
		{
			type : '',
			icon : 'img/icons/ic_person_outline.svg',
			text : 'Actuellement étudiant en 5ème année à l\'Exia.Cesi de Saint-Nazaire, je prépare un diplôme d\'ingénieur CESI spécialité informatique.',
			mail : false,
		}, {
			type : 'Mobile',
			icon : 'img/icons/ic_call.svg',
			text : '+33 (0) 6 59 47 88 86 ',
			mail : false,
		}, {
			type : 'E-mail',
			icon : 'img/icons/ic_email.svg',
			text : 'gwilherm.bernard@gmail.com',
			mail : true,
		}, {
			type : 'France',
			icon : 'img/icons/ic_map.svg',
			text : 'Saint-Brevin-les-Pins (44)',
			mail : false,
		},
	];

	$scope.employments = [
		{
			subtitle : 'Playmoweb, Angers - Développement d\'applications mobiles (stage)',
			date : '2014 - 2015 (5 mois)',
			desc : 'Création d\'applications mobiles iOS avec Cordova et AngularJs et correction de bugs sur application Android',
			logo : 'img/logo-playmoweb.png',
			logo_alt : 'logo-playmoweb',
			last : false,
		},{
			subtitle : 'Pour Qui Pourquoi, Angers - Développement web (CDD)',
			date : '2014 (2 mois)',
			desc : 'Création de divers sites web pour une agence de communication',
			logo : 'img/logo-pqp.jpg',
			logo_alt : 'logo-pqp',
			last : false,
		},{
			subtitle : 'Pour Qui Pourquoi, Angers - Développement web (stage)',
			date : '2014 (2,5 mois)',
			desc : 'Création de divers sites web pour une agence de communication',
			logo : 'img/logo-pqp.jpg',
			logo_alt : 'logo-pqp',
			last : false,
		},{
			subtitle : 'Productys, Saint-Nazaire - Développement .net (stage)',
			date : '2013 (2,5 mois)',
			desc : 'Restructuration et migration d\'un logiciel vers un serveur de versionnement',
			logo : 'img/logo-prod.jpg',
			logo_alt : 'logo-productys',
			last : false,
		},{
			subtitle : 'Hors-Ligne, Guérande - Développement web (stage)',
			date : '2012 (3 mois)',
			desc : 'Création de sites web version bureau et mobile',
			logo : 'img/logo-hl.png',
			logo_alt : 'logo-hors-lignes',
			last : true,
		},
	];

	$scope.skills = [{
		name : 'HTML5/CSS3',
		score : 80
	}, {
		name : 'Javascript',
		score : 70
	}, {
		name : 'PHP',
		score : 60
	}, {
		name : 'C#',
		score : 60
	}, {
		name : 'Java/Android',
		score : 80
	}, {
		name : 'AngularJS',
		score : 70
	}, {
		name : 'Cordova',
		score : 70
	}];
});