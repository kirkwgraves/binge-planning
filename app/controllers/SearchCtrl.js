app.controller('SearchCtrl', ['$http', function($http) {

	var self = this;
	var pendingTask;

	self.search = null;

	function fetch() {
		$http.get('http://www.omdbapi.com/?t=' + 
			self.search + '&tomatoes=true&plot=full')
		.success(function(response) {
			self.showDetails = response;
			console.log('self.showDetails', self.showDetails);
		});
	}

	self.change = function() {
		if (pendingTask) {
			clearTimeout(pendingTask);
		}
		pendingTask = setTimeout(fetch, 800);
	};






















}]); // End SearchCtrl