app.controller('cadeauxCtrl', function($scope, $http, $mdDialog) {
	$scope.user = {
		name: "",
		mail: ""
	};

	$scope.master = {};

	$http.get('/secretsanta/data/users').then(function(data){
		$scope.Users = data.data;
		console.log($scope.Users);
	});


	$scope.saveInfos = function(name, mail, ev){
		/*console.log(name);*/
		/*console.log(mail);*/
		/*console.log(ev);*/

		var verifMail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail);

		var searchField = "mail";
		var alreadyMail = true;
		for (var i = 0; i < $scope.Users.length; i++) {
			if($scope.Users[i][searchField] == mail){
				alreadyMail = false;
			}
		};

		if(name == "" || mail == "" || verifMail == false || alreadyMail == false){
			/*Do nothing*/
		}else{
			/*Send the data*/
			$scope.Users.push({'name': name, 'mail': mail});

			$http.post("/secretsanta/save.php", $scope.Users).
				success(function(data, status, headers, config){
					$scope.showAlert(ev);
				}).
				error(function(data, status, headers, config){
					console.log('data : ');
					console.log(data);
					console.log('status : ');
					console.log(status);
					console.log('headers : ');
					console.log(headers);
					console.log('config : ');
					console.log(config);
				});
		}

		

		
	};

	$scope.showAlert = function(ev){
		$mdDialog.show({
			targetEvent: ev,
			controller: 'DialogController',
			templateUrl: '/secretsanta/template/dialog-template.html'
		}).then(function(){
			$scope.user = {
				name: "",
				mail: ""
			};
		});
	};
})

.controller('DialogController', function($scope, $mdDialog) {
	$scope.closeDialog = function() {
		$mdDialog.hide();
	};
});