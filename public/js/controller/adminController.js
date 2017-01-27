
'use strict';

module.exports = function($scope, $http,$rootScope,$location) {

var i,minimumBill,fKM,waitingamt,amtPerKM;
    var refresh = function () {
        $http.get('/car/car').success(function (response) {
            console.log(' car type read');
            $scope.carlist = response;
            $scope.car = "";
        });
    };
  
  refresh();

    $scope.addCar = function () {
        console.log($scope.car);
        $http.post('/car/car', $scope.car).success(function (response) {
            console.log(response);
            console.log("CAR TYPE  IS ADDED SUCCESSFUL");
            refresh();
        });
    };


    $scope.removeCar = function (id) {
        console.log(id);
        $http.delete('/car/car/' + id._id).success(function (response) {
            console.log(response);
            console.log('CAR TYPE  IS DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editCar = function (id) {
         $http.get('/car/car/' + id._id).success(function (response) {
            $scope.car = response[0];
        });
    };

    $scope.updateCar = function () {
        console.log("REACHED UPDATE");
        console.log($scope.car._id);
        $http.put('/car/car/' + $scope.car._id, $scope.car).success(function (response) {
            console.log(response);
            refresh();
        })
    }

$scope.cartypechanged=function () {
    $http.get('/car/car').success(function (response) {
            $scope.clist = response;

            console.log(response);
            var type=document.getElementById("cab").value;
            console.log(type);
             try
 {
  for(i=0;i<=$scope.clist.length;i++)
        {
            if($scope.clist.length==0)
            {
                 alert("Invalid CarType");
                

            //     if($scope.clist.carType[i]==type)
            // {
               // console.log($scope.minBillclist[i]);
                 // 
            }
            else
            {
              
                if($scope.clist[i].carType==type)
             {
                console.log($scope.clist[i].minBill);
                 console.log($scope.clist[i].freeKM);
                  console.log($scope.clist[i].waitingCharge);
                   console.log($scope.clist[i].chargeperKM);

$scope.minimumBill=$scope.clist[i].minBill
$scope.fKM=$scope.clist[i].freeKM;
$scope.waitingamt=$scope.clist[i].waitingCharge;
$scope.amtPerKM=$scope.clist[i].chargeperKM;

document.getElementById("mBill").innerHTML=$scope.minimumBill;
document.getElementById("KM").innerHTML=$scope.fKM;
document.getElementById("wCharge").innerHTML=$scope.waitingamt;
document.getElementById("amt").innerHTML=$scope.amtPerKM;

             }
            }

//             }
//             else
//             {
//              alert("no CarType");
// }
            
        }
    }
     
      catch(e){}
            
})
};
// mapping car with city
var refreshmapping = function () {
        $http.get('/map/map').success(function (response) {
            console.log(' mapping');
            $scope.mappedlist = response;
            $scope.mapped = "";
        });
    };
refreshmapping();

$scope.add = function () {
    $scope.mapped.minBill=$scope.minimumBill;
    $scope.mapped.freeKM=$scope.fKM;
    $scope.mapped.waitingCharge=$scope.waitingamt;
    $scope.mapped.chargeperKM=$scope.amtPerKM;
        console.log($scope.mapped);
        $http.post('/map/map', $scope.mapped).success(function (response) {
            document.getElementById("mBill").innerHTML="";
document.getElementById("KM").innerHTML="";
document.getElementById("wCharge").innerHTML="";
document.getElementById("amt").innerHTML="";
            console.log(response);
            console.log("mapped IS ADDED SUCCESSFUL");
            refreshmapping();
        });
    };


    $scope.remove= function (id) {
        console.log(id);
        $http.delete('/map/map/' + id._id).success(function (response) {
            console.log(response);
            console.log('mapped IS DELETED SUCCESSFULLY');
           refreshmapping();
        });
    };

    $scope.edit = function (id) {
         $http.get('/map/map/' + id._id).success(function (response) {
            $scope.mapped = response[0];
            console.log(response[0]);
            document.getElementById("mBill").innerHTML= $scope.mapped.minBill;
document.getElementById("KM").innerHTML=$scope.mapped.freeKM;
document.getElementById("wCharge").innerHTML=$scope.mapped.waitingCharge;
document.getElementById("amt").innerHTML=$scope.mapped.chargeperKM;
            
        });
    };

    $scope.update = function () {
        console.log("REACHED UPDATE");
        console.log($scope.mapped._id);
        $http.put('/map/map/' + $scope.mapped._id, $scope.mapped).success(function (response) {
            console.log(response);
            document.getElementById("mBill").innerHTML="";
document.getElementById("KM").innerHTML="";
document.getElementById("wCharge").innerHTML="";
document.getElementById("amt").innerHTML="";
           refreshmapping();
        });
    };

// city
var cityrefresh = function () {
        $http.get('/city/city').success(function (response) {
            console.log('Cities readed');
            $scope.citylist = response;
            $scope.city = "";
        });
    };
 cityrefresh();
     $scope.addCity = function () {
        console.log($scope.city);
        $http.post('/city/city', $scope.city).success(function (response) {
            console.log(response);
            console.log("City  IS ADDED SUCCESSFUL");
            cityrefresh();
        });
    };


    $scope.removeCity = function (id) {
        console.log(id);
        $http.delete('/city/city/' + id._id).success(function (response) {
            console.log(response);
            console.log('City IS DELETED SUCCESSFULLY');
            cityrefresh();
        });
    };

    $scope.editCity = function (id) {
         $http.get('/city/city/' + id._id).success(function (response) {
            $scope.city = response[0];
        });
    };

    $scope.updateCity = function () {
        console.log("REACHED UPDATE");
        console.log($scope.city._id);
        $http.put('/city/city/' + $scope.city._id, $scope.city).success(function (response) {
            console.log(response);
            cityrefresh();
        });
    };

// locality
var locrefresh = function () {
        $http.get('/loc/loc').success(function (response) {
            console.log('locations readed');
            $scope.localist = response;
            $scope.loca = "";
        });
    };
 locrefresh();
     $scope.addloc = function () {
        console.log($scope.loca);
        $http.post('/loc/loc', $scope.loca).success(function (response) {
            console.log(response);
            console.log("LOCATION  IS ADDED SUCCESSFUL");
            locrefresh();
        });
    };


    $scope.removeloc = function (id) {
        console.log(id);
        $http.delete('/loc/loc/' + id._id).success(function (response) {
            console.log(response);
            console.log('LOCATION IS DELETED SUCCESSFULLY');
           locrefresh();
        });
    };

    $scope.editloc = function (id) {
         $http.get('/loc/loc/' + id._id).success(function (response) {
            $scope.loca = response[0];
        });
    };

    $scope.updateloc = function () {
        console.log("REACHED UPDATE");
        console.log($scope.loca._id);
        $http.put('/loc/loc/' + $scope.loca._id, $scope.loca).success(function (response) {
            console.log(response);
            locrefresh();
        });
    };
// driver
var driver = function () {
        $http.get('/der/der').success(function (response) {
            console.log('drivers details readed');
            $scope.driverlist = response;
            $scope.driver = "";
        });
    };
 driver();
     $scope.adddriver = function () {
        console.log($scope.driver);
        $http.post('/der/der', $scope.driver).success(function (response) {
            console.log(response);
            console.log("driver is added");
            driver();
        });
    };


    $scope.removedriver = function (id) {
        console.log(id);
        $http.delete('/der/der/' + id._id).success(function (response) {
            console.log(response);
            console.log('driver is deleted');
           driver();
        });
    };

    $scope.editdriver = function (id) {
         $http.get('/der/der/' + id._id).success(function (response) {
            $scope.driver = response[0];
        });
    };

    $scope.updatedriver = function () {
        console.log("REACHED UPDATE");
        console.log($scope.driver._id);
        $http.put('/der/der/' + $scope.driver._id, $scope.driver).success(function (response) {
            console.log(response);
            driver();
        });
    };





};
