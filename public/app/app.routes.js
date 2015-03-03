// inject ngRoute for all our routing needs
angular.module('appRoutes', ['ngRoute'])

//configure our routes
.config(function($routeProvider, $locationProvider){
	$routeProvider

	//route for the home page

	.when('/',{
		templateUrl: 'app/views/pages/home.html',
		// controller : 'homeController',
		// controllerAs : 'home'
	});

	// //route for the about page
	// .when('/about',{
	// 	templateUrl: 'views/pages/about.html',
	// 	controller : 'aboutController',
	// 	controllerAs : 'about'

	// })

	// // route for contact page
	// .when('/contact',{
	// 	templateUrl: 'views/pages/contact.html',
	// 	controller : 'contactController',
	// 	controllerAs : 'contact'
	// });

	//get rid of the hash in the URL
	$locationProvider.html5Mode(true);
});