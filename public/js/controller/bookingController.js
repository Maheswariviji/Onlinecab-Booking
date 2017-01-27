'use strict';

module.exports = function($scope,$rootScope,$http) {

$scope.details=false;
var i,j,apprfare,dis,timetaken;

var timepicker = new TimePicker('time', {
  lang: 'en',
  theme: 'dark'
});

var input = document.getElementById('time');

timepicker.on('change', function(evt) {
  
  var value = (evt.hour || '00') + ':' + (evt.minute || '00');
  evt.element.value = value;

});


// $(document).ready(
  
 
//   function () {
//     $( "#datepicker" ).datepicker({
//       changeMonth: true,//this option for allowing user to select month
//       changeYear: true //this option for allowing user to select from year range
//     });
//   }

// );

  $(function () {
       
  var id= Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    console.log(id);
     $("#randomnumber").val('B'+id);
    // document.getElementById("randomnumber").innerHTML=id;
   // $scope.BookingID=id;
   // document.getElementById("randomnumber").innerHTML=$scope.BookingID;
    
  //  console.log($scope.BookingID);

  });

$scope.checkDate=function () {

            var EnteredDate = document.getElementById("dt").value; //for javascript

            var EnteredDate = $("#dt").val(); // For JQuery

            var date = EnteredDate.substring(0, 2);
            var month = EnteredDate.substring(3, 5);
            var year = EnteredDate.substring(6, 10);

            var myDate = new Date(year, month - 1, date);

            var today = new Date();

            if (myDate > today) {
                alert("Entered date is greater than today's date ");
            }
            else {
                alert("Entered date is less than today's date ");
            }
        };

  //onloadFun();
// $scope.check=function() {
//     var d = new Date();
//     var hour = d.getHours(), mins = d.getMinutes();
    
//     var current = hour + ':' + mins, user = document.getElementById("myTime").value;
    
//     if (user < current) {
//         alert('Please enter the time greater than current time');
//     }
//   }
// }
// function guid() {
//   return s4() ;
// }

// function s4() {
//   return Math.floor((1 + Math.random()) * 0x10000)
//     .toString(16)
//     .substring(1);
// }
// $scope.BID=function () {
//    document.getElementById('randomnumber').value = guid();

// };

// function myFunction() {
//     document.getElementById('randomnumber').value = guid();
// //   var id=  document.getElementById('jsIdResult').value;
// }
//document.getElementsById("btn").addEventListener('click',myFunction);
// document.getElementById('jsGenId').addEventListener('load', function() {
//   document.getElementById('jsIdResult').value = guid();
//   var id=  document.getElementById('jsIdResult').value;
//   alert(id);
// })
// $(function () {

//      var numMin =  '11';
//      var numMax = '111';

//      var adjustedHigh = (parseFloat(numMax) - parseFloat(numMin)) + 1;


//      var numRand = Math.floor(Math.random() * adjustedHigh) + parseFloat(numMin);


//      if ((IsNumeric(numMin)  && (IsNumeric(numMax)) && (parseFloat(numMin) <= parseFloat(numMax )) && (numMin != '') && (numMax != ''))) {
//          $("#randomnumber").val('B'+numRand);
//      }
// });

// $scope.cabtype=function () {

//     $http.get('/car/car').success(function (response) {
//                 $scope.clist = response;

//             console.log(response);
//             var type=document.getElementById("cab1").value;
//             console.log(type);
//              try
//  {
//   for(i=0;i<=$scope.clist.length;i++)
//         {
//             if($scope.clist.length==0)
//             {
//                  alert("Invalid CarType");
            
//             }
//             else
//             {
              
//                 if($scope.clist[i].carType==type)
//              {
//                 console.log($scope.clist[i].minBill);
//                  console.log($scope.clist[i].freeKM);
//                   console.log($scope.clist[i].waitingCharge);
//                    console.log($scope.clist[i].chargeperKM);

// $scope.minimumBill=$scope.clist[i].minBill
// $scope.fKM=$scope.clist[i].freeKM;
// $scope.waitingamt=$scope.clist[i].waitingCharge;
// $scope.amtPerKM=$scope.clist[i].chargeperKM;

// document.getElementById("mBill").innerHTML=$scope.minimumBill;
// document.getElementById("KM").innerHTML=$scope.fKM;
// document.getElementById("wCharge").innerHTML=$scope.waitingamt;
// document.getElementById("amt").innerHTML=$scope.amtPerKM;

//              }
//             }
        
//         }
//     }
     
//       catch(e){}
            
// })
// };

  var bookingcab = function () {
        $http.get('/bk/bk').success(function (response) {
            console.log(' booking data read');
            $scope.bookinglist = response;
            $scope.bking = "";
        });
    };
  
  bookingcab();  


  $scope.addbk = function () {
    var ID=document.getElementById("randomnumber").val;
    var t=document.getElementById("time").innerHTML;
    $scope.bking.bookingID=ID;
    $scope.bking.Time=t;
                              console.log($scope.bking);
                              $http.post('/bk/bk',$scope.bking).success(function (response) {
                                  console.log(response);
                                  console.log("BOOKING IS SUCCESSFUL");
                                
                                 document.getElementById("mBill").innerHTML="";
document.getElementById("KM").innerHTML="";
document.getElementById("wCharge").innerHTML="";
document.getElementById("amt").innerHTML="";
             bookingcab();
                              });
                          };

  var cityrefresh = function () {
        $http.get('/city/city').success(function (response) {
            console.log('Cities readed');
            $scope.citylist = response;
            $scope.city = "";
        });
    };

cityrefresh();

    var detailscab =function () {
      $http.get('/car/car').success(function (response) {
                $scope.clist = response;
 console.log(response);
            var type=document.getElementById("cab1").value;
            console.log(type);
             try
 {
  for(i=0;i<=$scope.clist.length;i++)
        {
            if($scope.clist.length==0)
            {
                 alert("Invalid CarType");
            
            }
            else
            {
              
                if($scope.clist[i].carType==type)
             {
 console.log(dis);
              if(  $scope.clist[i].freeKM>=dis)
{

              apprfare=parseInt($scope.clist[i].minBill);
              console.log(apprfare);

$scope.minimumBill=$scope.clist[i].minBill
$scope.fKM=$scope.clist[i].freeKM;
$scope.waitingamt=$scope.clist[i].waitingCharge;
$scope.amtPerKM=$scope.clist[i].chargeperKM;


//document.getElementById("mBill").innerHTML=$scope.minimumBill;
 document.getElementById("fare").innerHTML=apprfare;
document.getElementById("KM").innerHTML=$scope.fKM;
document.getElementById("wCharge").innerHTML=$scope.waitingamt;
document.getElementById("amt").innerHTML=$scope.amtPerKM;
document.getElementById("distance").innerHTML=dis;
document.getElementById("dtime").innerHTML=timetaken;
}
else
{
  console.log(type);/*
  if($scope.clist[i].carType==type && $scope.clist[i].freeKM<dis)
              {*/
               // $scope.fareDetails=true;
                console.log($scope.clist[i].freeKM);
                var fkmcab=$scope.clist[i].freeKM;
               
                var extrakm=parseFloat(parseFloat(dis)-fkmcab);
                var charge=$scope.clist[i].chargeperKM
                apprfare=parseInt(extrakm*charge + $scope.clist[i].minBill);
              console.log(apprfare);

$scope.minimumBill=$scope.clist[i].minBill
$scope.fKM=$scope.clist[i].freeKM;
$scope.waitingamt=$scope.clist[i].waitingCharge;
$scope.amtPerKM=$scope.clist[i].chargeperKM;

document.getElementById("mBill").innerHTML=$scope.minimumBill;
 document.getElementById("fare").innerHTML=apprfare;
document.getElementById("KM").innerHTML=$scope.fKM;
document.getElementById("wCharge").innerHTML=$scope.waitingamt;
document.getElementById("amt").innerHTML=$scope.amtPerKM;
document.getElementById("distance").innerHTML=dis;
console.log(timetaken);
document.getElementById("dtime").innerHTML=timetaken;
              // }
  // alert("freeKM is not equal to distance");
}

             }
           }
            //  else
            //  {
              
            //  }
            // }
        }
        }
    
     
      catch(e){}
      })
    
            
}
    

    
    var refresh = function () {
        $http.get('/car/car').success(function (response) {
            console.log(' car type read');
            $scope.carlist = response;
            $scope.car = "";
        });
    };
  
  refresh();
  
  var refreshmapping = function () {
        $http.get('/map/map').success(function (response) {
            console.log(' mapping');
            $scope.mappedlist = response;
             
            $scope.mapped = "";
        });
    };

     

refreshmapping();
var locrefresh = function () {
        $http.get('/loc/loc').success(function (response) {
            console.log('locations readed');
            $scope.localist = response;
            $scope.loca = "";
        });
    };
    
 locrefresh();

$scope.onChange = function(){
    var x = document.getElementById("droploc");
 var sel=document.getElementById("pickuploc");
 var value = sel.options[sel.selectedIndex].value; // or sel.value
var text1 = sel.options[sel.selectedIndex].text; 
// alert(text1);
for (var i = 0; i < x.length; i++)
{
 if(text1==x.options[i].text)
 {
  
     x.remove(i);
    
   
   
 }
}
  };




// $scope.directions = {
//     origin: "",
//     destination: "",
//     showList: false
//   }

var directionsDisplay = new google.maps.DirectionsRenderer();
var directionsService = new google.maps.DirectionsService();
var geocoder = new google.maps.Geocoder();


// $scope.loc=function()
// {
//   var $dropdown1 = $("select[name='dropdown1']");
// var $dropdown2 = $("select[name='dropdown2']");

// $dropdown1.change(function() {
//     $dropdown2.empty().append($dropdown1.find('option').clone());
//     var selectedItem = $(this).val();
//     if (selectedItem) {
//         $dropdown2.find('option[value="' + selectedItem + '"]').remove();
//     }
// });
// }

$scope.get = function () {
  $scope.details=true;
  
  var src=document.getElementById("pickloc").innerHTML;
  var dest=document.getElementById("droploc");
  var value = dest.options[dest.selectedIndex].value; // or sel.value
var text1 = dest.options[dest.selectedIndex].text; 

$scope.loc1=src;
$scope.loc2=text1;
// if($scope.loc1==$scope.loc2)
//       {
//         $scope.fareDetails=false;
//       }
    var request = {
      // origin: $scope.directions.origin,
      // destination: $scope.directions.destination,
        origin: $scope.loc1,
      destination: $scope.loc2,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        console.log(response);
      // $scope.res=response;

       for (var i = 0; i < 1; i++) {
        console.log(response.routes[i].legs[i].distance);
        dis=response.routes[i].legs[i].distance.text;
        timetaken=response.routes[i].legs[i].duration.text
        console.log(dis);
        console.log(timetaken);
        detailscab();

}

 } else {
        alert('Google route unsuccesfull!');
      }
    });
  };


// $http.get('/map/map').success(function (response) {
//             console.log(' mapping');
//             $scope.mlist = response;
//             $scope.map = "";
//         try
//  {
//   for(j=0;j<=$scope.mlist.length;j++)
//         {
//             if($scope.mlist.length==0)
//             {
//                  alert("mapping prb");
            
//             }
//             else
//             {
              
//                 if($scope.mlist[i].freeKM==dis)
//              {
             
//                apprfare=parseInt(mlist[i].freeKM * )
             




//         });




        


      //}
      
       // console.log($scope.res.routes.legs.distance);
      //  directionsDisplay.setMap($scope.map.control.getGMap());
       // directionsDisplay.setPanel(document.getElementById('directionsList'));
      //  $scope.directions.showList = true;
        //var dis=$("#directionsList").text();
       // $scope.dist=dis;
      //  console.log($scope.dist);
      //} else {
       // alert('Google route unsuccesfull!');
     // }
  //  }}
  // };




};