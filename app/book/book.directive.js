(function(){
	'use strict';
	var componentApp = angular.module('componentApp');
	componentApp.directive('book', function(){
		return {
			restrict: 'E',
			scope: {
				name: '@',
				street:'@street',
				customers: '=',
				action: '&'
			},
			templateUrl: "book/book-widget.html"
		}
	});
}());

/*Structuring AngularJS Directive Code*/
/*(function () {

    var directive = function () {
        return {

        };
    };

    angular.module('componentApp')
        .directive('book', directive);

}());*/