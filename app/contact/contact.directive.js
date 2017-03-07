(function(){
	"use strict";
	var movieApp = angular.module('movieApp');
	movieApp.directive('contact', function(){
		return {
			restrict: "E",
			templateUrl: 'contact/contact.template.html'
		}


	});
}());