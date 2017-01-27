// 'use strict';

// module.exports = function($scope, MovieList, $http, $rootScope) {
//  MovieList.addMovie("kabali");
//  $rootScope.name = 'ignatius';
//   $scope.home = 'home';
//   // var self = this;

// 		// 		self.firstName = '';
// 		// 		self.lastName = '';

// 		// 		self.getFullName = function(){
// 		// 			return self.firstName + ' ' + self.lastName;
// 		// 		};

// 		// 		return self;

	
// 	var refresh = function () {
//         $http.get('http://www.omdbapi.com/?t=titanic&plot=short&r=json').success(function (response) {
//             console.log(response);
//             var movieObj={};
//             for(var key in response){
//             	if(key=='Title' || key== 'Language' || key== 'Poster' || key== 'Genre' || key== 'Director' || key== 'Actors'){
//             		movieObj[key] = response[key];
            		 
//             	}
//             }
//            console.log(movieObj);
//         });
//     };

//     var loadInformations = function(){
//     	 $http.get('/city/getCity').success(function (response) {
//             console.log('load city entered');
//             console.log(response);
//             var dropdown = document.getElementById("city");
// 			if (dropdown) {
// 				for (var key in response) {
// 				  if (response.hasOwnProperty(key)) {
// 				    addOption(dropdown, response[key].name);
// 				  }
// 				}			   
// 			}

// 			function addOption(selectbox, value) {
// 			    var optn = document.createElement("OPTION");
// 			    optn.text = value;
// 			    optn.value = value;
// 			    selectbox.options.add(optn);  
// 			}
//         });
		
//     }

//     refresh();
//     loadInformations();
// };

'use strict';

module.exports = function($scope, $http, $rootScope,$location) {

$scope.map = {
    control: {},
    center: {
        latitude: 11.024999,
        longitude: 77.010799
    },
    zoom: 14
  };

  $scope.directions = {
    origin: "",
    destination: "",
    showList: false
  }

var directionsDisplay = new google.maps.DirectionsRenderer();
var directionsService = new google.maps.DirectionsService();
var geocoder = new google.maps.Geocoder();


$scope.getDirections = function () {
    var request = {
      origin: $scope.directions.origin,
      destination: $scope.directions.destination,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        console.log(response);
      // $scope.res=response;

       for (var i = 0; i < 1; i++) {
        console.log(response.routes[i].legs[i].distance);
        var dis=response.routes[i].legs[i].distance.text;
        var timetaken=response.routes[i].legs[i].duration.text
        console.log(dis);
        console.log(timetaken);
        document.getElementById('distance').innerHTML=dis;
        document.getElementById('duration').innerHTML=timetaken;
   // console.log("PAIR " + i + ": " + [i].oid);
   // console.log("PAIR " + i + ": " + obj[i].cid);
}
      
       // console.log($scope.res.routes.legs.distance);
      //  directionsDisplay.setMap($scope.map.control.getGMap());
       // directionsDisplay.setPanel(document.getElementById('directionsList'));
      //  $scope.directions.showList = true;
        //var dis=$("#directionsList").text();
       // $scope.dist=dis;
      //  console.log($scope.dist);
      } else {
        alert('Google route unsuccesfull!');
      }
    });
  };
     function MyCtrl($scope) {
         $scope.gPlace1;
       }


 function MyCtrl1($scope) {
     $scope.gPlace;
   }

      //    function initMap() {
      //   var uluru = {lat: 11.0168, lng: 76.9558};
      //   var map = new google.maps.Map(document.getElementById('map'), {
      //     zoom: 4,
      //     center: uluru
      //   });
      //   var marker = new google.maps.Marker({
      //     position: uluru,
      //     map: map
      //   });
      // }

};