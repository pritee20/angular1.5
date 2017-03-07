(function(){
	"use strict";
	var componentApp = angular.module('componentApp');
	componentApp.factory('restfulService', function($resource){
		return $resource('/api/entries/:id', {id: @_id}, {
			update: {
				method: 'PUT'
			}
		}); //full end point
	})

}());