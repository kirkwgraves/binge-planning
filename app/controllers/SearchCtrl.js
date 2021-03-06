app.controller('SearchCtrl', ['Auth', '$http', '$firebaseArray', 'userFactory', '$uibModal', function(Auth, $http, $firebaseArray, userFactory, $uibModal) {

	var self = this;
	var authData = Auth.$getAuth();
	console.log('authData', authData);
	var user = authData.uid;
	var pendingTask;
	var posterPath;


	self.addTvShow = function(newTvShow) {
		
		loggedInUser = userFactory.getUser();
		
		var ref = new Firebase('https://binge-planning.firebaseio.com/users/' + user + '/shows/');
		
		var newTvShow = {
			title: self.tvData.Title,
			cast: self.tvData.Actors,
			plot: self.tvData.Plot,
			year: self.tvData.Year,
			imdbID: self.tvData.imdbID,
			poster: self.tvData.Poster,
			startDate: '',
			endDate: ''
		};
			
		self.showsArray = $firebaseArray(ref);
		self.showsArray.$add(newTvShow)
		.then(function(ref) {
			var id = ref.key();
			console.log('Added show with id: ' + id);
			newTvShow.id = id;
			console.log('newTvShow', newTvShow);
			self.clear();
			self.showModal();
		});

		
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

	};

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

	self.clear = function() {
		self.search = "";
		self.change();
	};

	self.select = function(){
  	this.setSelectionRange(0, this.value.length);
	};

	self.showModal = function() {
	  var modalInstance = $uibModal.open({
	    templateUrl: 'partials/success-modal.html',
	    controller: 'SuccessModalCtrl as successModalCtrl',
  	});
	}

}]); // End SearchCtrl