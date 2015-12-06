app.controller('LoginCtrl', ['Auth', '$firebaseAuth', '$location', 'userFactory', '$uibModal', '$uibModalInstance', function(Auth, $firebaseAuth, $location, userFactory, $uibModal, $uibModalInstance) {

	var self = this;
	var userId;


	self.login = function() {
		Auth.$authWithPassword({
			email: self.email,
			password: self.password
		}).then(function(authData) {
			console.log('Logged in as: ', authData.uid);
			userFactory.setUser(authData);
			self.loggedIn = true;
			userId = authData.password.email;
			console.log('userId', userId);
			$uibModalInstance.close('close');
			$location.path('/search');
		}).catch(function(error) {
			self.error = error;
			console.log('Authentication failed: ', error);
		});
	};


}]); // End LoginCtrl