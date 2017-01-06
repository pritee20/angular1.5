(function(){
	'use strict';
	var componentApp = angular.module('componentApp');
	componentApp.component('mainApp', {
		templateUrl: 'main-app-template.html',
		$routeConfig: [
			{path:'/home', component: 'home', name:'Home'},
			{path:'/about', component:'about', name: 'AboutUs'},
			{path:'/detail/:id/...', component: 'detail', name: 'Details'},
			{path:'/**', redirectTo:['Home']}
			]
		});
	

}());
