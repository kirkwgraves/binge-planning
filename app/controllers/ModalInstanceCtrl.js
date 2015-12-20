app.controller('ModalInstanceCtrl', ['$uibModalInstance', 'calEvent', 
	function($uibModalInstance, calEvent){

	var self = this;

	self.calEvent = calEvent;
	console.log('self.calEvent', self.calEvent);

	self.ok = function() {
		$uibModalInstance.close('cancel');
	};
	
}]);