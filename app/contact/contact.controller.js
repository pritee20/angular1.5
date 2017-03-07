(function() {
    "use strict";
    var movieApp = angular.module('movieApp');

    movieApp.controller('contactCtrl', ['$scope', '$q', 'githubData', function($scope, $q, githubData) {
        /*		var defer = $q.defer();
        		defer.promise.then(function(){
        			alert("show my contrller data in futuer");
        		});
        		defer.resolve();*/
        githubData.getiHubService()
            .then(function(result) {
                $scope.loadData = result;
            }, function(error) {
                alert('Failed to load');
            })



    }]);
}());
