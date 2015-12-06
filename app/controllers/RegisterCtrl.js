app.controller('RegisterCtrl', ['Auth', '$firebaseAuth', '$location', '$uibModal', '$uibModalInstance',
	function(Auth, $firebaseAuth, $location, $uibModal, $uibModalInstance) {

	var self = this;

	self.register = function() {
		Auth.$createUser({
			firstName: self.firstName,
			lastName: self.lastName,
			email: self.email,
			password: self.password
		}).then(function(userData) {
			console.log('User created with uid: ', userData.uid);
			$uibModalInstance.close('close');
			// $location.path('/');
		}).catch(function(error) {
			self.error = error;
			console.log('Error: ', error);
		});
	};

	self.removeUser = function() {

		self.message = null;
		self.error = null;

		Auth.$removeUser({
			email: self.email,
			password: self.password
		}).then(function() {
			self.message = 'User removed!';
			console.log('self.message', self.message);
			self.email = null;
			self.password = null;
			$location.path('/');
		}).catch(function(error) {
			self.error = error;
			console.log('User not removed due to: ', error);
		});
	};

}]);