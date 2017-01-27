'use strict';


var angular = require('angular');
require('angular-route');
window.$ = window.jQuery = require('jquery');
require('bootstrap');
require('angularjs-dropdown-multiselect');
require('../css/app.scss');

var app = angular.module('MovieApp', [ 'ngRoute', 'angularjs-dropdown-multiselect' ]);

require('./controller');
require('./service');

// app.controller('BookingController', ["$scope", function($scope,$rootScope) {
//       $scope.onloadFun = function($scope,$rootScope) {
       
//   var id= Math.floor((1 + Math.random()) * 0x10000)
//     .toString(16)
//     .substring(1);
//     console.log(id);
//     $scope.BookingID=id;
//     $rootScope.ID=$scope.BookingID;
//     console.log($rootScope.ID);
//        // alert();
//        //document.getElementById('randomnumber').value = guid();
//        // guid();
//       }
//     }]);
// function guid() {
//   return s4() ;
// }

// function s4() {
//   var id= Math.floor((1 + Math.random()) * 0x10000)
//     .toString(16)
//     .substring(1);
//     console.log(id);
//     $rootScope.BookingID=id;
//     console.log($rootScope.BookingID);
// }

app.config(function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
    access: {restricted: false}
  })
  .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController',
      access: {restricted: false}
    })
    .when('/logout', {
      controller: 'LogoutController',
      access: {restricted: true}
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegisterController',
      access: {restricted: false}
    })
  .when('/booking', {
    templateUrl: 'views/booking.html',
    controller: 'BookingController',
  })
  .when('/contactus', {
    templateUrl: 'views/contactus.html',
    controller: 'ContactController',
  })
  .when('/admin', {
    templateUrl: 'views/admin.html',
    controller: 'AdminController',
  })
  .otherwise({
    redirectTo: '/',
  });
});

app.run(function ($rootScope, $location, $route, AuthService) {
  $rootScope.$on('$routeChangeStart',
    function (event, next, current) {
      AuthService.getUserStatus()
      .then(function(){
        if (next.access.restricted && !AuthService.isLoggedIn()){
          $location.path('/login');
          $route.reload();
        }
      });
  });
});




app.directive('googleplace', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {country: 'in'}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    model.$setViewValue(element.val());
                });
            });
        }
    };
});


app.directive('googleplace1', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {country: 'in'}
            };
            scope.gPlace1 = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace1, 'place_changed', function() {
                scope.$apply(function() {
                    model.$setViewValue(element.val());
                });
            });
        }
    };
});


// app.directive('city', function() {
//     return {
//         require: 'ngModel',
//         link: function(scope, element, attrs, model) {
//             var options = {
//                 types: [],
//                 componentRestrictions: {country: 'in'}
//             };
//             scope.cityname = new google.maps.places.Autocomplete(element[0], options);

//             google.maps.event.addListener(scope.cityname, 'place_changed', function() {
//                 scope.$apply(function() {
//                     model.$setViewValue(element.val());
//                 });
//             });
//         }
//     };
// });


// app.directive('locality', function() {
//     return {
//         require: 'ngModel',
//         link: function(scope, element, attrs, model) {
//             var options = {
//                 types: [],
//                 componentRestrictions: {country: 'in'}
//             };
//             scope.localityname = new google.maps.places.Autocomplete(element[0], options);

//             google.maps.event.addListener(scope.localityname, 'place_changed', function() {
//                 scope.$apply(function() {
//                     model.$setViewValue(element.val());
//                 });
//             });
//         }
//     };
// });


app.filter('unique', function() {
   // we will return a function which will take in a collection
   // and a keyname
   return function(collection, keyname) {
      // we define our output and keys array;
      var output = [], 
          keys = [];
      
      // we utilize angular's foreach function
      // this takes in our original collection and an iterator function
      angular.forEach(collection, function(item) {
          // we check to see whether our object exists
          var key = item[keyname];
          // if it's not already part of our keys array
          if(keys.indexOf(key) === -1) {
              // add it to our keys array
              keys.push(key); 
              // push this item to our final output array
              output.push(item);
          }
      });
      // return our array which should be devoid of
      // any duplicates
      return output;
   };
});