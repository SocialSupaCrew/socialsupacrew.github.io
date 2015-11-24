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
			text : 'Étudiant en 5e année à l\'Exia.Cesi de Saint-Nazaire, je prépare un diplôme d\'ingénieur CESI spécialité informatique.',
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
			url : "http://www.playmoweb.com"
		},{
			subtitle : 'Pour Qui Pourquoi, Angers - Développement web (CDD)',
			date : '2014 (2 mois)',
			desc : 'Création de divers sites web pour une agence de communication',
			logo : 'img/logo-pqp.jpg',
			logo_alt : 'logo-pqp',
			last : false,
			url : "http://www.pourquipourquoi.fr"
		},{
			subtitle : 'Pour Qui Pourquoi, Angers - Développement web (stage)',
			date : '2014 (2,5 mois)',
			desc : 'Création de divers sites web pour une agence de communication',
			logo : 'img/logo-pqp.jpg',
			logo_alt : 'logo-pqp',
			last : false,
			url : "http://www.pourquipourquoi.fr"
		},{
			subtitle : 'Productys, Saint-Nazaire - Développement .net (stage)',
			date : '2013 (2,5 mois)',
			desc : 'Restructuration et migration d\'un logiciel vers un serveur de versionnement',
			logo : 'img/logo-prod.jpg',
			logo_alt : 'logo-productys',
			last : false,
			url : "http://www.productys.com"
		},{
			subtitle : 'Hors-Ligne, Guérande - Développement web (stage)',
			date : '2012 (3 mois)',
			desc : 'Création de sites web version bureau et mobile',
			logo : 'img/logo-hl.png',
			logo_alt : 'logo-hors-lignes',
			last : true,
			url : "http://www.hors-lignes.com"
		},
	];

	$scope.skills = [
	{
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

app.controller('FabCtrl', function($scope, $timeout){
	var self = this;
	self.isOpen = false;

	self.hidden = false;
	self.hover = false;

	$scope.$watch('fab.isOpen', function(isOpen) {
		if (isOpen) {
			$timeout(function() {
				$scope.tooltipVisible = self.isOpen;
			}, 600);
		} else {
			$scope.tooltipVisible = self.isOpen;
		}
	});

	self.items = [
	{
		name: "E-mail",
		icon: "img/icons/ic_email.svg",
		direction: "left",
		link: "mailto:gwilherm.bernard@gmail.com",
		mail: true
	}, {
		name: "GitHub",
		icon: "img/icons/ic_github.svg",
		direction: "left",
		link: "https://github.com/SocialSupaCrew",
		mail: false
	}, {
		name: "CV PDF",
		icon: "img/icons/ic_download.svg",
		direction: "left",
		link: "doc/cv.pdf",
		mail: false
	}];

	$scope.openLink = function(item) {
		window.open(item.link);
		// console.log(item.link);
	};
});