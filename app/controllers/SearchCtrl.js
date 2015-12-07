app.controller('SearchCtrl', ['$http', 'userFactory', function($http, userFactory) {

	var self = this;
	var pendingTask;


	self.addTvShow = function() {
		var newTvShow = {
			title: self.tvData.Title,
			plot: self.tvData.Plot,
			year: self.tvData.Year,
			imdbID: self.tvData.imdbID,
			poster: self.tvData.Poster
		};

		userFactory.addShow(newTvShow);
	};

	function fetch() {
		$http.get('http://www.omdbapi.com/?t=' + 
			self.search + '&tomatoes=true&plot=full')
		.success(function(response) {
			self.tvData = response;
			console.log('self.tvData', self.tvData);
		});

		$http.get('http://www.omdbapi.com/?s=' + self.search)
		.success(function(response) {
			self.related = response;
			console.log('self.related', self.related);
		});
	}


	self.update = function(tvShow) {
		self.search = tvShow.Title;
		self.change();
	};
	
	self.change = function() {
		if (pendingTask) {
			clearTimeout(pendingTask);
		}
		pendingTask = setTimeout(fetch, 800);
	};

	self.select = function(){
  	this.setSelectionRange(0, this.value.length);
	};





















}]); // End SearchCtrl