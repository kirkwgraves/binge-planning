app.controller('SearchCtrl', ['$http', 'userFactory', function($http, userFactory) {

	var self = this;
	var pendingTask;

	self.addTvShow = function() {
		var newTvShow = {
			title: self.tvData.Title,
			cast: self.tvData.Actors,
			plot: self.tvData.Plot,
			year: self.tvData.Year,
			imdbID: self.tvData.imdbID,
			poster: self.tvData.Poster,
			startDate: "test",
			endDate: "test"
		};

		userFactory.addShow(newTvShow);
	};

	function fetch() {
		$http.get('http://www.omdbapi.com/?t=' + 
			self.search + '&tomatoes=true&plot=full')
		.success(function(response) {
			console.log('response', response);
			self.tvData = response;

				var xmlHTTP = new XMLHttpRequest();
		    xmlHTTP.open('GET','http://img.omdbapi.com/?i='+ response.imdbID + '&apikey=7c212437',true);

		    // Must include this line - specifies the response type we want
		    xmlHTTP.responseType = 'arraybuffer';

		    xmlHTTP.onload = function (e) {

		        var arr = new Uint8Array(this.response);


		        // Convert the int array to a binary string
		        // We have to use apply() as we are converting an *array*
		        // and String.fromCharCode() takes one or more single values, not
		        // an array.
		        var raw = String.fromCharCode.apply(null,arr);

		        // This works!!!
		        var b64 = btoa(raw);
		        var dataURL = 'data:image/jpeg;base64,' + b64;
		        console.log('dataURL', dataURL);
		        document.getElementById('poster-image').src = dataURL;
		        self.tvData.Poster = dataURL;
		        console.log('self.tvData.Poster', self.tvData.Poster);
		    };

		    xmlHTTP.send();


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
		pendingTask = setTimeout(fetch, 500);
	};

	self.select = function(){
  	this.setSelectionRange(0, this.value.length);
	};

}]); // End SearchCtrl