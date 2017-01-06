(function(){
	'use strict';
	var componentApp = angular.module('componentApp');
	function componentController($http){
		var model = this;
		function fecthTableData($http){
			return $http.get('/table.json')
			.then(function(response){
				return response.data;
			});
		}
		model.tableList = [];
		model.$onInit = function(){
			fecthTableData($http).then(function(data){
				model.tableList = data;
			});
		}

	};
		componentApp.component('home', {
			templateUrl: 'home-template.html',
			controllerAs: 'model',
			controller: ['$http', componentController]
		});
}());