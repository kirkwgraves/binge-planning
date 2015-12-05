app.controller('LoginCtrl', ['Auth', '$firebaseAuth', '$location', 'userFactory', '$uibModalInstance', function(Auth, $firebaseAuth, $location, userFactory, $uibModalInstance) {

	var self = this;
	var userId;


	self.login = function() {
		Auth.$authWithPassword({
			email: self.email,
			password: self.password
		}).then(function(authData) {
			console.log('Logged in as: ', authData.uid);
			userFactory.setUser(authData);
			userId = authData.password.email;
			console.log('userId', userId);
			$uibModalInstance.close('close');
			// $location.path('/');
		}).catch(function(error) {
			self.error = error;
			console.log('Authentication failed: ', error);
		});
	};

	self.logout = function() {
		console.log('logging out');
		Auth.$unauth();
		$location.path('/');
	};


}]); // End AuthCtrl