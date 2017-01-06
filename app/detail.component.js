(function(){
	'use strict';
	
	var componentApp = angular.module('componentApp');
		function controllerComponent(){
			var model = this;
			model.$routerOnActivate = function(next){
				model.id = next.params.id;
			};
		};
		componentApp.component('detail', {
			templateUrl:'detail-template.html',
			controllerAs: 'model',
			controller: controllerComponent,
			$routeConfig: [
				{path:'/HomeTab', component:'homeTab', name:'HomeTab'},
				{path:'/Profile', component:'profile', name:'Profile'},
				{path:'/Messages', component: 'messages', name:'Messages'},
				{path:'/Settings', component:'settings', name:'Settings'}
			]
		});

		componentApp.component('homeTab', {
			template: 'Home Tab'
		});
		componentApp.component('profile', {
			template: 'Profile'
		});
		componentApp.component('messages', {
			template: 'Messages'
		});
		componentApp.component('settings', {
			template: 'Settings'
		});
}());