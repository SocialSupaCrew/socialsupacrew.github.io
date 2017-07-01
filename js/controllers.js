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
			text : 'Développeur Android chez Bankin\'.',
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
			text : 'Paris (75)',
			mail : false,
		},
	];

	$scope.employments = [
		{
			subtitle : 'Bankin\', Paris - Développement Android (CDI)',
			date : '2016 - Aujoud\'hui',
			desc : 'Développement de l\'application Android Bankin\'. Ajout de nouvelles fonctionnalités, correction de bugs...',
			logo : 'img/logo-bankin.png',
			logo_alt : 'logo-bankin',
			last : false,
			url : "http://www.bankin.com"
		},
		{
			subtitle : 'Bankin\', Paris - Développement Android (stage)',
			date : '2016 (6 mois)',
			desc : 'Développement de l\'application Android Bankin\'. Ajout de nouvelles fonctionnalités, correction de bugs...',
			logo : 'img/logo-bankin.png',
			logo_alt : 'logo-bankin',
			last : false,
			url : "http://www.bankin.com"
		},
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
			url : "http://www.pqp-communication.fr"
		},{
			subtitle : 'Pour Qui Pourquoi, Angers - Développement web (stage)',
			date : '2014 (2,5 mois)',
			desc : 'Création de divers sites web pour une agence de communication',
			logo : 'img/logo-pqp.jpg',
			logo_alt : 'logo-pqp',
			last : false,
			url : "http://www.pqp-communication.fr"
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
	self.isFabOpen = false;
	self.isTbOpen = false;
	self.count = 0;

	self.label = "fzesrgbtf";

	self.hidden = false;
	self.hover = false;

	$scope.$watch('fab.isFabOpen', function(isFabOpen) {
		if (isFabOpen) {
			$timeout(function() {
				$scope.tooltipVisible = self.isFabOpen;
			}, 600);
		} else {
			$scope.tooltipVisible = self.isFabOpen;
		}
	});

	self.items = [
	{
		name: "E-mail",
		icon: "img/icons/ic_email_black.svg",
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
		link: "doc/cv_gwilherm_bernard.pdf",
		mail: false
	}];

	$scope.openLink = function(item) {
		window.open(item.link);
		// console.log(item.link);
	};
});
