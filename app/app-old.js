'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider) {

// For any unmatched url, redirect to /state1 
  $urlRouterProvider.otherwise('/view1');

  // Now set up the states 
  $stateProvider
  	.state('view1',{
  		url: '/ParentViewOne',
  		templateUrl: "/view1/view1.html"

  	})
  	// nested list with custom controller
  	.state('view1.subListing', {
  		url: '/NestedPage1',
  		templateUrl: '/view1/subListing.html'
  	})
  	.state('view1.subListing2', {
  		url: '/NestedPage2',
  		templateUrl: 'view1/subListing2.html'
  	})
  	.state('view2',{
  		url: '/view2',
  		templateUrl: "/view2/view2.html"

  	})
  });


