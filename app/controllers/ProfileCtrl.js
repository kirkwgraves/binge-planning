app.controller('ProfileCtrl', ['$routeParams', '$firebaseArray', 'userFactory', '$http', 
	function($routeParams, $firebaseArray, userFactory, $http) {

	var self = this;

	self.showsArray =	userFactory.getUserShows();	
	console.log('self.showsArray', self.showsArray);
	

}]); // End ProfileCtrl