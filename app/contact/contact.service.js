(function(){
	"use strict";
	var movieApp = angular.module('movieApp');
	movieApp.service('githubData', function($http, $q){
		var defered = $q.defer();
		this.getiHubService = function(){
			return $http.get('https://api.github.com/users/haroldrv')
				.then(function(response){
					defered.resolve(response.data);
					return defered.promise;
				},function(response){
					defered.reject(response);
					return defered.promise;
				})
		}
	});

}());