(function(){
	"use strict";
	var movieApp = angular.module('movieApp');
	movieApp.controller('reviewsController', function(){

		this.products = [
		{
			name: 'Awsome',
			price: 2533,
			reviews: [
					{
						stars: 5,
						body: 'I love this product',
						author: 'ptanwa@sapient.com'
					},
					{
						stars: 3,
						body: 'Poor product',
						author: 'ptanwa@sapient.com'
					},
					{
						stars: 1,
						body: 'I hate this product',
						author: 'ptanwa@sapient.com'
					}						
			]
		},
		{
				name: 'Awsome',
				price: 2533,
				reviews: [
					{
					stars: 5,
					body: 'I love this product',
					author: 'ptanwa@sapient.com'
					},
					{
					stars: 3,
					body: 'Poor product',
					author: 'ptanwa@sapient.com'
					},
					{
					stars: 1,
					body: 'I hate this product',
					author: 'ptanwa@sapient.com'
					}						
				]
		}];		
		this.review = {};
		this.addReviews = function(product){
			product.reviews.push(this.review);
			this.review = {};
		}
	});
}());