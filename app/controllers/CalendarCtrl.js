app.controller('CalendarCtrl', ['$firebaseArray', 'userFactory', 
	function($firebaseArray, userFactory) {

	var self = this;
	self.eventSources = [];

	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();

	self.eventSources = {
		events: [
			{
	  		"title": 'All Day Event',
	  		"start": new Date(y, m, d)
	  	},
	  	{
	  		"title": 'Long Event',
	  		"start": new Date(y, m, d - 5),
	  		"end": new Date(y, m, d - 2)
	  	}
	  ]
	};


}]);