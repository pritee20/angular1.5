(function(){
	'use strict';
	var movieApp = angular.module('movieApp');
	movieApp.controller('tabController', function(){
		var ctrl = this;
		ctrl.tab = "home";
		ctrl.selectTab = function(setTab){
			ctrl.tab = setTab;
		};
		ctrl.selectedTab = function(selectedTab){
			if(ctrl.tab === selectedTab){
				return ctrl.tab;
			}
		//other way to write the aabove code is below
			//return this.tab === selectedTab;
		};

	});
}());