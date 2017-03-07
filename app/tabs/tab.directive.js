(function(){
	'use strict';
	var movieApp = angular.module('movieApp');
	movieApp.directive('tab', function(){
		return {
			restrict: 'E',
			templateUrl: './tabs/tab.template.html'
			/*controller: function(){}*/
		};
	/*	controllerAs: pannerl*/
	});
}());