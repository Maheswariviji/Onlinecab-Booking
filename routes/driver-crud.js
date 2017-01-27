var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
router.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require('mongoose');

var driverSchema = mongoose.Schema({
    driverID: String,
    city:String,
    location:String,
driverName:String,
Address:String,
    carType: String,
    carName:String,
    carNumber:String,
    password:String,
    confirmpassword:String
 });
var Driver = mongoose.model('Driver', driverSchema, 'driver');


  router.get('/der', function (req, res) {

    console.log("get driver details");
    Driver.find({}, function (err, docs) {
         res.json(docs);
    });
});


router.get('/der/:id', function (req, res) {

    console.log("get driver details based on id");
     Driver.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/der', function(req, res){
  console.log(req.body);
  var id = req.body.driverID;
  var dis=req.body.city;
  var loc=req.body.location;
  var name=req.body.driverName;
  var addr=req.body.Address;
  var type = req.body.carType;
  var cname= req.body.carName;
  var no=req.body.carNumber;
  var pwd=req.body.password;
  var confirmpwd=req.body.confirmpassword;
  var driverdetails = new Driver({
    driverID:id,
    city:dis,
    location:loc,
    driverName:name,
    Address:addr,
    carType:type,
    carName:cname,
    carNumber:no,
    password:pwd,
    confirmpassword:confirmpwd
  });

  driverdetails.save(function(err, docs){
 if ( err ) throw err;
    console.log(id);
    console.log("Driver created");
    res.json(docs);
  });

  })

router.delete('/der/:id', function(req, res){

   console.log("DELETE DRIVER ON SERVER");

      Driver.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/der/:id', function(req, res){

    console.log("REACHED DRIVER");
    console.log(req.body);
    Driver.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})


// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
