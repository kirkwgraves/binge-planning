app.controller('WelcomeCtrl', ['Auth', '$uibModal', '$location', function(Auth, $uibModal, $location) {

	var self = this;

	self.logout = function() {
		console.log('logging out');
		Auth.$unauth();
		$location.path('/');
	};

	self.showLoginForm = function() {
		$uibModal.open({
			templateUrl: 'partials/login.html',
			controller: 'LoginCtrl as loginCtrl'
		}); 
	};

	self.showRegisterForm = function() {
		$uibModal.open({
			templateUrl: 'partials/register.html',
			controller: 'RegisterCtrl as registerCtrl'
		});
	};

}]);