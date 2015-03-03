angular.module('meanApp', [ 'ngAnimate','appRoutes','authService', 'mainCtrl', 'userCtrl', 'userService']);

//create the controllers


//this will be the main controller for the entire site
// .controller('mainController', function(){

//     var vm = this;

//     //create a bigMessage variable to display in the view
//     vm.bigMessage = 'A smooth sea never made a skilled sailor.';

// })


//stuffservice controller where Stuff Factory is injected
// .controller('userController', function(Stuff){

// 	var vm = this;

// 	//get all the stuff
// 	Stuff.all()

// 	  //promise object
// 	  .success(function(data) {

// 	  	//bind the data to a controller variable
// 	  	//this comes from the stuffService
// 	  	vm.stuff = data;
// 	  });
// });

// // home page specific controller
// .controller('homeController', function(){

// 	var vm=this;

// 	vm.message= "This is the home page!";

// })

// //about page controller
// .controller('aboutController', function(){

// 	var vm=this;

// 	vm.message = 'Look! I am an about page.';

// })

// //contact page controller
// .controller('contactController', function(){

// 	var vm = this;

// 	vm.message = 'Contact Page!';

// });