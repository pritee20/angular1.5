(function(){
	"use strict";
	var componentApp = angular.module('componentApp');
	componentApp.controller('restCtrl',['$scope','restfulService', function($scope,restfulService){
		//esplored the Create, Read and Delete part of the CRUD 
		$scope.entry = restfulService.get({id: $scope.id}, function(){
			console.log(entry);// get returns a single entry
		});

		$scope.entries = restfulService.query(function(){
			console.log(entries); // query return all entries
		});

		$scope.entry = new restfulService(); // instantiate resource class
		$scope.entry.data =  "Some data need to save";
		restfulService.$save($scope.entry, function(){
			//do somthing here
		});// saves the entry assuming $scope.entry is the entry object

		$scope.entry = restfulService.get({id: $scope.id}, function(){
			$scope.entry.data = "update the data";
			$scope.entry.$update(function(){
				//update in backend
			}); // update function trigger the PUT request to the url 
			// similarly we can delete an entry
		})

	}]);
}());