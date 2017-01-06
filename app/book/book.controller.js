(function(){
	'use strict';
	var componentApp = angular.module('componentApp');
	componentApp.controller('bookController', function($scope){
		$scope.customer = {
        name: 'DataTables Usage Information',
        street: 'DataTables is a very flexible, advanced tables plugin for jQuery'
    	};
	    $scope.customers = [
	        {
	            name: 'David',
	            street: '1234 Anywhere St.'
	        },
	        {
	            name: 'Tina',
	            street: '1800 Crest St.'
	        },
	        {
	            name: 'Michelle',
	            street: '890 Main St.'
	        }
	    ];
	    $scope.changeData = function(){
			$scope.customers = [
	        {
	            name: 'Internet Explorer 4.0',
	            street: '	Win 98+ / OSX.2+'
	        },
	        {
	            name: '	Firefox 1.0',
	            street: 'Win 95+ / OSX.1+'
	        },
	        {
	            name: 'Opera 8.0',
	            street: 'KDE 3.5'
	        }
	    ]
	    }
	});
}());