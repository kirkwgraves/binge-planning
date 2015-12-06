app.controller('SearchCtrl', ['$http', function($http) {

	var self = this;
	var pendingTask;

	function fetch() {
		$http.get('http://www.omdbapi.com/?t=' + 
			self.search + '&tomatoes=true&plot=full')
		.success(function(response) {
			self.tvData = response;
			console.log('self.tvData', self.tvData);
		});
	}

	self.select = function(){
  	this.setSelectionRange(0, this.value.length);
	};

	self.change = function() {
		if (pendingTask) {
			clearTimeout(pendingTask);
		}
		pendingTask = setTimeout(fetch, 800);
	};






















}]); // End SearchCtrl